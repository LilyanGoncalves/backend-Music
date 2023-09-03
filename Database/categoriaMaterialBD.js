import conectar from "./conexao.js";
import CategoriaMaterial from "../Model/categoriaMaterial.js";

export default class CategoriaMaterialBD {

    constructor() { }


    async gravar(categoriaMaterial) {
        if (categoriaMaterial instanceof CategoriaMaterial) {
            const conexao = await conectar();

            const SQL = "INSERT INTO categoria_material (`nome`) VALUES (?);"

            const parametros = [categoriaMaterial.nome]
            const query = await conexao.query(SQL, parametros, function (error) {
                if (error) throw error;
            });
            return query[0].insertId;
        }
    }

    async atualizar(categoriaMaterial) {
        if (categoriaMaterial instanceof CategoriaMaterial) {
            const conexao = await conectar();

            const SQL = "UPDATE `categoria_material` SET `nome` = ? WHERE `id` = ?"

            const parametros = [categoriaMaterial.nome, categoriaMaterial.id]
            let retornoBanco = await conexao.query(SQL, parametros);
            return retornoBanco[0].affectedRows;
        }
    }

    async excluir(categoriaMaterial) {
        if (categoriaMaterial instanceof CategoriaMaterial) {
            const conexao = await conectar();

            const SQL = "DELETE FROM categoria_material WHERE `id` = ?"

            const parametros = [categoriaMaterial.id]
            let retornoBanco = await conexao.query(SQL, parametros);
            return retornoBanco[0].affectedRows;
        }
    }

    async consultar(termo) {
        let SQL = "SELECT * FROM categoria_material"
                
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