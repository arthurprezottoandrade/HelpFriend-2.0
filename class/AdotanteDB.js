const Usuario = require('./User');

class Adotante extends Usuario {
    constructor(login, senha, cargo) {
        super(login, senha);
        this.cargo = cargo;
    }

    get _infoAdotante() { return [...this._loginSenha, this.cargo]; }
}

module.exports = Funcionario;