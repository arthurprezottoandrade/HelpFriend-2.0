const express = require('express');
const routes = require('./routes');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // A pasta onde seus arquivos EJS estão localizados

app.use('/public', express.static('public'));
app.use('/uploads', express.static('uploads'));
app.use('/', routes); // Link das rotas

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});