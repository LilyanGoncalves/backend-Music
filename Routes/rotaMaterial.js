import { Router }  from "express";
import MaterialCTRL from "../Controller/materialCTRL.js";

const rotaMaterial = new Router();
const materialCTRL = new MaterialCTRL();
//definiçao de endpoints  que serão  processadas pelas  camadas  de controle
// para uma determinada materiais


rotaMaterial.post('/', materialCTRL.gravar)
.put('/', materialCTRL.atualizar)
.delete('/', materialCTRL.excluir)
.get('/', materialCTRL.consultar)
.get('/:id', materialCTRL.consultar)

export default rotaMaterial;



