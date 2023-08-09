const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos
app.use('/public', express.static('public'));

app.use(express.json()); 
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});