import Evento from "../Model/Evento.js";

// Manipula e controla eventos requisições vindas da internet por meio de HTTP
export default class EventoCTRL {
    // Grava dados do evento
    gravar(req, resp) {
        resp.type("application/json");
        if (req.method === "POST" && req.is('application/json')) {
            const dados = req.body;
            const codigo = dados.codigo;
            const nome = dados.nome;
            const data = dados.data;
            const hora = dados.hora;
            const descricao = dados.descricao;
            const banda = dados.banda;
            const musica = dados.musica;
            if (codigo && nome && data && hora && descricao && banda && musica) {
                // Grava
                const evento = new Evento(codigo, nome, data, hora, descricao, banda, musica);
                // Método assíncrono
                evento.gravar().then(() => {
                    resp.status(200).json({
                        status: true,
                        mensagem: "Evento gravado com sucesso!"
                    });
                }).catch((erro) => {
                    resp.status(500).json({
                        status: false,
                        mensagem: erro.message
                    })
                });
            } else {
                resp.status(400).json({
                    status: false,
                    mensagem: "Informe todos os dados do evento!"
                });
            }

        } else {
            // Erro: usuário fez uma requisição inválida (status 400)
            resp.status(400).json({
                status: false,
                mensagem: "Método não permitido ou formato JSON do evento não fornecido!"
            });
        }
    }

    // Atualiza dados do evento
    atualizar(req, resp) {
        resp.type("application/json");
        if (req.method === "PUT" && req.is('application/json')) {
            const dados = req.body;
            const codigo = dados.codigo;
            const nome = dados.nome;
            const data = dados.data;
            const hora = dados.hora;
            const descricao = dados.descricao;
            const banda = dados.banda;
            const musica = dados.musica;
            if (codigo && nome && data && hora && descricao && banda && musica) {
                // Atualizar
                const evento = new Evento(codigo, nome, data, hora, descricao, banda, musica);
                // Método assíncrono
                evento.atualizar().then(() => {
                    resp.status(200).json({
                        status: true,
                        mensagem: "Evento atualizado com sucesso!"
                    });
                }).catch((erro) => {
                    resp.status(500).json({
                        status: false,
                        mensagem: erro.message
                    })
                });
            } else {
                resp.status(400).json({
                    status: false,
                    mensagem: "Informe todos os dados do evento!"
                });
            }

        } else {
            // Erro: usuário fez uma requisição inválida (status 400)
            resp.status(400).json({
                status: false,
                mensagem: "Método não permitido ou formato JSON do evento não fornecido!"
            });
        }
    }

    // Exclui dados do evento
    excluir(req, resp) {
        resp.type("application/json");
        if (req.method === "DELETE" && req.is('application/json')) {
            const dados = req.body;
            const codigo = dados.codigo;
            if (codigo) {
                // Excluir
                const evento = new Evento(codigo);
                // Método assíncrono
                evento.removerBancoDados().then(() => {
                    resp.status(200).json({
                        status: true,
                        mensagem: "Evento excluído com sucesso!"
                    });
                }).catch((erro) => {
                    resp.status(500).json({
                        status: false,
                        mensagem: erro.message
                    })
                });
            } else {
                resp.status(400).json({
                    status: false,
                    mensagem: "Informe o código do evento!"
                });
            }

        } else {
            // Erro: usuário fez uma requisição inválida (status 400)
            resp.status(400).json({
                status: false,
                mensagem: "Método não permitido ou formato JSON do evento não fornecido!"
            });
        }
    }

    // Consulta dados do evento
    consultar(req, resp) {
        resp.type("application/json");
        if (req.method === "GET") {
            // Consulta
            const evento = new Evento();
            // Método assíncrono
            evento.consultar('').then((listaEventos) => {
                resp.status(200).json(listaEventos);
            }).catch((erro) => {
                resp.status(500).json({
                    status: false,
                    mensagem: erro.message
                })
            });
        } else {
            // Erro: usuário fez uma requisição inválida (status 400)
            resp.status(400).json({
                status: false,
                mensagem: "Método não permitido ou formato JSON do evento não fornecido!"
            });
        }
    }

    consultaEvento(req, resp) {
        resp.type("application/json");
        const codigo = req.params['codigo'];
        if (req.method === "GET") {
            // Consulta
            const evento = new Evento();
            // Método assíncrono
            evento.consultarCodigo(codigo).then((listaEventos) => {
                resp.status(200).json(listaEventos);
            }).catch((erro) => {
                resp.status(500).json({
                    status: false,
                    mensagem: erro.message
                })
            });
        } else {
            // Erro: usuário fez uma requisição inválida (status 400)
            resp.status(400).json({
                status: false,
                mensagem: "Método não permitido ou formato JSON do evento não fornecido!"
            });
        }
    }
}