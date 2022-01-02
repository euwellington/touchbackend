"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._Temporizador = void 0;
var Configuration_1 = __importDefault(require("../../database/Configuration"));
var dist_1 = require("sequelize/dist");
exports._Temporizador = Configuration_1.default.define('temporizadores', {
    id: {
        type: dist_1.UUID,
        defaultValue: dist_1.UUIDV4,
        primaryKey: true
    },
    acionamentoId: {
        type: dist_1.STRING
    },
    dataHora: {
        type: dist_1.DATE
    },
    habilitado: {
        type: dist_1.BOOLEAN
    },
    obs: {
        type: dist_1.STRING
    },
});
