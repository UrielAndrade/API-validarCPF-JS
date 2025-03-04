const express = require('express');
const verificarCPF = require('../validarCPF');

const router = express.Router();

router.post('/validarCPF', (req, res) => {
    res.send(verificarCPF(req.body.CPF) ? 'CPF válido' : 'CPF inválido');
});

module.exports = router;