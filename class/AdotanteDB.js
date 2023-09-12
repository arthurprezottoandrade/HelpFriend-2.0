const Usuario = require('./User');

class Adotante extends Usuario {
    constructor(nome, email, senha, endereco, cpf) {
        super(nome, email, senha, cpf);
        this.endereco = endereco;
    }
}

module.exports = Funcionario;