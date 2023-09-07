import { Router } from "express";
import LoginSistemaController from "../controller/login-sistema-controller.js"

const LoginSistemaRota = new Router();
const loginSistemaController = new LoginSistemaController();

LoginSistemaRota.post('/', loginSistemaController.autenticar);

export default LoginSistemaRota;