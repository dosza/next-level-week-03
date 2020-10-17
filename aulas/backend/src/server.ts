
import express from 'express';
import 'express-async-errors';
import './database/connection';
import routes from './routes'; 
import  errorHandler from './errors/handler';

const app = express ();

app.use(express.json()) //adiciona suporte ao app suporte a JSON
app.use(routes);
app.use(errorHandler);
//configura rotas para criar orfanato (metodo post)


app.listen(3333); //escuta porta 3333   