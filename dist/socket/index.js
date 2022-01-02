"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Socket = void 0;
var ws_1 = __importDefault(require("ws"));
var Socket = function (server) {
    var onError = function (ws, err) {
        console.error("onError: ".concat(err.message));
    };
    var onMessage = function (ws, data) {
        // console.log(`onMessage: ${data}`);
        ws.send("recebido!");
    };
    var onConnection = function (ws, req) {
        ws.on('message', function (data) { return onMessage(ws, data); });
        ws.on('error', function (error) { return onError(ws, error); });
        console.log("onConnection");
    };
    var wss = new ws_1.default.WebSocket.Server({
        server: server
    });
    wss.on('connection', onConnection);
    console.log("App Web Socket Server is running!");
    return {
        wss: wss,
        onMessage: onMessage
    };
};
exports.Socket = Socket;
