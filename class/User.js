const Database = require('./Database');

class Usuario extends Database {
    constructor(nome, email, senha) {
        super();
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}


module.exports = Usuario;