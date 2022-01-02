import { Dialect } from "sequelize/dist";

require('dotenv').config();

export const PORT = process.env.PORT || 5000;

export const Database = {
    HOST: process.env.HOST,
    DB: process.env.DB as string, 
    USER: process.env.USER as string,
    PASSWORD: process.env.PASSWORD,
    DIALECT: process.env.DIALECT as Dialect,
}