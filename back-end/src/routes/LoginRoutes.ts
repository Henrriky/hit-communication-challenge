import express from "express";
import { LoginRepository } from "../repository/LoginRepository";
import { LoginService } from "../services/LoginService";
import { LoginController } from "../controllers/LoginController";

export const router = express.Router();

const loginRepositoryInstance = new LoginRepository();
const loginServiceInstance = new LoginService(loginRepositoryInstance);
const loginControllerInstance = new LoginController(loginServiceInstance);

router.post("/login", loginControllerInstance.login)


