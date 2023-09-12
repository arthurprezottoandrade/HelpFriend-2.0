const Usuario = require('./User');

class Funcionario extends Usuario {
    constructor(nome, email, senha, cpf, cargo) {
        super(nome, email, senha, cpf); // chama o construtor da classe pai
        this.cargo = cargo
    }
    inserirFuncionario(dados, callback) {
        const sql = 'INSERT INTO funcionario (Nome, Senha, Id_Instituicao, cpf, cargo, email) VALUES (?, ?, 1, ?, ?, ?)';
        this.db.query(sql, [dados.nome, dados.senha, dados.cpf, dados.cargo, dados.email ], callback);
    }
}

module.exports = Funcionario;