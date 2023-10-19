import Evento from "../model/evento-model.js";

// Manipula e controla eventos requisições vindas da internet por meio de HTTP
export default class EventoController {
    // Grava dados do evento
    gravar(req, resp) {
        resp.type("application/json");
        if (req.method === "POST" && req.is('application/json')) {
            const dados = req.body;
            const nome = dados.nome;
            const data = dados.data;
            const horario = dados.horario;
            const descricao = dados.descricao;
            const listaMusicos = dados.listaMusicos;
            const listaMusicas = dados.listaMusicas;
            if (nome && data && horario) {
                // Grava
                const evento = new Evento(nome, data, horario, descricao, listaMusicos, listaMusicas);
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
            const id = dados.id;
            const nome = dados.nome;
            const data = dados.data;
            const horario = dados.horario;
            const descricao = dados.descricao;
            const listaMusicos = dados.listaMusicos;
            const listaMusicas = dados.listaMusicas;
            if (id && nome && data && horario && descricao && listaMusicos && listaMusicas) {
                // Atualizar
                const evento = new Evento(id, nome, data, horario, descricao, listaMusicos, listaMusicas);
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
            const id = dados.id;
            if (id) {
                // Excluir
                const evento = new Evento(id);
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
        const id = req.params['id'];
        if (req.method === "GET") {
            // Consulta
            const evento = new Evento();
            // Método assíncrono
            evento.consultarCodigo(id).then((listaEventos) => {
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