const mysql = require('mysql2');

class Database {
    constructor() {
        this.db = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'helpfriendbanco',
            port: 3306
        });
        this.connect();
    }

    connect() {
        this.db.connect((err) => {
            if (err) {
                console.error("Erro ao conectar ao banco de dados:", err);
                process.exit(1);
            }
            console.log('Conectado ao banco de dados MySQL');
        });
    }

    // Função para executar consultas SQL
    query(sql, params, callback) {
        this.db.query(sql, params, (err, results) => {
            if (err) {
                console.error("Erro ao executar a consulta:", err);
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }
}

module.exports = Database;