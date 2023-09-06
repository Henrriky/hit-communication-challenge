"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var LoginRepository_1 = require("../repository/LoginRepository");
var LoginService_1 = require("../services/LoginService");
var LoginController_1 = require("../controllers/LoginController");
exports.router = express_1.default.Router();
var loginRepositoryInstance = new LoginRepository_1.LoginRepository();
var loginServiceInstance = new LoginService_1.LoginService(loginRepositoryInstance);
var loginControllerInstance = new LoginController_1.LoginController(loginServiceInstance);
exports.router.post("/login", loginControllerInstance.login);
