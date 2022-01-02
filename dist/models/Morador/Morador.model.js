"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._Morador = void 0;
var Configuration_1 = __importDefault(require("../../database/Configuration"));
var dist_1 = require("sequelize/dist");
exports._Morador = Configuration_1.default.define('moradores', {
    id: {
        type: dist_1.UUID,
        defaultValue: dist_1.UUIDV4,
        primaryKey: true
    },
    nome: {
        type: dist_1.STRING
    },
    nascimento: {
        type: dist_1.STRING
    },
    cpf: {
        type: dist_1.STRING
    },
    email: {
        type: dist_1.STRING
    },
    endereco: {
        type: dist_1.STRING
    },
    celular: {
        type: dist_1.STRING
    },
    telefone: {
        type: dist_1.STRING
    },
    obs: {
        type: dist_1.STRING
    },
});
// _Morador.hasMany(_Acionamento, { foreignKey: 'moradorId', as: 'acionamentos' });
