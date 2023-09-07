import MaterialBD from "../database/material-bd.js";

export default class Material {

    #id;
    #nome;
    #idCategoria;
    


    constructor(novoNome, novoIdCategoria) {
        this.#nome = novoNome;
        this.#idCategoria = novoIdCategoria;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    get idCategoria() {
        return this.#idCategoria;
    }

    set idCategoria(novoIdCategoria) {
        this.#idCategoria = novoIdCategoria;
    }

    toJSON() {
        return {
            id: this.#id,
            nome: this.#nome,
            idCategoria: this.#idCategoria
        }
    }

    async gravar() {
        const materialBD = new MaterialBD();
        let retornoBanco = await materialBD.gravar(this);
        return retornoBanco;
    }

    async excluir() {
        const materialBD = new MaterialBD();
        let retornoBanco = await materialBD.excluir(this);
        return retornoBanco;
    }

    async atualizar() {
        const materialBD = new MaterialBD();
        let retornoBanco = await materialBD.atualizar(this);
        return retornoBanco;
    }

    async consultar(termo) {
        //termo pode ser o ID da objeto pesquisado. ele pode ser nulo
        const materialBD = new MaterialBD();
        let retornoBanco = await materialBD.consultar(termo);
        return retornoBanco
    }
}