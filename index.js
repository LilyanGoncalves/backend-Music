import express from 'express';
import IntegranteRota from "./routes/integrante-rota.js";
import EventoRota from "./routes/evento-rota.js";
import MusicaRota from './routes/musica-rota.js';
import MaterialRota from './routes/material-rota.js';
import FuncaoRota from './routes/funcao-rota.js';
import LoginSistemaRota from './routes/login-sistema-rota.js';
import CategoriaMaterialRota from './routes/categoria-material-rota.js';

const PORT = 4029;
let HOSTNAME = 'localhost';

if (process.platform === 'linux') {
    // PARA SUBIR NO SERVIDOR
    let HOSTNAME = '0.0.0.0';
    console.log('O ambiente é Linux.');
} else {
    //PARA TESTE LOCAL
    console.log('Ambiente Windows.');
}


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

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/integrante', IntegranteRota);
app.use('/evento', EventoRota);
app.use('/musica', MusicaRota);
app.use('/material', MaterialRota);
app.use('/funcao', FuncaoRota);
app.use('/login', LoginSistemaRota);
app.use('/categoriamaterial', CategoriaMaterialRota);

app.use('/', (req, resp) => {
    resp.status(200).json({ status: true, message: 'API OK' });
});
app.listen(PORT, HOSTNAME, () => {
    console.log('backend ouvindo em ' + HOSTNAME + ':' + PORT);
});

