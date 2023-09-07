import express from 'express';
import cors from 'cors'
import rotaIntegrante from "./Routes/rotaIntegrante.js";
import rotaEvento from "./Routes/rotaEvento.js";
import rotaMusica from './Routes/rotaMusica.js';
import rotaMaterial from './Routes/rotaMaterial.js';
import rotaFuncao from './Routes/rotaFuncao.js';
import rotaLoginSistema from './Routes/rotaLogin.js';
import categoriaRotaMaterial from './Routes/categoriaRotaMaterial.js';

const PORT = 4029;
// const HOSTNAME = 'localhost';
const HOSTNAME = '0.0.0.0';
const app = express();
app.use((req, res, next) => {

    console.log("Origem da solicitação:", req.get("origin"));


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    next();
})

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use('/integrante', rotaIntegrante);
app.use('/evento', rotaEvento);
app.use('/musica', rotaMusica);
app.use('/material', rotaMaterial);
app.use('/funcao', rotaFuncao);
app.use('/login', rotaLoginSistema);
app.use('/categoriamaterial', categoriaRotaMaterial);

app.listen(PORT, HOSTNAME, ()=>{
    console.log('backend ouvindo em ' + HOSTNAME + ':' + PORT);
});

