import { Response, Request } from 'express';
import { Acionamento } from '../../interfaces/Acionamento.interface';
import { _Acionamento } from '../../models/Acionamentos/Acionamento.model';
import { _Evento } from '../../models/Evento/Evento.model';
import { _Morador } from '../../models/Morador/Morador.model';
import Socket from '../../controllers/Socket';

export const listarAcionamentos = async (req: Request, res: Response) => {
    const response = await _Acionamento.findAll();
    res.send(response);
}

export const listarAcionamentoPorId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await _Acionamento.findAll({
        where: {
            id: id
        }
    });
    response.map(i => {
        res.send(i);
    })
}

export const cadastrarAcionamento = async (req: Request, res: Response) => {
    const response = await _Acionamento.create({
        moradorId: '',
        nome: 'relé 1',
        descricao: 'luz de teste',
        tipo: false,
    });
    res.send(response);
}

export const acionar = async (req: Request, res: Response) => {

    const response = await _Acionamento.findAll({
        where: {
            id: req.body.id
        }
    });

    response.map( async (i) => {
        if(req.body.tipo === String(i.tipo)) {
            res.send('Esse dispositivo está acionado')
        } else {
            try {
                await _Acionamento.update({
                    moradorId: req.body.moradorId,
                    nome: req.body.nome,
                    descricao: req.body.descricao,
                    tipo: req.body.tipo
                }, {
                    where: {
                        id: req.body.id
                    }
                });
                const response = await _Morador.findAll({
                    where: {
                        id: req.body.moradorId
                    }
                });
                response.map( i => {
                    _Evento.create({
                        moradorId: req.body.moradorId,
                        dataHora: new Date(),
                        local: req.body.descricao,
                        moradorNome: i.nome,
                        tipo: req.body.tipo
                    })
                });
                Socket.enviarEvento(req.body);
            } catch(e) {
                console.log(e)
            }
        }
    } )
}