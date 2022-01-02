import { Sequelize, Dialect } from 'sequelize';
import { Database } from '../env';

export const Connection = new Sequelize(Database.DB, Database.USER, Database.PASSWORD, { 
    host: Database.HOST,
    dialect: 'mysql' as Dialect,
}); 

export default Connection;