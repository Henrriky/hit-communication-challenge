"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputValidate = void 0;
var joi_1 = __importDefault(require("@hapi/joi"));
var inputValidate = function (data) {
    var schema = joi_1.default.object({
        email: joi_1.default.string().required().min(3).max(50),
        password: joi_1.default.string().required().min(4).max(100)
    });
    return schema.validate(data);
};
exports.inputValidate = inputValidate;
