export default class ItemPlaylist {

    #id;
    #nome;
    #tomEscolhido;
    #bpmEscolhido;
    #linkYouTube;
    


    constructor(novoId, novoNome, novoTomEscolhido, novoBpmEscolhido, novoLinkYouTube) {
        this.#id = novoId;
        this.#nome = novoNome;
        this.#tomEscolhido = novoTomEscolhido;
        this.#bpmEscolhido = novoBpmEscolhido;
        this.#linkYouTube = novoLinkYouTube;

    }

    get id() {
        return this.#id;
    }

    set id(_id) {
        this.#id = _id
    }
    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    get tomEscolhido() {
        return this.#tomEscolhido;
    }
    
    set tomEscolhido(novoTomEscolhido) {
        this.#tomEscolhido = novoTomEscolhido
    }
    
    get bpmEscolhido() {
        return this.#bpmEscolhido;
    }

    set bpmEscolhido(novoBpmEscolhido) {
        this.#bpmEscolhido = novoBpmEscolhido;
    }
    get linkYouTube() {
        return this.#linkYouTube;
    }

    set linkYouTube(novoLinkYouTube) {
        this.#linkYouTube = novoLinkYouTube;
    }
    
    toJSON() {
        return {
            id: this.#id,
            nome: this.#nome,
            tomEscolhido: this.#tomEscolhido,
            bpmEscolhido: this.#bpmEscolhido,
            linkYouTube: this.#linkYouTube,
        }
    }

}