import MusicaBD from "../Database/musicaBD.js";

export default class Musica {

    #id;
    #nome;
    #interpreteOriginal;
    #interpreteVersao;
    #tomM;
    #tomF;
    #tomOriginal;
    #linkYouTube;
    #linkSpotify;
    #cifra;
    #bpm;

    constructor(nome, interpreteOriginal, interpreteVersao, tomM, tomF, tomOriginal, linkYouTube, linkSpotify, cifra, bpm) {
        this.#nome = nome;
        this.#interpreteOriginal = interpreteOriginal;
        this.#interpreteVersao = interpreteVersao;
        this.#tomM = tomM;
        this.#tomF = tomF;
        this.#tomOriginal = tomOriginal;
        this.#linkYouTube = linkYouTube;
        this.#linkSpotify = linkSpotify;
        this.#cifra = cifra;
        this.#bpm = bpm;
    }
    //metodo publico

    get id() {
        return this.#id;
    }

    set id(novoid) {
        this.#id = novoid;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novonome) {
        this.#nome = novonome;
    }

    get interpreteOriginal() {
        return this.#interpreteOriginal;
    }

    set interpreteOriginal(novointerpreteOriginal) {
        this.#interpreteOriginal = novointerpreteOriginal;
    }

    get interpreteVersao() {
        return this.#interpreteVersao;
    }

    set interpreteVersao(novointerpreteVersao) {
        this.#interpreteVersao = novointerpreteVersao;
    }

    get tomM() {
        return this.#tomM;
    }

    set tomM(novotomM) {
        this.#tomM = novotomM;
    }

    get tomF() {
        return this.#tomF;
    }

    set tomF(novotomF) {
        this.#tomF = novotomF;
    }

    get tomOriginal() {
        return this.#tomOriginal;
    }

    set tomOriginal(novotomOriginal) {
        this.#tomOriginal = novotomOriginal;
    }

    get linkYouTube() {
        return this.#linkYouTube;
    }

    set linkYouTube(novolinkYouTube) {
        this.#linkYouTube = novolinkYouTube;
    }

    get linkSpotify() {
        return this.#linkSpotify;
    }

    set linkSpotify(novolinkSpotify) {
        this.#linkSpotify = novolinkSpotify;
    }

    get cifra() {
        return this.#cifra;
    }

    set cifra(novocifra) {
        this.#cifra = novocifra;
    }

    get bpm(){
        return this.#bpm;
    }

    set bpm(novocifra){
        this.#bpm = novobpm;
    }

    
    toJSON() {
        return {
            id: this.#id,
            nome: this.#nome,
            interpreteOriginal: this.#interpreteOriginal,
            interpreteVersao: this.#interpreteVersao,
            tomM: this.#tomM,
            tomF: this.#tomF,
            tomOriginal: this.#tomOriginal,
            linkYouTube: this.#linkYouTube,
            linkSpotify: this.#linkSpotify,
            cifra: this.#cifra,
            bpm: this.#bpm,
        }
    }

    async gravar() {
        const musicaBD = new MusicaBD();
        let retornoBanco = await musicaBD.gravar(this);
        return retornoBanco;
    }

    async excluir() {
        const musicaBD = new MusicaBD();
        let retornoBanco = await musicaBD.excluir(this);
        return retornoBanco;
    }

    async atualizar() {
        const musicaBD = new MusicaBD();
        let retornoBanco = await musicaBD.atualizar(this);
        return retornoBanco;
    }

    async consultar(termo) {
        //termo pode ser o ID da objeto pesquisado. ele pode ser nulo
        const musicaBD = new MusicaBD();
        let retornoBanco = await musicaBD.consultar(termo);
        return retornoBanco
    }
}

