"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
var validate_1 = require("../utils/validate");
var LoginController = /** @class */ (function () {
    function LoginController(service) {
        var _this = this;
        this.login = function (req, res) {
            var error = (0, validate_1.inputValidate)(req.body).error;
            if (error) {
                return res.status(400).send({ message: error.message });
            }
            try {
                var token = _this.service.login(req.body.email, req.body.password);
                if (token.length === 0) {
                    return res.status(404).send({ message: "Email or Password is incorrect" });
                }
                res.status(200).send({ message: "Usuario logado com sucesso!", authorizationToken: token });
            }
            catch (error) {
                console.log(error);
                res.status(500).send({ error: "Erro interno no servidor" });
            }
        };
        this.service = service;
    }
    return LoginController;
}());
exports.LoginController = LoginController;
