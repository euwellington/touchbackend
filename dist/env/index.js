"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.PORT = void 0;
require('dotenv').config();
exports.PORT = process.env.PORT || 5000;
exports.Database = {
    HOST: process.env.HOST,
    DB: process.env.DB,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DIALECT: process.env.DIALECT,
};
