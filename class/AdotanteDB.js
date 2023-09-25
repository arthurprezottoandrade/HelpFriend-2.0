// importa a classe 'User'
const Usuario = require('./User');


// herda as propriedades e métodos da classe 'User'
class Adotante extends Usuario {
    constructor(nome, email, senha, cpf, endereco) {
        // chama o construtor da classe pai
        super(nome, email, senha, cpf);
        this.endereco = endereco
    }
    // método para inserir um novo adotante no banco de dados
    inserirAdotante(dados, callback) {
        // insere dados na tabela 'adotante'
        const sql = 'INSERT INTO adotante (Nome, Senha, Cpf, id_endereco, email) VALUES (?, ?, ?, ?, ?)';
        // executa a consulta de inserção SQL no banco de dados
        this.db.query(sql, [dados.nome, dados.senha, dados.cpf, dados.cargo, dados.email ], callback);
    }
}

// módulo para ser importado em outros arquivos JavaScrip
module.exports = Adotante;