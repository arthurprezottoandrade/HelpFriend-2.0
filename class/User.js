// importa a classe 'Database'
const Database = require('./Database');


// herda as propriedades e métodos da classe 'Database'
class Usuario extends Database {
    constructor(nome, email, senha, cpf) {
        // chama o construtor da classe pai
        super();
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
    }
}

// módulo para ser importado em outros arquivos JavaScrip
module.exports = Usuario;