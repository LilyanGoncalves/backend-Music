export default class Musico {

    #id;
    #nome;
    #funcaoId;
    #funcaoNome;
    


    constructor(novoId, novoNome, novoFuncaoId, novoFuncaoNome) {
        this.#id = novoId;
        this.#nome = novoNome;
        this.#funcaoId = novoFuncaoId;
        this.#funcaoNome = novoFuncaoNome;


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

    get funcaoId() {
        return this.#funcaoId;
    }
    
    set funcaoId(_funcaoId) {
        this.#funcaoId = _funcaoId
    }
    
    get funcaoNome() {
        return this.#funcaoNome;
    }

    set funcaoNome(novofuncaoNome) {
        this.#funcaoNome = novofuncaoNome;
    }
    
    toJSON() {
        return {
            id: this.#id,
            nome: this.#nome,
            funcaoId: this.#funcaoId,
            funcaoNome: this.#funcaoNome,
        }
    }

}