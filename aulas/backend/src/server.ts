import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';
import './database/connection';

import routes from './routes'; 
import errorHandler from './errors/handler';

const app = express ();
app.use(cors());
app.use(express.json()) //adiciona suporte ao app suporte a JSON
app.use(routes);
app.use('/uploads',express.static(path.join(__dirname,'..','uploads')))
app.use(errorHandler);
//configura rotas para criar orfanato (metodo post)


app.listen(3333); //escuta porta 3333   