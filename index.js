import express from 'express';
import cors from 'cors'
import rotaIntegrante from "./Routes/rotaIntegrante.js";
import rotaEvento from "./Routes/rotaEvento.js";
import rotaMusica from './Routes/rotaMusica.js';
import rotaMaterial from './Routes/rotaMaterial.js';
import rotaFuncao from './Routes/rotaFuncao.js';
import rotaLoginSistema from './Routes/rotaLogin.js';

const PORT = 4029;
const HOSTNAME = '0.0.0.0';
const app = express();
app.use(cors({origin:"*"}));
app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use('/integrante', rotaIntegrante);
app.use('/evento', rotaEvento);
app.use('/musica', rotaMusica);
app.use('/material', rotaMaterial);
app.use('/funcao', rotaFuncao);
app.use('/login', rotaLoginSistema);

app.listen(PORT, HOSTNAME, ()=>{
    console.log('backend ouvindo em ' + HOSTNAME + ':' + PORT);
});

