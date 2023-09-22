const Funcionario = require('./FuncionarioDB');

class FuncionarioFactory {
    static criarFuncionario({ nome, email, senha, cpf, cargo }) {
        return new Funcionario(nome, email, senha, cpf, cargo);
    }
}

module.exports = FuncionarioFactory;