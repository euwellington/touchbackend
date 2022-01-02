"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._Historico = void 0;
const Configuration_1 = __importDefault(require("../../database/Configuration"));
const dist_1 = require("sequelize/dist");
exports._Historico = Configuration_1.default.define('historicos', {
    id: {
        type: dist_1.UUID,
        defaultValue: dist_1.UUIDV4,
        primaryKey: true
    },
    moradorId: {
        type: dist_1.STRING
    },
    dataHora: {
        type: dist_1.DATE
    },
    moradorNome: {
        type: dist_1.STRING
    },
    local: {
        type: dist_1.STRING
    },
});
