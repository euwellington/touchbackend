"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviarMensagem = void 0;
var index_1 = __importDefault(require("../../index"));
var enviarMensagem = function (mensagem) {
    index_1.default.emit('msg', mensagem);
};
exports.enviarMensagem = enviarMensagem;
