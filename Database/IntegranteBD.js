import Integrante from "../Model/Integrante.js";
import conectar from "./conexao.js";
export default class IntegranteBD {

    async incluir(integrante) {

        if (integrante instanceof Integrante) {
            const conexao = await conectar();
            const sql = "INSERT INTO integrante(cpf, nome, endereco, bairro, cidade, uf, telefone, email, funcaoid) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
            const valores = [integrante.cpf, integrante.nome, integrante.endereco, integrante.bairro, integrante.cidade, integrante.uf, integrante.telefone, integrante.email, integrante.funcaoId];
            const query = await conexao.query(sql, valores, function (error, results, fields) {
                if (error) throw error;

            });
            return query[0].insertId;
        }

    }

    async alterar(integrante) {

        if (integrante instanceof Integrante) {
            const conexao = await conectar();
            const sql = "UPDATE integrante SET nome = ?, endereco = ?, bairro = ?, cidade = ?, uf = ?, telefone = ?, email = ?, funcaoid = ?  WHERE cpf = ?";
            const valores = [integrante.nome, integrante.endereco, integrante.bairro, integrante.cidade, integrante.uf, integrante.telefone, integrante.email, integrante.funcaoId, integrante.cpf];
            const query = await conexao.query(sql, valores, function (error, results, fields) {
                if (error) throw error;

            });
            return query[0].affectedRows;
        }

    }

    async excluir(integrante) {

        if (integrante instanceof Integrante) {
            const conexao = await conectar();
            const sql = "DELETE FROM integrante WHERE cpf = ?";
            const valores = [integrante.cpf];
            let retornoBanco = await conexao.query(sql, valores);
            return retornoBanco[0].affectedRows;
        }
    }
    //nome = ?,endereco = ?,bairro = ?,cidade = ?,uf = ?,telefone = ?,email = ?,funcaoid = ?
    async consultar(termo) {
        let sql = "SELECT integrante.cpf, integrante.nome, integrante.endereco, integrante.bairro, integrante.cidade, integrante.uf, integrante.telefone, integrante.email, integrante. funcaoid, funcao.nome as funcaonome FROM `injmusic-bd`.integrante as integrante inner join funcao where funcao.id = integrante.funcaoid ";
        let valores;
        if (termo) {
            sql += " WHERE nome LIKE ?"
            valores = ['%' + termo + '%']
        }

        const conexao = await conectar();
        const [rows] = await conexao.query(sql, valores);
        const listaIntegrantes = [];
        for (const row of rows) {
            const integrante = new Integrante(row['cpf'], row['nome'], row['endereco'], row['bairro'], row['cidade'], row['uf'], row['telefone'], row['email'], row['funcaoid'], row['funcaonome']);
            listaIntegrantes.push(integrante);
        }
        return listaIntegrantes;
    }

    async consultarCPF(cpf) {

        const conexao = await conectar();
        const sql = "SELECT * FROM integrante WHERE cpf = ?";
        const valores = [cpf]
        const [rows] = await conexao.query(sql, valores);
        const listaIntegrantes = [];
        for (const row of rows) {
            const integrante = new Integrante(row['cpf'], row['nome'], row['endereco'], row['bairro'], row['cidade'], row['uf'], row['telefone'], row['email'], row['funcaoid']);
            listaIntegrantes.push(integrante);
        }
        return listaIntegrantes;

    }

}