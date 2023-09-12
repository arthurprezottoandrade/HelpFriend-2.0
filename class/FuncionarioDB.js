const Database = require('./Database');
const Usuario = require('./User');

class Funcionario extends Usuario {
    constructor(nome, email, senha, cargo, cpf) {
        super(nome, email, senha, cpf); // chama o construtor da classe pai
        this.cargo = cargo
    }
    inserirFuncionario(funcionario, callback) {
        const sql = 'INSERT INTO funcionario (Nome, Senha, Id_Instituicao, cpf, cargo, email) VALUES (?, ?, 1, ?, ?, ?)';
        this.db.query(sql, [funcionario.nome, funcionario.senha, funcionario.cpf, funcionario.cargo, funcionario.email ], callback);
    }
}

module.exports = Funcionario;