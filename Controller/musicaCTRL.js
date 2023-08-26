import Musica from "../Model/musica.js";

export default class musicaCTRL {

    async gravar(requisicao, resposta) {
        resposta.type("application/json");

        if (requisicao.method === "POST" && requisicao.is('application/json')) {
            const dados = requisicao.body;
            //const id = dados.id;
            const nome = dados.nome;
            const interpreteOriginal = dados.interpreteOriginal;
            const interpreteVersao = dados.interpreteVersao;
            const tomM = dados.tomM;
            const tomF = dados.tomF;
            const tomOriginal = dados.tomOriginal;
            const linkYouTube = dados.linkYouTube;
            const linkSpotify = dados.linkSpotify;
            const cifra = dados.cifra;
            const bpm = dados.bpm;

            if (nome && interpreteOriginal && interpreteVersao && tomM && tomF && tomOriginal && linkYouTube && linkSpotify && cifra && bpm) {
                // grava as informaçoes
                const musica = new Musica(nome, interpreteOriginal, interpreteVersao, tomM, tomF, tomOriginal, linkYouTube, linkSpotify, cifra, bpm);
                //grava no banco de dados
                //metodo assincrono -  then(entao)
                await musica.gravar().then((resp) => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Registro gravado com sucesso!",
                        id: resp,
                        musica: musica.toJSON()
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: erro.message

                    });
                })
            }
            else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe adequadamente todos os dados da musica a ser gravada"
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

    consultar(requisicao, resposta) {
        resposta.type("application/json");
        let termo;
        if (requisicao.method === "GET") {
            const musica = new Musica();
            const id = requisicao.params.id;
            const nome = requisicao.params.nome;

            if (id != null) {
                termo = id;
            } else if (nome != null) {
                termo = nome;
            }
            //metodo assincrono -  then(entao)
            musica.consultar(termo).then((musica) => {
                resposta.status(200).json(musica);
            }).catch((erro) => {
                resposta.status(500).json({
                    status: false,
                    mensagem: erro.mensage

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

    // requisiçao HTTP do tipo PUT
    atualizar(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method === "PUT" && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const id = dados.id;
            const nome = dados.nome;
            const interpreteOriginal = dados.interpreteOriginal;
            const interpreteVersao = dados.interpreteVersao;
            const tomM = dados.tomM;
            const tomF = dados.tomF;
            const tomOriginal = dados.tomOriginal;
            const linkYouTube = dados.linkYouTube;
            const linkSpotify = dados.linkSpotify;
            const cifra = dados.cifra;
            const bpm = dados.bpm;
            if (nome && interpreteOriginal && interpreteVersao && tomM && tomF && tomOriginal && linkYouTube && linkSpotify && cifra && bpm) {
                // grava as informaçoes
                const musica = new Musica(nome, interpreteOriginal, interpreteVersao, tomM, tomF, tomOriginal, linkYouTube, linkSpotify, cifra, bpm);
                musica.id = id;
                //grava no banco de dados
                //metodo assincrono -  then(entao)
                musica.atualizar().then((retorno) => {
                    let mensagemFinal;
                    if (retorno > 0) {
                        mensagemFinal = "Registro atualizado com sucesso!";
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
                    mensagem: "Informe adequadamente todos os dados da musica a ser atualizada"
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

    excluir(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method === "DELETE" && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const id = dados.id;

            if (id) {
                // grava as informaçoes
                const musica = new Musica();
                musica.id = id;
                //Remove no banco de dados
                //metodo assincrono -  then(entao)
                musica.excluir().then((retorno) => {
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
                    mensagem: "Informe adequadamente todos os dados de uma musica a ser excluída"
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


