import { Request, Response } from 'express';
import { Evento } from '../../interfaces/Evento.interface';
import { _Evento } from '../../models/Evento/Evento.model';

export const listarEventos = async (req: Request, res: Response) => {
    try {
        const response = await _Evento.findAll();
        return res.send(response);
    } catch(e) {
        console.log(e);
    }
}