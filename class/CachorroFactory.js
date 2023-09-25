// importa a classe 'CachorroDB'
const CachorroDB = require('./CachorroDB');
// classe responsavel pela criação da factory do cachorro
class CachorroFactory {
    // método estático que cria uma nova instância da classe 'CachorroDB'
    static criarCachorro({ nome, apelido, anoNascimento, porte, raca, situacao, imagem }) {
        return new CachorroDB(nome, apelido, anoNascimento, porte, raca, situacao, imagem);
    }
}
<<<<<<< Updated upstream
// exportando o modulo
module.exports = CachorroFactory;
=======

// módulo para ser importado em outros arquivos JavaScrip
module.exports = CachorroFactory;
>>>>>>> Stashed changes
