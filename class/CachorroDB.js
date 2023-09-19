const Database = require('./Database');
class CachorroDB {
    constructor(nome, apelido, anoNascimento, porte, raca, situacao, imagem) {
        this.nome = nome;
        this.apelido = apelido;
        this.anoNascimento = anoNascimento;
        this.porte = porte;
        this.raca = raca;
        this.situacao = situacao;
        this.imagem = imagem;
        this.Database = new Database();
    }

    inserirCachorro(dados, callback) {
        const sql = 'INSERT INTO cachorro (Nome, Id_Raca, Ano_Nascimento, Porte, Adotado, Situacao, Id_Instituicao, Imagem, Apelido) VALUES (?, 1, ?, ?, \'nao\', ?, 1, ?, ?)';
        this.Database.query(sql, [dados.nome, dados.anoNascimento, dados.porte, dados.situacao, dados.imagem, dados.apelido], callback);
    }

    buscarCachorros(callback) {
        const sql = 'SELECT * FROM cachorro';
        this.Database.query(sql, callback);
    }
}

module.exports = CachorroDB;