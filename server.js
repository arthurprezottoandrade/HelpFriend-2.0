const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'HelpFriend'
});

// Conecte-se ao banco de dados
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado ao banco de dados MySQL');
});

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