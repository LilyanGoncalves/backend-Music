import EventoBD from "../database/evento-bd.js";

export default class Evento {
    #id;
    #nome;
    #data;
    #horario;
    #descricao;
    #listaMusicos;//[{id,nome,idFuncao,funcaoNome}]
    #listaMusicas;//[{id,nome,tomEscolhido,bpmEscolhido,linkYouTube}]

    constructor(nome, data, horario, descricao, listaMusicos, listaMusicas) {
        this.#nome = nome;
        this.#data = data;
        this.#horario = horario;
        this.#descricao = descricao;
        this.#listaMusicos = listaMusicos;
        this.#listaMusicas = listaMusicas;
    }

    get id() {
        return this.#id;
    }

    set id(novoCodigo) {
        this.#id = novoCodigo;
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

    get horario() {
        return this.#horario;
    }

    set horario(novaHorario) {
        this.#horario = novaHorario;
    }

    get descricao() {
        return this.#descricao;
    }

    set descricao(novaDescricao) {
        this.#descricao = novaDescricao;
    }

    get listaMusicos() {
        return this.#listaMusicos;
    }

    set listaMusicos(novaBanda) {
        this.#listaMusicos = novaBanda;
    }

    get listaMusicas() {
        return this.#listaMusicas;
    }

    set listaMusicas(novaMusica) {
        this.#listaMusicas = novaMusica;
    }

    toJSON() {
        return {
            "id": this.#id,
            "nome": this.#nome,
            "data": this.#data,
            "horario": this.#horario,
            "descricao": this.#descricao,
            "listaMusicos": this.#listaMusicos,
            "listaMusicas": this.#listaMusicas
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

    async consultarCodigo(id) {
        const eventoBD = new EventoBD();
        const eventos = await eventoBD.consultarCodigo(id);
        return eventos;
    }
}
