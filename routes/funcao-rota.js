import { Router }  from "express";
import FuncaoController from "../controller/funcao-controller.js";

const FuncaoRota = new Router();
const funcaoController = new FuncaoController();
//definiçao de endpoints  que serão  processadas pelas  camadas  de controle
// para uma determinada materiais


FuncaoRota.post('/', funcaoController.gravar)
.put('/', funcaoController.atualizar)
.delete('/', funcaoController.excluir)
.get('/', funcaoController.consultar)
.get('/:nome',funcaoController.consultar)
.get('/cpf/:cpf',funcaoController.consultarPorCPF)

export default FuncaoRota;

