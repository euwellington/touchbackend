"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.acionar = exports.cadastrarAcionamento = exports.listarAcionamentoPorId = exports.listarAcionamentos = void 0;
var Acionamento_model_1 = require("../../models/Acionamentos/Acionamento.model");
var Evento_model_1 = require("../../models/Evento/Evento.model");
var Morador_model_1 = require("../../models/Morador/Morador.model");
var Socket_Controller_1 = require("../../controllers/Socket/Socket.Controller");
var listarAcionamentos = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Acionamento_model_1._Acionamento.findAll()];
            case 1:
                response = _a.sent();
                res.send(response);
                return [2 /*return*/];
        }
    });
}); };
exports.listarAcionamentos = listarAcionamentos;
var listarAcionamentoPorId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, Acionamento_model_1._Acionamento.findAll({
                        where: {
                            id: id
                        }
                    })];
            case 1:
                response = _a.sent();
                response.map(function (i) {
                    res.send(i);
                });
                return [2 /*return*/];
        }
    });
}); };
exports.listarAcionamentoPorId = listarAcionamentoPorId;
var cadastrarAcionamento = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Acionamento_model_1._Acionamento.create({
                    moradorId: '',
                    nome: 'relé 1',
                    descricao: 'luz de teste',
                    tipo: false,
                })];
            case 1:
                response = _a.sent();
                res.send(response);
                return [2 /*return*/];
        }
    });
}); };
exports.cadastrarAcionamento = cadastrarAcionamento;
var acionar = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Acionamento_model_1._Acionamento.findAll({
                    where: {
                        id: req.body.id
                    }
                })];
            case 1:
                response = _a.sent();
                response.map(function (i) { return __awaiter(void 0, void 0, void 0, function () {
                    var response_1, e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(req.body.tipo === String(i.tipo))) return [3 /*break*/, 1];
                                res.send('Esse dispositivo está acionado');
                                return [3 /*break*/, 5];
                            case 1:
                                _a.trys.push([1, 4, , 5]);
                                return [4 /*yield*/, Acionamento_model_1._Acionamento.update({
                                        moradorId: req.body.moradorId,
                                        nome: req.body.nome,
                                        descricao: req.body.descricao,
                                        tipo: req.body.tipo
                                    }, {
                                        where: {
                                            id: req.body.id
                                        }
                                    })];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, Morador_model_1._Morador.findAll({
                                        where: {
                                            id: req.body.moradorId
                                        }
                                    })];
                            case 3:
                                response_1 = _a.sent();
                                response_1.map(function (i) {
                                    Evento_model_1._Evento.create({
                                        moradorId: req.body.moradorId,
                                        dataHora: new Date(),
                                        local: req.body.descricao,
                                        moradorNome: i.nome,
                                        tipo: req.body.tipo
                                    });
                                });
                                (0, Socket_Controller_1.enviarMensagem)(req.body.id);
                                return [3 /*break*/, 5];
                            case 4:
                                e_1 = _a.sent();
                                console.log(e_1);
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
        }
    });
}); };
exports.acionar = acionar;
