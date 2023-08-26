import { Router } from "express";
import IntegranteCTRL from "../Controller/IntegranteCTRL.js"

const rotaIntegrante = new Router();
const integranteCTRL = new IntegranteCTRL();

//endpoints pela camada controle

rotaIntegrante.post('/', integranteCTRL.gravar)
.put('/', integranteCTRL.atualizar)
.delete('/', integranteCTRL.excluir)
.get('/', integranteCTRL.consultar)
.get('/:nome', integranteCTRL.consultar)
.get('/cpf/:cpf',integranteCTRL.consultaCPF);

export default rotaIntegrante;