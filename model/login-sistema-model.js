import LoginSistemaBD from "../database/login-sistema-bd.js";

export default class LoginSistema {

    #login;
    #senha;

    constructor(_Login, _Senha) {
        this.#login = _Login;
        this.#senha = _Senha;
    }
   
    async autenticar() {
        const loginBD = new LoginSistemaBD();
        let retornoBanco = await loginBD.autenticar(this);
        return retornoBanco;
    }

    get login() {
        return this.#login;
    }

    set login(novologin) {
        this.#login = novologin;
    }

    get senha() {
        return this.#senha;
    }

    set senha(novasenha) {
        this.#senha = novasenha;
    }

}