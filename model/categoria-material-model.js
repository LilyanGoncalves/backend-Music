import CategoriaMaterialBD from "../database/categoria-material-bd.js";


export default class CategoriaMaterial {

    #id;
    #nome;
    
    constructor(novoNome) {
        this.#nome = novoNome;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    toJSON() {
        return {
            id: this.#id,
            nome: this.#nome,
        }
    }

    async gravar() {
        const categoriaMaterialBD = new CategoriaMaterialBD();
        let retornoBanco = await categoriaMaterialBD.gravar(this);
        return retornoBanco;
    }

    async excluir() {
        const categoriaMaterialBD = new CategoriaMaterialBD();
        let retornoBanco = await categoriaMaterialBD.excluir(this);
        return retornoBanco;
    }

    async atualizar() {
        const categoriaMaterialBD = new CategoriaMaterialBD();
        let retornoBanco = await categoriaMaterialBD.atualizar(this);
        return retornoBanco;
    }

    async consultar(termo) {
        //termo pode ser o ID da objeto pesquisado. ele pode ser nulo
        const categoriaMaterialBD = new CategoriaMaterialBD();
        let retornoBanco = await categoriaMaterialBD.consultar(termo);
        return retornoBanco
    }
}