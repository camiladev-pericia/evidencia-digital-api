| Método | Rota | Descrição | Acesso |
|:--- |:--- |:--- |:---:|
| **POST** | `/auth/login` | Realiza o login e retorna o Token JWT | 🔐 Privado |
| **GET** | `/evidencias` | Lista todas as evidências cadastradas | 🔐 Privado |
| **POST** | `/evidencias` | Cadastra uma nova evidência digital | 🔐 Privado |
| **GET** | `/evidencias/:id` | Detalhes de uma evidência específica e seu HASH | 🔐 Privado |
| **DELETE** | `/evidencias/:id` | Remove uma evidência do sistema | 🔐 Privado |
