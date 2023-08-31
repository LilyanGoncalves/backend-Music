import LoginSistema from "../Model/loginSistema.js";
import conectar from "./conexao.js";

export default class LoginBD {

    constructor() { }


    async autenticar(loginSistema) {
        if (loginSistema instanceof LoginSistema) {
            const conexao = await conectar();

            const sql = "SELECT * FROM integrante WHERE cpf = ? AND hash_password = ?";
            const valores = [loginSistema.login, loginSistema.senha ]
            const rows = await conexao.query(sql, valores);
            if (rows[0].length > 0) {
                return true;
            } else {
                return false
            }
        }
    }

}