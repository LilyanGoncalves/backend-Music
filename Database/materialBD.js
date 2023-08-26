import Material from "../Model/material.js";
import conectar from "./conexao.js";

export default class MaterialBD {

    constructor() { }


    async gravar(material) {
        if (material instanceof Material) {
            const conexao = await conectar();

            const SQL = "INSERT INTO material (`nome`) VALUES (?);"

            const parametros = [material.nome]
            const query = await conexao.query(SQL, parametros, function (error) {
                if (error) throw error;
            });
            return query[0].insertId;
        }
    }

    async atualizar(material) {
        if (material instanceof Material) {
            const conexao = await conectar();

            const SQL = "UPDATE `material` SET `nome` = ? WHERE `id` = ?"

            const parametros = [material.nome, material.id]
            let retornoBanco = await conexao.query(SQL, parametros);
            return retornoBanco[0].affectedRows;
        }
    }

    async excluir(material) {
        if (material instanceof Material) {
            const conexao = await conectar();

            const SQL = "DELETE FROM material WHERE `id` = ?"

            const parametros = [material.id]
            let retornoBanco = await conexao.query(SQL, parametros);
            return retornoBanco[0].affectedRows;
        }
    }

    async consultar(termo) {
        let SQL = "SELECT * FROM material"
                
        if (parseInt(termo) != NaN && termo != null) {
            const parametros = [termo]
            SQL += " WHERE id = ?"
            const conexao = await conectar();
            let resposta = await conexao.query(SQL, parametros);
            return resposta[0][0];
        } else {
            const conexao = await conectar();
            let resposta = await conexao.query(SQL);
            return resposta[0];
        }
    }
}