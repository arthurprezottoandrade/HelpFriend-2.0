const express = require('express');
const db = require('./banco');
const router = express.Router();

// Rota de teste para buscar dados do banco
router.get('/inicio', (req, res) => {
    res.sendFile(__dirname + '/pages/inicio.html');
});
router.get('/cadastroCachorro', (req, res) => {
    res.sendFile(__dirname + '/pages/cadastroCachorro.html');
});
router.get('/mostraCachorro', (req, res) => {
    res.sendFile(__dirname + '/pages/mostraCachorro.html');
});
router.get('/atualizaCachorro', (req, res) => {
    res.sendFile(__dirname + '/pages/atualizaCachorro.html');
});
router.get('/deletaCachorro', (req, res) => {
    res.sendFile(__dirname + '/pages/deletaCachorro.html');
});


router.post('/update', (req, res) => {
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

module.exports = router;