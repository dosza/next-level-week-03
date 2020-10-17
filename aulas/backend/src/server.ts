
import express from 'express';
import './database/connection';
import routes from './routes'; 

const app = express ();

app.use(express.json()) //adiciona suporte ao app suporte a JSON
app.use(routes);

//configura rotas para criar orfanato (metodo post)


app.listen(3333); //escuta porta 3333   