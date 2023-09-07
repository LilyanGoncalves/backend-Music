import { Router }  from "express";
import MusicaController from "../controller/musica-controller.js";

const MusicaRota = new Router();
const musicaController = new MusicaController();
//definiçao de endpoints  que serão  processadas pelas  camadas  de controle
// para uma determinada musica


MusicaRota.post('/', musicaController.gravar)
.put('/', musicaController.atualizar)
.delete('/', musicaController.excluir)
.get('/', musicaController.consultar)
.get('/:id', musicaController.consultar)
.get('/nome/:nome', musicaController.consultar)

export default MusicaRota;

