import Funcao from "../model/funcao-model.js";
import conectar from "./conexao.js";

export default class FuncaoBD {

    constructor() { }


    async gravar(funcao) {
        if (funcao instanceof Funcao) {
            const conexao = await conectar();

            const SQL = "INSERT INTO funcao (`nome`) VALUES (?);"

            const parametros = [funcao.nome];
            const query = await conexao.query(SQL, parametros, function (error, results, fields) {
                if (error) throw error;
            });
            return query[0].insertId;
        }
    }

    async atualizar(funcao) {
        if (funcao instanceof Funcao) {
            const conexao = await conectar();

            const SQL = "UPDATE `funcao` SET `nome` = ? WHERE `id` = ?"

            const parametros = [funcao.nome, funcao.id]
            let retornoBanco = await conexao.query(SQL, parametros);
            return retornoBanco[0].affectedRows;
        }
    }

    async excluir(funcao) {
        if (funcao instanceof Funcao) {
            const conexao = await conectar();

            const SQL = "DELETE FROM funcao WHERE `id` = ?"

            const parametros = [funcao.id]
            
            let retornoBanco = await conexao.query(SQL, parametros);
            return retornoBanco[0].affectedRows;
        }
    }

    async consultar(termo) {
        let SQL = "SELECT * FROM funcao "
                
        if (parseInt(termo) != NaN && termo != null) {
            const parametros = ["%" + termo + "%"]
            SQL += " WHERE nome LIKE ?"
            const conexao = await conectar();
            let resposta = await conexao.query(SQL, parametros);
            return resposta[0];
        } else {
            const conexao = await conectar();
            let resposta = await conexao.query(SQL);
            return resposta[0];
        }
    }
}