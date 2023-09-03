import { Router }  from "express";
import CategoriaMaterialCTRL from "../Controller/categoriaMaterialCTRL.js";

const categoriaRotaMaterial = new Router();
const categoriaMaterialCTRL = new CategoriaMaterialCTRL();
//definiçao de endpoints  que serão  processadas pelas  camadas  de controle
// para uma determinada materiais


categoriaRotaMaterial.post('/', categoriaMaterialCTRL.gravar)
.put('/', categoriaMaterialCTRL.atualizar)
.delete('/', categoriaMaterialCTRL.excluir)
.get('/', categoriaMaterialCTRL.consultar)
.get('/:id', categoriaMaterialCTRL.consultar)

export default categoriaRotaMaterial;



