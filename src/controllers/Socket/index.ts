import { Server } from 'socket.io';
import http from 'http';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { Client } from '../../interfaces/Socket';
import { Acionamento } from '../../interfaces/Acionamento.interface';


class Socket {

    connection: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> = new Server();
    socket: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> = new Server();
    clients: any[] = [];

    connectServer(server: http.Server) {
        let connection = new Server(server, { path: '/socket.io' });
        this.connection = connection;
        connection.on('connection', (_client: any) => {
            console.log(`CLIENT ID: ${_client.id}`)
            this.clients.push(_client);
            _client.on('msg', (msg: any) => {
                for(let client of this.clients) {
                    client.emit('msg', msg);
                }
            });

            this.connection.on('disconnect', () => {
                console.log('user disconected');
                var i = this.clients.indexOf(_client);
                this.clients.splice(i, 1);
            })

        })
    }

    enviarEvento(evento: Acionamento) {
        if(this.connection) {
            for(let client of this.clients) {
                client.emit('evento', evento);
            }
        }
    }

    // enviarEvento(id: string) {
    //     this.connection.on('connection', (_client: any) => {
    //         _client.on('evento', (evento: any) => {
    //             for(let client of this.clients) {
    //                 client.emit('msg', evento);
    //             }
    //         })
    //     })
    // }

    log(client: any) {
        console.log(`CLIENT ID: ${client.id}`);
    }

}

export default new Socket();