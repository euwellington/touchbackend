import { Model } from "sequelize/dist";

export interface Temporizador {
    id?: string;
    acionamentoId: string;
    dataHora: Date;
    habilitado: boolean;
    obs: string;
}

export interface TemporizadorRequest extends Model<TemporizadorRequest, Temporizador> {}