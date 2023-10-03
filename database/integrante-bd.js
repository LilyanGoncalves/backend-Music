import Integrante from "../model/integrante-model.js";
import conectar from "./conexao.js";

export default class IntegranteBD {

    async incluir(integrante) {

        if (integrante instanceof Integrante) {
            const conexao = await conectar();
            const sql = "INSERT INTO integrante(cpf, nome, endereco, bairro, cidade, uf, telefone, email, funcaoid) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
            const valores = [integrante.cpf, integrante.nome, integrante.endereco, integrante.bairro, integrante.cidade, integrante.uf, integrante.telefone, integrante.email, integrante.funcaoId];
            const resultado = await conexao.query(sql, valores, function (error, results, fields) {
                if (error) throw error;
            });
            for (let i = 0; i < integrante.listaFuncao.length; i++) {
                const funcao = integrante.listaFuncao[i];
                
                const sql2 = "INSERT INTO integrante_funcao(integranteid, funcaoid) VALUES (?,?)";
                const valores2 = [integrante.cpf, funcao.id]
                const resultado2 = await conexao.query(sql2, valores2, function(error, results, fields){
                    if (error) throw error;
                });
            }
            return resultado[0].insertId;
        }

    }

    async alterar(integrante) {

        if (integrante instanceof Integrante) {
            const conexao = await conectar();
            const sql = "UPDATE integrante SET nome = ?, endereco = ?, bairro = ?, cidade = ?, uf = ?, telefone = ?, email = ?, funcaoid = ?  WHERE cpf = ?";
            const valores = [integrante.nome, integrante.endereco, integrante.bairro, integrante.cidade, integrante.uf, integrante.telefone, integrante.email, integrante.funcaoId, integrante.cpf];
            const resultado = await conexao.query(sql, valores, function (error, results, fields) {
                if (error) throw error;

            });

            //apagar os registros muitos para muitos existentes no banco
            const sql2 = "DELETE FROM `injmusic-bd`.`integrante_funcao` WHERE (`integranteid` = ?)";
            const valores2 = [integrante.cpf]
            const resultado2 = await conexao.query(sql2, valores2, function(error, results, fields){
                if (error) throw error;
            });

            //Insiro novamente os relacionamentos muitos para muitos
            for (let i = 0; i < integrante.listaFuncao.length; i++) {
                const funcao = integrante.listaFuncao[i];
                
                const sql3 = "INSERT INTO integrante_funcao(integranteid, funcaoid) VALUES (?,?)";
                const valores3 = [integrante.cpf, funcao.id]
                const resultado3 = await conexao.query(sql3, valores3, function(error, results, fields){
                    if (error) throw error;
                });
            }
            return resultado[0].affectedRows + resultado2[0].affectedRows + resultado3[0].affectedRows;
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