import IntegranteBD from "../database2/integrante-bd.js";

export default class Integrante{
    #cpf;        //# define que e um atributo privado
    #nome;
    #endereco;
    #bairro;
    #cidade;
    #uf;
    #telefone;
    #email;
    #funcaoId;
    #funcaoNome;
                  //construtor cria o cliente (como se fosse usar const cliente = new Cliente())


    constructor(cpf, nome, endereco, bairro, cidade, uf, telefone, email, funcaoId, funcaoNome){   
        this.#cpf = cpf;
        this.#nome = nome;
        this.#endereco = endereco;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#uf = uf;
        this.#telefone = telefone;
        this.#email = email
        this.#funcaoId = funcaoId
        this.#funcaoNome = funcaoNome

    }

    get cpf(){
        return this.#cpf;
    }

    //alterar cpf, pode colocar as condicoes para validar cpf criando a regra
    set cpf(novoCpf){
        this.#cpf = novoCpf;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        if(novoNome != "") //regra para nao criar nome de cliente vazio
            this.#nome = novoNome;
    }

    get endereco(){
        return this.#endereco;
    }

    set endereco(novoEndereco){
        this.#endereco = novoEndereco;
    }

    get bairro(){
        return this.#bairro;
    }

    set bairro(novoBairro){
        this.#bairro = novoBairro;
    }

    get cidade(){
        return this.#cidade;
    }

    set cidade(novaCidade){
        this.#cidade = novaCidade;
    }

    get uf(){
        return this.#uf;
    }

    set uf(novoUf){
        this.#uf = novoUf;
    }

    get telefone(){
        return this.#telefone;
    }

    set telefone(novoTelefone){
        this.#telefone = novoTelefone;
    }

    get email(){
        return this.#email;
    }

    set email(novoEmail){
        this.#email = novoEmail;
    }

    get funcaoId(){
        return this.#funcaoId;
    }

    set funcaoId(novoFuncaoId){
        this.#funcaoId = novoFuncaoId;
    }
    get funcaoNome(){
        return this.#funcaoNome;
    }

    set funcaoNome(novoFuncaoNome){
        this.#funcaoNome = novoFuncaoNome;
    }
    toJSON(){
        return{
            "cpf"           : this.#cpf,
            "nome"          : this.#nome,
            "endereco"      : this.#endereco,
            "bairro"        : this.#bairro,
            "cidade"        : this.#cidade,
            "uf"            : this.#uf,
            "telefone"      : this.#telefone,
            "email"         : this.#email,
            "funcaoid"      : this.#funcaoId,
            "funcaoNome"    : this.#funcaoNome
        }
    }

    async gravar(){
        const integranteBD = new IntegranteBD();
        let retornoBanco = await integranteBD.incluir(this);
        return retornoBanco;

    }

    async atualizar(){
        const integranteBD = new IntegranteBD();
        let retornoBanco = await integranteBD.alterar(this);
        return retornoBanco;
    }

    async removerBancoDados(){
        const integranteBD = new IntegranteBD();
        let retornoBanco = await integranteBD.excluir(this);
        return retornoBanco;
    }

    async consultar (termo){
        const integranteBD = new IntegranteBD();
        const integrantes = await integranteBD.consultar(termo);
        return integrantes;
    }

    async consultarCPF(cpf){
        const integranteBD = new IntegranteBD();
        const integrantes = await integranteBD.consultarCPF(cpf);
        return integrantes;
    }

}