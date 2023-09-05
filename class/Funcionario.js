const Usuario = require('./User');

class Funcionario extends Usuario {
    constructor(login, senha, cargo) {
        super(login, senha);
        this.cargo = cargo;
    }

    get _infoFuncionario() { return [...this._loginSenha, this.cargo]; }
}

module.exports = Funcionario;