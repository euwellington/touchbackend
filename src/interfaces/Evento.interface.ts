import { Model } from "sequelize/dist";

export interface Evento {
    id?: string;
    moradorId: string;
    dataHora: Date;
    moradorNome: string;
    tipo: boolean;
    local: string;
}

export interface EventoRequest extends Model<EventoRequest, Evento> {}