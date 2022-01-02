import { Model } from "sequelize/dist";

export interface Acionamento {
    id?: string;
    moradorId: string;
    nome: string;
    descricao: string;
    tipo: boolean; 
}

export interface AcionamentoRequest extends Model<AcionamentoRequest, Acionamento> {
    id: string;
    moradorId?: string;
    nome: string;
    descricao: string;
    tipo: boolean; 
}