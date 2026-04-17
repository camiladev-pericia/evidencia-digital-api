# 🔍 Digital Evidence API (evidencia-digital-api)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)

### ⚖️ Propósito do Projeto
Esta API foi desenvolvida para gerir o ciclo de vida de evidências digitais, garantindo a **integridade dos dados** e a **cadeia de custódia**. Como Perita Digital atuante no **TJMG**, utilizei as regras de negócio do mundo jurídico para criar uma solução de backend robusta, focada em segurança e rastreabilidade.

Este projeto demonstra competências avançadas em **Análise e Desenvolvimento de Sistemas (ADS)**, com foco em segurança da informação.

---

### 🛠 Stack Técnica
- **Runtime:** Node.js
- **Framework:** Express.js
- **Banco de Dados:** PostgreSQL (Relacional)
- **Autenticação:** JWT (JSON Web Token) com bcrypt para hashing de senhas.
- **Segurança:** Implementação de middlewares para proteção de rotas e validação de dados.

---

### 🚀 Funcionalidades Principais
- **Gestão de Custódia:** Registro e rastreio detalhado de evidências digitais.
- **Autenticação de Usuários:** Sistema de login seguro para acesso restrito às informações.
- **Integridade de Dados:** Lógica de backend preparada para evitar duplicação ou perda de informações críticas.
- **Endpoints REST:** Arquitetura limpa para fácil integração com frontends ou outras APIs.

---

### 📂 Estrutura do Projeto
```text
src/
 ┣ controllers/   # Regras de negócio e manipulação de requisições
 ┣ database/      # Conexão e scripts de migração do banco
 ┣ middlewares/   # Verificação de tokens e permissões de acesso
 ┣ routes/        # Definição dos caminhos da API
 ┗ app.js         # Configuração e inicialização do servidor 




