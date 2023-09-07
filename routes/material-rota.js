import { Router }  from "express";
import MaterialController from "../controller/material-controller.js";

const MaterialRota = new Router();
const materialController = new MaterialController();
//definiçao de endpoints  que serão  processadas pelas  camadas  de controle
// para uma determinada materiais


MaterialRota.post('/', materialController.gravar)
.put('/', materialController.atualizar)
.delete('/', materialController.excluir)
.get('/', materialController.consultar)
.get('/:id', materialController.consultar)

export default MaterialRota;



