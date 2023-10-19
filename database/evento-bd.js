import Evento from "../model/evento-model.js";
import conectar from "./conexao.js";

export default class EventoBD {
    async incluir(evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar();
            const sql = "INSERT INTO evento(id, nome, data, horario, descricao, banda, musica) VALUES (?, ?, ?, ?, ?, ?, ?)";
            const valores = [evento.id, evento.nome, evento.data, evento.horario, evento.descricao, evento.banda, evento.musica];
            await conexao.query(sql, valores);
        }
    }

    async alterar(evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar();
            const sql = "UPDATE evento SET nome = ?, data = ?, horario = ?, descricao = ?, banda = ?, musica = ? WHERE id = ?";
            const valores = [evento.nome, evento.data, evento.horario, evento.descricao, evento.banda, evento.musica, evento.id];
            await conexao.query(sql, valores);
        }
    }

    async excluir(evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar();
            const sql = "DELETE FROM evento WHERE id = ?";
            const valores = [evento.id];
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
            const evento = new Evento(row['id'], row['nome'], row['data'], row['horario'], row['descricao'], row['banda'], row['musica']);
            listaEventos.push(evento);
        }
        return listaEventos;
    }

    async consultarid(id) {
        const conexao = await conectar();
        const sql = "SELECT * FROM evento WHERE id = ?";
        const valores = [id];
        const [rows] = await conexao.query(sql, valores);
        const listaEventos = [];
        for (const row of rows) {
            const evento = new Evento(row['id'], row['nome'], row['data'], row['horario'], row['descricao'], row['banda'], row['musica']);
            listaEventos.push(evento);
        }
        return listaEventos;
    }
}
