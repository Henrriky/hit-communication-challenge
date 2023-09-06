"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateToken(user) {
    var secret = "HIT_COMMUNICATION";
    var expiresIn = "1h";
    var payload = {
        id: user.id,
        email: user.email,
        name: user.name,
    };
    return jsonwebtoken_1.default.sign(payload, secret, { expiresIn: expiresIn });
}
exports.generateToken = generateToken;
