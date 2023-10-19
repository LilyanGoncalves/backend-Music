import { Router } from "express";
import IntegranteController from '../controller/integrante-controller.js'
const IntegranteRota = new Router();
const integranteC = new IntegranteController();

//endpoints pela camada controle

IntegranteRota.post('/', integranteC.gravar)
.put('/', integranteC.atualizar)
.delete('/', integranteC.excluir)
.get('/', integranteC.consultar)
.get('/:nome', integranteC.consultar)
.get('/cpf/:cpf',integranteC.consultaCPF);

export default IntegranteRota;