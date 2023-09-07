import mysql from 'mysql2/promise';

export default async function conectar(){

    if(global.conexao && global.conexao.status != "disconnected"){
        return global.conexao;
    }

    const conexao = await mysql.createConnection({
        host:"localhost",
        user:"aluno29-pfsii",
        port:"3306",
        password:"F7eI8uwrDzPyQcUqHDWC",
        database:"injmusic-bd"
    });


    // const conexao = await mysql.createConnection({
    //     host:"localhost",
    //     user:"user",
    //     port:"3306",
    //     password:"123456",
    //     database:"injmusic-bd"
    // });

    global.conexao = conexao;

    return conexao;

}