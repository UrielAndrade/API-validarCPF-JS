# API de Validação de CPF

Esta é uma API simples desenvolvida em Node.js para validar números de CPF (Cadastro de Pessoas Físicas) utilizando um endpoint REST.

## Tecnologias Utilizadas
- Node.js
- Express.js
- Swagger (para documentação da API)

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/UrielAndrade/API-validarCPF-JS.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd API-validarCPF-JS
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Como Executar
Para iniciar o servidor localmente, utilize o seguinte comando:
```bash
npm start
```
A API ficará disponível em: `http://localhost:3000`

## Documentação da API (Swagger)
Após iniciar a aplicação, você pode acessar a documentação interativa do Swagger em:
```
http://localhost:3000/api-docs
```

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

**Respostas:**
- `200 OK`: CPF válido
- `400 Bad Request`: CPF inválido

## Estrutura do Projeto
```
API-validarCPF-JS/
├── routes/
│   ├── cpfRoutes.js  # Rota de validação do CPF
├── index.js          # Arquivo principal da API
├── package.json      # Dependências do projeto
├── README.md         # Documentação da API
```

## Contribuição
Sinta-se à vontade para contribuir! Faca um fork do repositório, crie um branch com suas alterações e envie um Pull Request.

## Licença
Este projeto está licenciado sob a MIT License.

