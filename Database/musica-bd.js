import conectar from "./conexao.js";
import Musica from "../model/musica-model.js";

export default class MusicaBD {

    constructor() { }


    async gravar(musica) {
        if (musica instanceof Musica) {
            const conexao = await conectar();

            const SQL = "INSERT INTO musica (`nome`, `interpreteOriginal`, `interpreteVersao`, `tomM`, `tomF`, `tomOriginal`, `linkYouTube`, `linkSpotify`, `cifra`, `bpm` ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"

            const parametros = [musica.nome, musica.interpreteOriginal, musica.interpreteVersao, musica.tomM, musica.tomF, musica.tomOriginal, musica.linkYouTube, musica.linkSpotify, musica.cifra, musica.bpm]
            const query = await conexao.query(SQL, parametros, function (error, results, fields) {
                if (error) throw error;

            });
            return query[0].insertId;
        }

    }

    async atualizar(musica) {
        if (musica instanceof Musica) {
            const conexao = await conectar();

            const SQL = "UPDATE `musica` SET `nome` = ?, `interpreteOriginal`= ?, `interpreteVersao`= ?, `tomM`= ?, `tomF`= ?, `tomOriginal`= ?, `linkYouTube`= ?, `linkSpotify`= ?, `cifra`= ?, `bpm`= ? WHERE `id` = ?"

            const parametros = [musica.nome, musica.interpreteOriginal, musica.interpreteVersao, musica.tomM, musica.tomF, musica.tomOriginal, musica.linkYouTube, musica.linkSpotify, musica.cifra, musica.bpm, musica.id]
            let retornoBanco = await conexao.query(SQL, parametros);
            return retornoBanco[0].affectedRows;
        }
    }

    async excluir(musica) {
        if (musica instanceof Musica) {
            const conexao = await conectar();

            const SQL = "DELETE FROM musica WHERE `id` = ?"

            const parametros = [musica.id]
            let retornoBanco = await conexao.query(SQL, parametros);
            return retornoBanco[0].affectedRows;
        }
    }

    async consultar(termo) {
        let SQL = "SELECT * FROM musica"
        if (termo){
            let parametros;
            if(isNaN(termo)) {
                parametros = ['%' + termo + '%']
                SQL += " WHERE nome LIKE ?"
            } else {
                parametros = [termo]
                SQL += " WHERE id = ?"
            }
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