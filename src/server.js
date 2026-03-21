const express = require('express');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const pool = require('./config/db');
require('dotenv').config();

const app = express();
const saltRounds = 10;

app.use(express.json());

// ==========================================
// 1. ROTA DE CADASTRO DE PERITOS (COM BCRYPT)
// ==========================================
app.post('/usuarios/register', async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        // Criptografia da senha antes de salvar
        const hashSenha = await bcrypt.hash(senha, saltRounds);

        const novoUsuario = await pool.query(
            'INSERT INTO usuarios (nome, email, senha_hash) VALUES ($1, $2, $3) RETURNING id, nome, email',
            [nome, email, hashSenha]
        );
        
        res.status(201).json({
            mensagem: "Perito registrado com sucesso e senha protegida!",
            usuario: novoUsuario.rows[0]
        });
    } catch (err) {
        res.status(500).json({ error: "Erro ao registrar perito: " + err.message });
    }
});

// ==========================================
// 2. REGISTRO DE EVIDÊNCIA (COM SHA-256)
// ==========================================
app.post('/evidencias', async (req, res) => {
    const { nome_arquivo, conteudo_para_hash, coletado_por } = req.body;
    
    // Geração do Hash Forense (Impedindo alteração posterior)
    const hash = crypto.createHash('sha256').update(conteudo_para_hash).digest('hex');

    try {
        const novaEvidencia = await pool.query(
            'INSERT INTO evidencias (nome_arquivo, hash_sha256, coletado_por) VALUES ($1, $2, $3) RETURNING *',
            [nome_arquivo, hash, coletado_por]
        );

        // Registro manual de Log (Caso não tenha a Trigger no Banco)
        await pool.query(
            'INSERT INTO logs_auditoria (usuario_id, acao) VALUES ($1, $2)',
            [coletado_por, `Evidência coletada: ${nome_arquivo} | Hash: ${hash.substring(0, 10)}...`]
        );

        res.status(201).json({ 
            mensagem: "Evidência registrada. Integridade SHA-256 confirmada!",
            hash_digital: hash,
            dados: novaEvidencia.rows[0] 
        });
    } catch (err) {
        res.status(500).json({ error: "Falha na custódia da evidência: " + err.message });
    }
});

// ==========================================
// 3. CONSULTA DE LOGS (CADEIA DE CUSTÓDIA)
// ==========================================
app.get('/logs', async (req, res) => {
    try {
        const queryText = `
            SELECT l.id, u.nome as perito, l.acao, l.data_hora 
            FROM logs_auditoria l 
            JOIN usuarios u ON l.usuario_id = u.id 
            ORDER BY l.data_hora DESC
        `;
        const logs = await pool.query(queryText);
        res.status(200).json(logs.rows);
    } catch (err) {
        res.status(500).json({ error: "Erro ao acessar trilha de auditoria: " + err.message });
    }
});

// ==========================================
// INICIALIZAÇÃO DO SISTEMA
// ==========================================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`
    --------------------------------------------------
    🔥 SISTEMA DE EVIDÊNCIAS DIGITAIS (DEMS) ATIVO
    🔐 Segurança: Bcrypt & SHA-256 Habilitados
    📡 Endpoint: http://localhost:${PORT}
    🗄️  Banco de Dados: ${process.env.DB_DATABASE}
    --------------------------------------------------
    `);
});