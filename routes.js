const express = require('express');
const db = require('./banco');
const router = express.Router();

// Rota de teste para buscar dados do banco
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/inicio.html');
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