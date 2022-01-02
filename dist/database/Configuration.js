"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
var sequelize_1 = require("sequelize");
var env_1 = require("../env");
exports.Connection = new sequelize_1.Sequelize(env_1.Database.DB, env_1.Database.USER, env_1.Database.PASSWORD, {
    host: env_1.Database.HOST,
    dialect: 'mysql',
});
exports.default = exports.Connection;
