const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = 3000; // Porta que está rodando

// Middleware para servir arquivos estáticos
app.use(express.static('public')); // Permitir que os arquivos sejam mostrados no navegador
app.use(express.static('uploads')); // Permitir que os arquivos sejam mostrados no navegador 
app.use('/', routes); // Link das rotas

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});