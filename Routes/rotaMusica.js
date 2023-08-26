import { Router }  from "express";
import MusicaCTRL from "../Controller/musicaCTRL.js";

const rotaMusica = new Router();
const musicaCTRL = new MusicaCTRL();
//definiçao de endpoints  que serão  processadas pelas  camadas  de controle
// para uma determinada musica


rotaMusica.post('/', musicaCTRL.gravar)
.put('/', musicaCTRL.atualizar)
.delete('/', musicaCTRL.excluir)
.get('/', musicaCTRL.consultar)
.get('/:id', musicaCTRL.consultar)
.get('/nome/:nome', musicaCTRL.consultar)

export default rotaMusica;

