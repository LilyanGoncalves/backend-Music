import LoginSistema from "../Model/loginSistema.js";
const { createHmac } = await import('node:crypto');

const secret = 'injMusic2023';

export default class LoginSistemaCTRL {

    // requisiçao HTTP do tipo POST(GRAVAR)

    autenticar(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method === "POST") {
            
            const login = requisicao.body.login;
            const senha = createHmac('sha256', secret).update(requisicao.body.senha).digest('hex');
            const dadosLogin = new LoginSistema(login ,senha);


            //metodo assincrono -  then(entao)
            dadosLogin.autenticar()
            .then((dados) => {
                resposta.status(200).json(dados);
            }).catch((erro) => {
                resposta.status(500).json({
                    status: false,
                    mensagem: erro.message

                });
            });
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Metodo não permitido ou informaçao no formato JSON não fornecido"
            });
        }

    }

}
