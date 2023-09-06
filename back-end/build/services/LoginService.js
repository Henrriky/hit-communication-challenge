"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
var generateToken_1 = require("../utils/generateToken");
var LoginService = /** @class */ (function () {
    function LoginService(repository) {
        var _this = this;
        this.login = function (email, password) {
            var users = _this.repository.getUsers().users;
            var user = users.find(function (user) { return user.email === email && user.password === password; });
            if (!user) {
                return "";
            }
            var token = (0, generateToken_1.generateToken)(user);
            return token;
        };
        this.repository = repository;
    }
    return LoginService;
}());
exports.LoginService = LoginService;
