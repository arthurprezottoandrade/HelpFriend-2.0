const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'helpfriendbanco',
    port: 3306
    // Se precisar de uma porta específica, adicione aqui: port: YOUR_MYSQL_PORT
});

db.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
        process.exit(1);  // Termina o processo com um código de erro
    }
    console.log('Conectado ao banco de dados MySQL');
});

const inserirCachorro = (dados, callback) => {
    const sql = 'INSERT INTO cachorro (Nome, Id_Raca, Ano_Nascimento, Porte, Adotado, Situacao, Id_Instituicao, Imagem, Apelido) VALUES (?, 1, ?, ?, \'nao\', ?, 1, ?, ?)';
    db.query(sql, [dados.nome, dados.anoNascimento, dados.porte, dados.situacao, dados.imagem, dados.apelido], callback);
};

const buscarCachorros = (callback) => {
    const sql = 'SELECT * FROM cachorro';
    db.query(sql, callback);
  };
  
module.exports = { db, inserirCachorro, buscarCachorros };