// importa a classe 'User'
const Usuario = require('./User');


// herda as propriedades e métodos da classe 'User'
class Funcionario extends Usuario {
    constructor(nome, email, senha, cpf, cargo) {
        // chama o construtor da classe pai
        super(nome, email, senha, cpf);
        this.cargo = cargo
    }
    // método para inserir um novo funcionário no banco de dados
    inserirFuncionario(dados, callback) {
        // insere dados na tabela 'funcionario'
        const sql = 'INSERT INTO funcionario (Nome, Senha, Id_Instituicao, cpf, cargo, email) VALUES (?, ?, 1, ?, ?, ?)';
        // executa a consulta de inserção SQL no banco de dados
        this.db.query(sql, [dados.nome, dados.senha, dados.cpf, dados.cargo, dados.email ], callback);
    }
}

// módulo para ser importado em outros arquivos JavaScrip
module.exports = Funcionario;