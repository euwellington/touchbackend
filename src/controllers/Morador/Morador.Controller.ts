import { Response, Request } from 'express';
import { MoradorRequest, Morador } from '../../interfaces/Morador.interface';
import { _Morador } from '../../models/Morador/Morador.model';
import { _Acionamento } from '../../models/Acionamentos/Acionamento.model';

export const listarMoradores = async (req: Request, res: Response) => {
    try {
        const response = await _Morador.findAll();
        return res.send(response);
    } catch(e) {
        console.log(e);
    }
}

export const cadastrarMoradores = async () => {
    // const response = await _Morador.create({
    //     nome: 'Maria Liduina De Abreu',
    //     nascimento: '28.08.2001',
    //     cpf: '000.000.000-25',
    //     email: 'Liduina@gmail.com',
    //     endereco: 'rua sao da paz, 2589',
    //     celular: '85985459854',
    //     telefone: '8534654598',
    //     obs: 'dependente',
    // });
    // _Acionamento.create({
    //     moradorId: response.id ? response.id : '',
    //     nome: 'relé 1',
    //     descricao: 'luz da sala',
    //     tipo: false,
    // }).then().catch(e => console.log(e))
    // return res.send(response);
}

export const listarMoradorPorId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await _Morador.findAll({
        where: {
            id: id
        }
    });

    res.send(response);
}