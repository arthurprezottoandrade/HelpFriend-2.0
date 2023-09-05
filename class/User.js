const Database = require('./banco');

class Usuario extends Database {
    constructor(login, senha) {
        super();
        this.login = login;
        this.senha = senha;
    }
    get _loginSenha() {return [...this.db, this.login, this.senha] }
}

const user = new Usuario("Arthur", "aoidfkasdfçk");
console.log(user._loginSenha)

module.exports = Usuario;