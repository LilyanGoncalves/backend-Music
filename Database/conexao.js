import mysql from 'mysql2/promise';

export default async function conectar(){

    if(global.conexao && global.conexao.status != "disconnected"){
        return global.conexao;
    }

    const conexao = await mysql.createConnection({
        host:"127.0.0.1",
        user:"aluno29-pfsii",
        port:"3306",
        password:"F7eI8uwrDzPyQcUqHDWC",
        database:"backendmusic"
    });

    global.conexao = conexao;

    return conexao;

}