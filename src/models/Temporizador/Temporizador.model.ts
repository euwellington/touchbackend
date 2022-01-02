import Connection from "../../database/Configuration";
import { Temporizador, TemporizadorRequest } from "../../interfaces/Temporizador.interface";
import { UUID, UUIDV4, STRING, DATE, BOOLEAN } from "sequelize/dist";
import { _Acionamento } from '../Acionamentos/Acionamento.model';

export const _Temporizador = Connection.define<TemporizadorRequest, Temporizador>('temporizadores', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    acionamentoId: {
        type: STRING
    },
    dataHora: {
        type: DATE
    },
    habilitado: {
        type: BOOLEAN
    },
    obs: {
        type: STRING
    },
})
