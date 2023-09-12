const Usuario = require('./User');

class Adotante extends Usuario {
    constructor(nome, email, senha, cpf, endereco) {
        super(nome, email, senha, cpf); // chama o construtor da classe pai
        this.endereco = endereco
    }
    inserirAdotante(dados, callback) {
        const sql = 'INSERT INTO adotante (Nome, Senha, Cpf, id_endereco, email) VALUES (?, ?, ?, ?, ?)';
        this.db.query(sql, [dados.nome, dados.senha, dados.cpf, dados.cargo, dados.email ], callback);
    }
}

module.exports = Adotante;