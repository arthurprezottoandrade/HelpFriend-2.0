// importa a classe 'FuncionarioDB'
const Funcionario = require('./FuncionarioDB');
// classe responsavel pela fabrica de criação de funcionarios
class FuncionarioFactory {
    // método estático que cria uma nova instância da classe 'FuncionarioDB'
    static criarFuncionario({ nome, email, senha, cpf, cargo }) {
        return new Funcionario(nome, email, senha, cpf, cargo);
    }
}

// módulo para ser importado em outros arquivos JavaScrip
module.exports = FuncionarioFactory;
