const express = require('express');
const swaggerUi = require('swagger-ui-express');
const yamljs = require('yamljs');
const cpfRoutes = require('./routes/RouteValidarCPF');

const app = express();
// Esse carinha aq de baixo, me causou MUITOS problemas 😡
app.use(express.json());

// Pra nao poluir o main usar o YAML 🫡
const swaggerDocument = yamljs.load('./swagger.yaml'); //puxa do arquivo
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', cpfRoutes);

app.listen(3000, () => {
    console.log('http://localhost:3000/api-docs');
});