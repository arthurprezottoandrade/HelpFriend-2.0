const CachorroDB = require('./CachorroDB');
// classe responsavel pela criação da factory do cachorro
class CachorroFactory {
    static criarCachorro({ nome, apelido, anoNascimento, porte, raca, situacao, imagem }) {
        return new CachorroDB(nome, apelido, anoNascimento, porte, raca, situacao, imagem);
    }
}
// exportando o modulo
module.exports = CachorroFactory;
