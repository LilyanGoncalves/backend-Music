import { Router } from "express";
import LoginSistemaCTRL from "../Controller/LoginSistemaCTRL.js"

const rotaLoginSistema = new Router();
const loginSistemaCTRL = new LoginSistemaCTRL();

rotaLoginSistema.post('/', loginSistemaCTRL.autenticar);

export default rotaLoginSistema;