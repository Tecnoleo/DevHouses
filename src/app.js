
import express from 'express';
import  routes from './routes';
import path from 'path';
import moongose from 'mongoose';

class App{
    constructor(){
        this.server = express();
        moongose.connect('mongodb+srv://devhouse:jXwV7Mu2ArAhLlQg@devhouse.leyjq46.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}); 

        this.middlewares();
        this.routes();
    }

    
    middlewares(){
        this.server.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
        this.server.use(express.json());
    }
    
    routes(){
        this.server.use(routes);
    }
}

export default new App().server;