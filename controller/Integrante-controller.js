import Integrante from "../model/integrante-model.js";

//manipula e controla integrantes requisicoes vinda da internet por meio de http
export default class IntegranteController{
    //grava dados do integrante
    gravar(req, resp){
        resp.type("application/json");
        if(req.method === "POST" && req.is('application/json')){
            const dados = req.body;
            const cpf = dados.cpf;
            const nome = dados.nome;
            const endereco = dados.endereco;
            const bairro = dados.bairro;
            const cidade = dados.cidade;
            const uf = dados.uf;
            const telefone = dados.telefone;
            const email = dados.email;
            const funcaoid = dados.funcaoid;
            if (cpf && nome && endereco && bairro && cidade && uf && telefone && email && funcaoid)
            {
                //grava
                const integrante = new Integrante(cpf, nome, endereco, bairro, cidade, uf, telefone, email, funcaoid);
                //metodo assincrono
                integrante.gravar().then((retorno)=>{
                    resp.status(200).json({
                        status:true,
                        mensagem:"Integrante gravado com sucesso!",
                        id: retorno,
                        integrante: integrante.toJSON()
                    });
                }).catch((erro)=>{
                    resp.status(500).json({
                        status:false,
                        mensagem: erro.message
                    })
                });
            }
            else{
                resp.status(400).json({
                    status:false,
                    mensagem:"informe todos os dados do integrante!"
                });
            }
            
        }
        else{
            //erro usuario fez req = 400
           resp.status(400).json({
                status:false,
                mensagem:"Método não permitido ou formato JSON não fornecido!"
           }); 
        }
    }

    //atualiza dados do integrante
    atualizar(req, resp){
        resp.type("application/json");
        if(req.method === "PUT" && req.is('application/json')){
            const dados = req.body;
            const cpf = dados.cpf;
            const nome = dados.nome;
            const endereco = dados.endereco;
            const bairro = dados.bairro;
            const cidade = dados.cidade;
            const uf = dados.uf;
            const telefone = dados.telefone;
            const email = dados.email;
            const funcaoid = dados.funcaoid;
            if (cpf && nome && endereco && bairro && cidade && uf && telefone && email && funcaoid)
            {
                //atualizar
                const integrante = new Integrante(cpf, nome, endereco, bairro, cidade, uf, telefone, email, funcaoid);
                //metodo assincrono
                integrante.atualizar().then((retorno)=>{
                    let mensagemFinal;
                    if (retorno > 0) {
                        mensagemFinal = "Integrante atualizado com sucesso!";
                    } else {
                        mensagemFinal = "ID não encontrado!";
                    }
                    resp.status(200).json({
                        status: true,
                        mensagem: mensagemFinal,
                        affectedRows: retorno,
                        integrante: integrante.toJSON()
                    });
                }).catch((erro)=>{
                    resp.status(500).json({
                        status:false,
                        mensagem: erro.message
                    })
                });
            }
            else{
                resp.status(400).json({
                    status:false,
                    mensagem:"informe todos os dados do integrante!"
                });
            }
        }
        else{
            //erro usuario fez req = 400
           resp.status(400).json({
                status:false,
                mensagem:"Método não permitido ou formato JSON não fornecido!"
           }); 
        }
    }

    //exclui dados do integrante
    excluir(req,resp){
        resp.type("application/json");
        if(req.method === "DELETE" && req.is('application/json')){
            const dados = req.body;
            const cpf = dados.cpf;
            if (cpf)
            {
                //excluir
                const integrante = new Integrante(cpf);
                //metodo assincrono
                integrante.removerBancoDados().then(()=>{
                    resp.status(200).json({
                        status:true,
                        mensagem:"Integrante excluido com sucesso!"
                    });
                }).catch((erro)=>{
                    resp.status(500).json({
                        status:false,
                        mensagem: erro.message
                    })
                });
            }
            else{
                resp.status(400).json({
                    status:false,
                    mensagem:"informe cpf do integrante!"
                });
            }
            
        }
        else{
            //erro usuario fez req = 400
           resp.status(400).json({
                status:false,
                mensagem:"Método não permitido ou formato JSON não fornecido!"
           }); 
        }
    }

    //consulta dados do integrante
    consultar(req,resp){
        resp.type("application/json");
        let termo;
        if(req.method === "GET"){
            const nome = req.params.nome;
            if (nome != null) {
                termo = nome;
            }
                //consulta
            const integrante = new Integrante();
                //metodo assincrono
            integrante.consultar(termo).then((listaIntegrantes)=>{
                resp.status(200).json(listaIntegrantes);
            }).catch((erro)=>{
                resp.status(500).json({
                    status:false,
                    mensagem: erro.message
                })
            });
        }
        else{
            //erro usuario fez req = 400
           resp.status(400).json({
                status:false,
                mensagem:"Método não permitido ou formato JSON não fornecido!"
           }); 
        }
        
    }

    consultaCPF(req,resp){
        resp.type("application/json");
        const params = req.params;
        const cpf = params.cpf
        if(req.method === "GET"){
                //consulta
            const integrante = new Integrante();
                //metodo assincrono
            integrante.consultarCPF(cpf).then((listaIntegrantes)=>{
                resp.status(200).json(listaIntegrantes);
            }).catch((erro)=>{
                resp.status(500).json({
                    status:false,
                    mensagem: erro.message
                })
            });
        }
        else{
            //erro usuario fez req = 400
           resp.status(400).json({
                status:false,
                mensagem:"Método não permitido ou formato JSON não fornecido!"
           }); 
        }
    }
}

    