import Evento from "../model/evento-model.js";
import conectar from "./conexao.js";

export default class EventoBD {
    async incluir(evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar();
            const sql = "INSERT INTO evento(codigo, nome, data, hora, descricao, banda, musica) VALUES (?, ?, ?, ?, ?, ?, ?)";
            const valores = [evento.codigo, evento.nome, evento.data, evento.hora, evento.descricao, evento.banda, evento.musica];
            await conexao.query(sql, valores);
        }
    }

    async alterar(evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar();
            const sql = "UPDATE evento SET nome = ?, data = ?, hora = ?, descricao = ?, banda = ?, musica = ? WHERE codigo = ?";
            const valores = [evento.nome, evento.data, evento.hora, evento.descricao, evento.banda, evento.musica, evento.codigo];
            await conexao.query(sql, valores);
        }
    }

    async excluir(evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar();
            const sql = "DELETE FROM evento WHERE codigo = ?";
            const valores = [evento.codigo];
            await conexao.query(sql, valores);
        }
    }

    async consultar(termo) {
        const conexao = await conectar();
        const sql = "SELECT * FROM evento WHERE nome LIKE ?";
        const valores = ['%' + termo + '%'];
        const [rows] = await conexao.query(sql, valores);
        const listaEventos = [];
        for (const row of rows) {
            const evento = new Evento(row['codigo'], row['nome'], row['data'], row['hora'], row['descricao'], row['banda'], row['musica']);
            listaEventos.push(evento);
        }
        return listaEventos;
    }

    async consultarCodigo(codigo) {
        const conexao = await conectar();
        const sql = "SELECT * FROM evento WHERE codigo = ?";
        const valores = [codigo];
        const [rows] = await conexao.query(sql, valores);
        const listaEventos = [];
        for (const row of rows) {
            const evento = new Evento(row['codigo'], row['nome'], row['data'], row['hora'], row['descricao'], row['banda'], row['musica']);
            listaEventos.push(evento);
        }
        return listaEventos;
    }
}
