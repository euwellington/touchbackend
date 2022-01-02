import express from 'express';
import { router } from './routes/Routes';
import cors from 'cors';
import { Connection } from './database/Configuration';
import { _Morador } from './models/Morador/Morador.model';
import { _Acionamento } from './models/Acionamentos/Acionamento.model';
import { _Evento } from './models/Evento/Evento.model';
import { _Temporizador } from './models/Temporizador/Temporizador.model';
import { PORT } from './env';
import http from 'http';
import Socket from './controllers/Socket';
import { IPS } from './services/cors';


const app = express();
const httpServer = http.createServer(app);
app.use(express.static(__dirname + '/../public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());  
app.use(router);

let ALLOWED_ORIGINS = [
    'http://192.168.1.107:5000',
    'http://192.168.1.106:5000',
    'https://touchbackend.herokuapp.com'
]
app.use((req, res, next) => {
    let origin: any = req.headers.origin;
    let theOrigin = (ALLOWED_ORIGINS.indexOf(origin) >= 0) ? origin : ALLOWED_ORIGINS[0];
    res.header("Access-Control-Allow-Origin", theOrigin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
})
// CONEXÃO COM SOCKET SERVER
Socket.connectServer(httpServer);

httpServer.listen( PORT, async () => {
    console.log('conectando com o banco...')
    try {
        await Connection.authenticate();
        console.log('Conexão com o banco estabelecida');
    } catch(e) {
        console.log(e);
    }
});
