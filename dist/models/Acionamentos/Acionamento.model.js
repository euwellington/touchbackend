"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._Acionamento = void 0;
var Configuration_1 = __importDefault(require("../../database/Configuration"));
var dist_1 = require("sequelize/dist");
exports._Acionamento = Configuration_1.default.define('acionamentos', {
    id: {
        type: dist_1.UUID,
        defaultValue: dist_1.UUIDV4,
        primaryKey: true
    },
    moradorId: {
        type: dist_1.STRING
    },
    nome: {
        type: dist_1.STRING
    },
    descricao: {
        type: dist_1.STRING
    },
    tipo: {
        type: dist_1.BOOLEAN
    },
});
