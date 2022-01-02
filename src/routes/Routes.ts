import { Router, Request, Response } from 'express';
import { listarMoradores, cadastrarMoradores, listarMoradorPorId } from '../controllers/Morador/Morador.Controller';
import { listarAcionamentos, cadastrarAcionamento, listarAcionamentoPorId, acionar } from '../controllers/Acionamentos/Acionamento.controller';
import { listarEventos } from '../controllers/Evento/Evento.controller';
import { listarAcionamentosProgramado } from '../controllers/Temporizador/Temporizador.controller';
// import { enviarEvento } from '../controllers/Socket/Socket.Controller';

export const router = Router();

// MORADOR
    router.get('/morador', listarMoradores);
    router.get('/morador/:id', listarMoradorPorId);
    router.post('/morador', cadastrarMoradores);

// ACIONAMENTO
    router.get('/acionamento', listarAcionamentos);
    router.get('/acionamento/:id', listarAcionamentoPorId);
    router.post('/acionamento', cadastrarAcionamento);
    router.put('/acionamento/acionar', acionar);

// TEMPORIZADOR
    router.get('/temporizador', listarAcionamentosProgramado);

// EVENTO
    router.get('/evento', listarEventos);

// SOCKET TESTE
    // router.get('/msg', enviarEvento); 
