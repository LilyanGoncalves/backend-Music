import FuncaoBD from "../database/funcao-bd.js";

export default class Funcao {

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

    get id() {
        return this.#id;
    }

    set id(_id) {
        this.#id = _id
    }

    toJSON() {
        return {
            id: this.#id,
            nome: this.#nome,
        }
    }

    async gravar() {
        const funcaoBD = new FuncaoBD();
        let retornoBanco = await funcaoBD.gravar(this);
        return retornoBanco;
    }

    async excluir() {
        const funcaoBD = new FuncaoBD();
        let retornoBanco = await funcaoBD.excluir(this);
        return retornoBanco;
    }

    async atualizar() {
        const funcaoBD = new FuncaoBD();
        let retornoBanco = await funcaoBD.atualizar(this);
        return retornoBanco;
    }

    async consultar(termo) {
        //termo pode ser o ID da objeto pesquisado. ele pode ser nulo
        const funcaoBD = new FuncaoBD();
        let retornoBanco = await funcaoBD.consultar(termo);
        return retornoBanco
    }

    async consultarFuncoesPorCPF(cpf){
        const funcaoBD = new FuncaoBD();
        let retornoBanco = await funcaoBD.consultarFuncoesPorCPF(cpf);
        return retornoBanco
    }
}