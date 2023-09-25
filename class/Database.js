// módulo para conexão com o banco de dados em Node.js
const mysql = require('mysql2');

class Database {
    constructor() {
        // Criação da instância da conexão com o banco de dados
        this.db = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'helpfriendbanco',
            port: 3306
        });
        // estabelece a conexão com o banco de dados após a criação do objeto
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
                // função de retorno de chamada passando erros
                callback(err, null);
                return;
            }
            // função de retorno de chamada passando resultados
            callback(null, results);
        });
    }
}

// módulo para ser importado em outros arquivos JavaScrip
module.exports = Database;