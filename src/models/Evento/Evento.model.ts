import Connection from "../../database/Configuration";
import { Evento, EventoRequest } from "../../interfaces/Evento.interface";
import { UUID, UUIDV4, STRING, DATE, BOOLEAN } from "sequelize/dist";

export const _Evento = Connection.define<EventoRequest, Evento>('eventos', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    moradorId: {
        type: STRING
    },
    dataHora: {
        type: DATE
    },
    moradorNome: {
        type: STRING
    },
    local: {
        type: STRING
    },
    tipo: {
        type: BOOLEAN
    },
})