import Connection from "../../database/Configuration";
import { Morador, MoradorRequest } from "../../interfaces/Morador.interface";
import { UUID, UUIDV4, STRING, DATE } from "sequelize/dist";
import { _Acionamento } from '../Acionamentos/Acionamento.model';

export const _Morador = Connection.define<MoradorRequest, Morador>('moradores', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    nome: {
        type: STRING
    },
    nascimento: {
        type: STRING
    },
    cpf: {
        type: STRING
    },
    email: {
        type: STRING
    },
    endereco: {
        type: STRING
    },
    celular: {
        type: STRING
    },
    telefone: {
        type: STRING
    },
    obs: {
        type: STRING
    },
})

// _Morador.hasMany(_Acionamento, { foreignKey: 'moradorId', as: 'acionamentos' });