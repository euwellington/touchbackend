import Connection from "../../database/Configuration";
import { Acionamento, AcionamentoRequest } from "../../interfaces/Acionamento.interface";
import { UUID, UUIDV4, STRING, DATE, BOOLEAN } from "sequelize/dist";

export const _Acionamento = Connection.define<AcionamentoRequest, Acionamento>('acionamentos', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    moradorId: {
        type: STRING
    },
    nome: {
        type: STRING
    },
    descricao: {
        type: STRING
    },
    tipo: {
        type: BOOLEAN
    },
})