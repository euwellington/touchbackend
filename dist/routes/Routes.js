"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var Morador_Controller_1 = require("../controllers/Morador/Morador.Controller");
var Acionamento_controller_1 = require("../controllers/Acionamentos/Acionamento.controller");
var Evento_controller_1 = require("../controllers/Evento/Evento.controller");
var Temporizador_controller_1 = require("../controllers/Temporizador/Temporizador.controller");
var Socket_Controller_1 = require("../controllers/Socket/Socket.Controller");
exports.router = (0, express_1.Router)();
// MORADOR
exports.router.get('/morador', Morador_Controller_1.listarMoradores);
exports.router.get('/morador/:id', Morador_Controller_1.listarMoradorPorId);
exports.router.post('/morador', Morador_Controller_1.cadastrarMoradores);
// ACIONAMENTO
exports.router.get('/acionamento', Acionamento_controller_1.listarAcionamentos);
exports.router.get('/acionamento/:id', Acionamento_controller_1.listarAcionamentoPorId);
exports.router.post('/acionamento', Acionamento_controller_1.cadastrarAcionamento);
exports.router.put('/acionamento/acionar', Acionamento_controller_1.acionar);
// TEMPORIZADOR
exports.router.get('/temporizador', Temporizador_controller_1.listarAcionamentosProgramado);
// EVENTO
exports.router.get('/evento', Evento_controller_1.listarEventos);
// SOCKET TESTE
exports.router.get('/msg', Socket_Controller_1.enviarMensagem);
