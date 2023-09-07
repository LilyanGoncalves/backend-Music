import { Router }  from "express";
import CategoriaMaterialController from "../controller/categoria-material-controller.js";

const CategoriaMaterialRota = new Router();
const categoriaMaterialController = new CategoriaMaterialController();
//definiçao de endpoints  que serão  processadas pelas  camadas  de controle
// para uma determinada materiais


CategoriaMaterialRota.post('/', categoriaMaterialController.gravar)
.put('/', categoriaMaterialController.atualizar)
.delete('/', categoriaMaterialController.excluir)
.get('/', categoriaMaterialController.consultar)
.get('/:id', categoriaMaterialController.consultar)

export default CategoriaMaterialRota;



