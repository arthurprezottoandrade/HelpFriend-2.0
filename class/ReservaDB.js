// importa a classe 'Database'
const Database = require('./Database');


// herda as propriedades e métodos da classe 'Database'
class Reserva extends Database {
    constructor(login, senha) {
        // chama o construtor da classe pai
        super();
        this.login = login;
        this.senha = senha;
    }
    // retorna um array contendo o conteúdo de 'Database', 'login' e 'senha' 
    get _loginSenha() {return [...this.db, this.login, this.senha] }
}

// cria uma instância da classe
const user = new Usuario("Arthur", "aoidfkasdfçk");
console.log(user._loginSenha)

// módulo para ser importado em outros arquivos JavaScrip
module.exports = Usuario;