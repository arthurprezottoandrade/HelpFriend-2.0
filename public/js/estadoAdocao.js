class EstadoAdocao {
    // observador
    constructor() {
        this.observadores = [];
    }

    adicionarObservador(observador) {
        this.observadores.push(observador);
    }

    removerObservador(observador) {
        const index = this.observadores.indexOf(observador);
        if (index > -1) {
            this.observadores.splice(index, 1);
        }
    }

    notificarObservadores(novoCachorro) {
        for (const observador of this.observadores) {
            observador.atualizar(novoCachorro);
        }
    }
}

module.exports = new EstadoAdocao(); 