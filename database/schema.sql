-- Estrutura para o Sistema de Evidências Digitais
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha_hash TEXT
);

CREATE TABLE evidencias (
    id SERIAL PRIMARY KEY,
    nome_arquivo VARCHAR(255),
    hash_sha256 CHAR(64) UNIQUE,
    data_coleta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    coletado_por INT REFERENCES usuarios(id)
);

CREATE TABLE logs_auditoria (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    acao TEXT,
    data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);