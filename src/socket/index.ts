import ws from 'ws';

interface SendWS {
    send: any;
}

export const Socket = (server: any) => {

    const onError = (ws: any, err: any) => {
        console.error(`onError: ${err.message}`);
    }

    const onMessage = (ws: any, data: any) => {
        // console.log(`onMessage: ${data}`);
        ws.send(`recebido!`);
    }

    const onConnection = (ws: any, req: any) => {
        ws.on('message', (data: any) => onMessage(ws, data));
        ws.on('error', (error: any) => onError(ws, error));
        console.log(`onConnection`);
    }

    const wss = new ws.WebSocket.Server({
        server
    });

    wss.on('connection', onConnection);

    console.log(`App Web Socket Server is running!`);
    return {
        wss,
        onMessage
    };
}