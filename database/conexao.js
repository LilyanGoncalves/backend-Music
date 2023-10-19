import mysql from 'mysql2/promise';

export default async function conectar() {

    if (global.conexao && global.conexao.status != "disconnected") {
        return global.conexao;
    }
    let conexao;
    if (process.platform === 'linux') {
        // PARA SUBIR NO SERVIDOR
        conexao = await mysql.createConnection({
            host: "localhost",
            user: "aluno29-pfsii",
            port: "3306",
            password: "F7eI8uwrDzPyQcUqHDWC",
            database: "injmusic-bd"
        });
        console.log('BD:O ambiente é Linux.');
    } else {
        //PARA TESTE LOCAL
        //PARA TESTE LOCAL
        conexao = await mysql.createConnection({
            host: "localhost",
            port: "3306",
            user: "user",
            password: "123456",
            database: "injmusic-bd"
        });
        console.log('BD:Ambiente Windows.');
    }
    global.conexao = conexao;
    return conexao;
}
