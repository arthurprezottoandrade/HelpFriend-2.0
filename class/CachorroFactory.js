const CachorroDB = require('./CachorroDB');

class CachorroFactory {
    static criarCachorro({ nome, apelido, anoNascimento, porte, raca, situacao, imagem }) {
        return new CachorroDB(nome, apelido, anoNascimento, porte, raca, situacao, imagem);
    }
}

module.exports = CachorroFactory;