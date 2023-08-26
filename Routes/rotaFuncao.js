import { Router }  from "express";
import FuncaoCTRL from "../Controller/funcaoCTRL.js";

const rotaFuncao = new Router();
const funcaoCTRL = new FuncaoCTRL();
//definiçao de endpoints  que serão  processadas pelas  camadas  de controle
// para uma determinada materiais


rotaFuncao.post('/', funcaoCTRL.gravar)
.put('/', funcaoCTRL.atualizar)
.delete('/', funcaoCTRL.excluir)
.get('/', funcaoCTRL.consultar)
.get('/:nome',funcaoCTRL.consultar)

export default rotaFuncao;

