# API de Validação de CPF

Esta é uma API simples desenvolvida em Node.js para validar números de CPF (Cadastro de Pessoas Físicas) utilizando um endpoint REST.

## Tecnologias Utilizadas
- Node.js
- Express.js
- Swagger (para documentação da API)

## Rotas Disponíveis

### **Validar CPF**
**Endpoint:** `POST /CPFsend`

**Parâmetros:**
- Envie um JSON com o CPF no corpo da requisição:
  ```json
  {
    "CPF": "12345678909"
  }
  ```
## Estrutura do Projeto
```
API-validarCPF-JS/
├── routes/
│   ├── cpfRoutes.js  # Rota de validação do CPF
├── index.js          # Arquivo principal da API
├── package.json      # Dependências do projeto
├── README.md         # Documentação da API
```
