import { Request, Response } from 'express';
import { Temporizador } from '../../interfaces/Temporizador.interface';
import { _Temporizador } from '../../models/Temporizador/Temporizador.model';

export const cadastrarAcionamentoTemporizador = async (req: Request, res: Response) => {
    // try {
    //     const response = await _Temporizador.create( {
            
    //     });
    //     return res.send(response);
    // } catch(e) {
    //     console.log(e);
    // }
}

export const listarAcionamentosProgramado = async (req: Request, res: Response) => {
    try {
        const response = await _Temporizador.findAll();
        return res.send(response);
    } catch(e) {
        console.log(e);
    }
}

export const controleDeAcionamentoProgramado = async () => {
    // let today = new Date();
    // let count = 0;
    // while(today) {
    //     setTimeout(() => {
    //         count++;
    //         console.log(count);
    //     }, 2000)
    // }
    // if(today === new Date('2021-12-19T16:15:58.188Z')) {
    //     console.log('DEU BOM UUUUHHH');
    // } else {
    //     console.log('DEU RUIM AAAAHHH');
    // }
}