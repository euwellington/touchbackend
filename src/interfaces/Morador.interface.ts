import { Model } from "sequelize/dist";

export interface Morador {
    id?: string;
    nome: string;
    nascimento: string;
    cpf: string;
    email: string;
    endereco: string;
    celular: string;
    telefone: string;
    obs: string;
}

export interface MoradorRequest extends Model<MoradorRequest, Morador> {
    id: string;
    nome: string;
    nascimento: string;
    cpf: string;
    email: string;
    endereco: string;
    celular: string;
    telefone: string;
    obs: string;
}