import { Router } from "express";
import { IntegranteController } from "../controller/integrante-controller.js"
const IntegranteRota = new Router();
const integranteController = new IntegranteController();

//endpoints pela camada controle

IntegranteRota.post('/', integranteController.gravar)
.put('/', integranteController.atualizar)
.delete('/', integranteController.excluir)
.get('/', integranteController.consultar)
.get('/:nome', integranteController.consultar)
.get('/cpf/:cpf',integranteController.consultaCPF);

export default IntegranteRota;