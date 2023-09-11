const Database = require('./Database');
const Usuario = require('./User');

class Funcionario extends Usuario {
    constructor(nome, email, senha) {
        super(nome, email, senha); // chama o construtor da classe pai
    }
    inserirFuncionario(funcionario, callback) {
        const sql = 'INSERT INTO funcionario (Nome, Email, Senha) VALUES (?, ?, ?)';
        this.db.query(sql, [funcionario.nome, funcionario.email, funcionario.senha], callback);
    }
}

module.exports = Funcionario;