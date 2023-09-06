"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRepository = void 0;
var dataLogin_json_1 = __importDefault(require("../data/dataLogin.json"));
var LoginRepository = /** @class */ (function () {
    function LoginRepository() {
        this.getUsers = function () {
            var usersJSON = JSON.stringify(dataLogin_json_1.default);
            var usersMapping = JSON.parse(usersJSON);
            return usersMapping;
        };
    }
    return LoginRepository;
}());
exports.LoginRepository = LoginRepository;
