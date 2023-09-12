const Database = require('./Database');

class Usuario extends Database {
    constructor(nome, email, senha, cpf) {
        super();
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
    }
}

module.exports = Usuario;