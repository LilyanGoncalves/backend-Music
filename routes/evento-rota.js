import { Router } from "express";
import EventoController from "../controller/evento-controller.js";

const EventoRota = new Router();
const eventoController = new EventoController();

// Endpoints pela camada controle

EventoRota.post("/", eventoController.gravar)
.put("/", eventoController.atualizar)
.delete("/", eventoController.excluir)
.get("/", eventoController.consultar)
.get("/:id", eventoController.consultaEvento);

export default EventoRota;
