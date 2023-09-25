// importa a classe 'Database'
const Database = require('./Database');
class CachorroDB {
    // atributos necessarios para a criação do objeto
    constructor(nome, apelido, anoNascimento, porte, raca, situacao, imagem) {
        this.nome = nome;
        this.apelido = apelido;
        this.anoNascimento = anoNascimento;
        this.porte = porte;
        this.raca = raca;
        this.situacao = situacao;
        this.imagem = imagem;
        // cria uma nova instância da classe Database
        this.Database = new Database();
    }
    // método para inserir um novo cachorro no banco de dados
    inserirCachorro(dados, callback) {
        // inserir dados na tabela 'cachorro'
        const sql = 'INSERT INTO cachorro (Nome, Id_Raca, Ano_Nascimento, Porte, Adotado, Situacao, Id_Instituicao, Imagem, Apelido) VALUES (?, 1, ?, ?, \'nao\', ?, 1, ?, ?)';
        // executa a consulta de inserção SQL no banco de dados
        this.Database.query(sql, [dados.nome, dados.anoNascimento, dados.porte, dados.situacao, dados.imagem, dados.apelido], callback);
    }

    // método para buscar todos os cachorros no banco de dados
    buscarCachorros(callback) {
        // busca dados na tabela 'cachorro'
        const sql = 'SELECT * FROM cachorro';
        // executa a consulta de busca SQL no banco de dados
        this.Database.query(sql, callback);
    }
}

// módulo para ser importado em outros arquivos JavaScrip
module.exports = CachorroDB;
