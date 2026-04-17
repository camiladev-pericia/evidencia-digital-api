🛡️ Digital Evidence Management System (DEMS)
API para Gestão e Integridade de Evidências Digitais

Este projeto é uma API robusta desenvolvida para peritos digitais, focada em garantir os três pilares da computação forense: Integridade, Autenticidade e Rastreabilidade.

💎 Diferenciais Técnicos (Forensic Tech)
Integridade SHA-256: Cada evidência enviada gera automaticamente um hash SHA-256 único. Qualquer alteração de um único bit no arquivo invalidará o hash, provando a quebra da integridade.

Segurança de Identidade (Bcrypt): Senhas de peritos são armazenadas utilizando bcrypt com salt, impedindo a leitura direta mesmo em caso de vazamento do banco de dados.

Trilha de Auditoria (Logs): Sistema de logs imutável que registra quem (perito), o quê (ação) e quando (timestamp) uma evidência foi manipulada.

Persistência Relacional: Utiliza PostgreSQL para garantir o relacionamento íntegro entre peritos, evidências e logs de acesso.

🛠️ Tecnologias Utilizadas
Node.js (Runtime)

Express (Framework Web)

PostgreSQL (Banco de Dados Relacional)

Bcrypt (Segurança de Credenciais)

Crypto (Geração de Hash Forense)

Dotenv (Proteção de Variáveis de Ambiente)

MétodoRotaDescriçãoAcessoGET/evidenciasLista todas as evidências com paginaçãoPrivado (JWT)GET/evidencias/:idDetalhes de uma evidência e conferência de HASHPrivado (JWT)POST/evidenciasCadastro de nova evidência (Cadeia de Custódia)Privado (JWT)PUT/evidencias/:idAtualização de metadados da evidênciaPrivado (JWT)DELETE/evidencias/:idRemoção de registro do sistemaPrivado (JWT)

Método        Rota                            Descrição                                    Acesso
**GET**      /evidencias        Lista todas as evidências com paginação                  Privado(JWT)
**GET**      /evidencias/:id    Detalhes de uma evidência e conferência de HASH          Privado(JWT)
**POST**     /evidencias        Cadastro de nova evidência (Cadeia de Custódia)          Privado(JWT)
**PUT**      /evidencias/:id    Atualização de metadados da evidência                    Privado(JWT)
**DELETE**   /evidencias/:id    Remoção de registro do sistema                           Privado (JWT)
