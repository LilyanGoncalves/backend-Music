import EventoBD from "../Database/eventoBD.js";

export default class Evento {
    #codigo;
    #nome;
    #data;
    #hora;
    #descricao;
    #banda;
    #musica;

    constructor(codigo, nome, data, hora, descricao, banda, musica) {
        this.#codigo = codigo;
        this.#nome = nome;
        this.#data = data;
        this.#hora = hora;
        this.#descricao = descricao;
        this.#banda = banda;
        this.#musica = musica;
    }

    get codigo() {
        return this.#codigo;
    }

    set codigo(novoCodigo) {
        this.#codigo = novoCodigo;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        if (novoNome != "")
            this.#nome = novoNome;
    }

    get data() {
        return this.#data;
    }

    set data(novaData) {
        this.#data = novaData;
    }

    get hora() {
        return this.#hora;
    }

    set hora(novaHora) {
        this.#hora = novaHora;
    }

    get descricao() {
        return this.#descricao;
    }

    set descricao(novaDescricao) {
        this.#descricao = novaDescricao;
    }

    get banda() {
        return this.#banda;
    }

    set banda(novaBanda) {
        this.#banda = novaBanda;
    }

    get musica() {
        return this.#musica;
    }

    set musica(novaMusica) {
        this.#musica = novaMusica;
    }

    toJSON() {
        return {
            "codigo": this.#codigo,
            "nome": this.#nome,
            "data": this.#data,
            "hora": this.#hora,
            "descricao": this.#descricao,
            "banda": this.#banda,
            "musica": this.#musica
        }
    }

    async gravar() {
        const eventoBD = new EventoBD();
        await eventoBD.incluir(this);
    }

    async atualizar() {
        const eventoBD = new EventoBD();
        await eventoBD.alterar(this);
    }

    async removerBancoDados() {
        const eventoBD = new EventoBD();
        await eventoBD.excluir(this);
    }

    async consultar(termo) {
        const eventoBD = new EventoBD();
        const eventos = await eventoBD.consultar(termo);
        return eventos;
    }

    async consultarCodigo(codigo) {
        const eventoBD = new EventoBD();
        const eventos = await eventoBD.consultarCodigo(codigo);
        return eventos;
    }
}
