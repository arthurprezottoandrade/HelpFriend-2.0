const Funcionario = require('./FuncionarioDB');
// classe responsavel pela fabrica de criação de funcionarios
class FuncionarioFactory {
    static criarFuncionario({ nome, email, senha, cpf, cargo }) {
        return new Funcionario(nome, email, senha, cpf, cargo);
    }
}
// exportando modulos
module.exports = FuncionarioFactory;
