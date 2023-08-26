import { Router } from "express";
import EventoCTRL from "../Controller/EventoCtrl.js";

const rotaEvento = new Router();
const eventoCTRL = new EventoCTRL();

// Endpoints pela camada controle

rotaEvento.post("/", eventoCTRL.gravar)
.put("/", eventoCTRL.atualizar)
.delete("/", eventoCTRL.excluir)
.get("/", eventoCTRL.consultar)
.get("/:codigo", eventoCTRL.consultaEvento);

export default rotaEvento;
