import Funcao from "../model/funcao-model.js";

export default class FuncaoController {

    // requisiçao HTTP do tipo POST(GRAVAR)
    async gravar(requisicao, resposta) {
        resposta.type("application/json");

        if (requisicao.method === "POST" && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const nome = dados.nome;

            if (nome) {
                const funcao = new Funcao(nome);
                //grava no banco de dados
                //metodo assincrono -  then(entao)
                await funcao.gravar().then((resp) => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Função gravada com sucesso!",
                        id: resp,
                        funcao: funcao.toJSON()
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: erro.message
                    });
                })

            } else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe adequadamente todos os dados da funcao a ser gravada"
                })
            }


        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Metodo não permitido ou informaçao no formato JSON não fornecido"
            });
        }
    }

    // requisiçao HTTP do tipo GET(LER/CONSULTAR)
    consultar(requisicao, resposta) {
        resposta.type("application/json");
        let termo;
        if (requisicao.method === "GET") {
            const nome = requisicao.params.nome;
            
            if (nome != null) {
                termo = nome;
            }
            const funcao = new Funcao();
            //metodo assincrono -  then(entao)
            funcao.consultar(termo).then((dados) => {
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

    // requisiçao HTTP do tipo PUT(ATUALIZAR)
    async atualizar(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method === "PUT" && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const nome = dados.nome;
            const id = dados.id;
            if (nome) {
                const funcao = new Funcao(nome);
                funcao.id = id;

                //grava no banco de dados
                //metodo assincrono -  then(entao)
                funcao.atualizar().then((retorno) => {
                    let mensagemFinal;
                    if (retorno > 0) {
                        mensagemFinal = "Função atualizada com sucesso!";
                    } else {
                        mensagemFinal = "ID não encontrado!";
                    }
                    resposta.status(200).json({
                        status: true,
                        mensagem: mensagemFinal,
                        affectedRows: retorno
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: erro.mensage
                    })
                });

            } else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe adequadamente todos os dados da Função a ser gravada"
                })
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Metodo não permitido ou informaçao no formato JSON não fornecido"
            });
        }

    }

    // requisiçao HTTP do tipo DELETE(EXCLUIR)
    async excluir(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method === "DELETE" && requisicao.is('application/json')) {
            const dados = requisicao.body;

            if (dados.id) {
                // grava as informaçoes
                const funcao = new Funcao();
                funcao.id = dados.id;
                //Remove no banco de dados
                //metodo assincrono -  then(entao)
                funcao.excluir().then((retorno) => {
                    let mensagemFinal;
                    if (retorno > 0) {
                        mensagemFinal = "Registro excluído com sucesso!";
                    } else {
                        mensagemFinal = "ID não encontrado!";
                    }
                    resposta.status(200).json({
                        status: true,
                        mensagem: mensagemFinal,
                        affectedRows: retorno
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: erro.mensage
                    })
                });
            }
            else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe adequadamente todos os dados da Função a ser excluída"
                })
            }
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Metodo não permitido ou informaçao no formato JSON não fornecido"
            });
        }

    }


}
