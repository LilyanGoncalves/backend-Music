import LoginSistema from "../model/login-sistema-model.js";
const { createHmac } = await import('node:crypto');

const secret = 'injMusic2023';

export default class LoginSistemaController {

    // requisiçao HTTP do tipo POST(GRAVAR)

    autenticar(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method === "POST") {

            //pega do body o login(CPF)
            const login = requisicao.body.login;

            //pega do body a senha e transforma na hash criptografada
            const hash = createHmac('sha256', secret).update(requisicao.body.senha).digest('hex');
            const dadosLogin = new LoginSistema(login, hash);

            //metodo assincrono -  then(entao)
            dadosLogin.autenticar()
                .then((dados) => {
                    resposta.status(200).json(
                        {
                            status: dados,
                            mensagem: 'Usuário logado com sucesso!'
                        }
                    );
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
