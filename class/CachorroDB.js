const Database = require('./Database');

class CachorroDB extends Database {
    constructor() {
        super();
    }

    inserirCachorro(dados, callback) {
        const sql = 'INSERT INTO cachorro (Nome, Id_Raca, Ano_Nascimento, Porte, Adotado, Situacao, Id_Instituicao, Imagem, Apelido) VALUES (?, 1, ?, ?, \'nao\', ?, 1, ?, ?)';
        this.db.query(sql, [dados.nome, dados.anoNascimento, dados.porte, dados.situacao, dados.imagem, dados.apelido], callback);
    }

    buscarCachorros(callback) {
        const sql = 'SELECT * FROM cachorro';
        this.db.query(sql, callback);
    }
}

module.exports = CachorroDB;