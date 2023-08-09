const express = require('express');
const db = require('./banco');

const app = express();
const PORT = 3000;

// Rota de teste para buscar dados do banco
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/inicio.html');
});

app.use(express.json()); 

app.post('/update', (req, res) => {
    const textoTeste = req.body.textoTeste;
    const sql = 'UPDATE teste SET teste = ? WHERE teste = "teste2"';
    db.query(sql, [textoTeste], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao atualizar registro.');
            return;
        }
        res.send('Atualizado com sucesso!');
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});