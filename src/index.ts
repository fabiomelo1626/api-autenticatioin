import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/usersroute';

const app = express();

//configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//configuração das rotas
app.use(usersRoute);

app.get('/status', (req:Request, res:Response, next:NextFunction)=>{
    res.status(200).send({foo: 'show'})
});

app.listen(3000, ()=>{
    console.log("Api executando na porta 3000!")
});

console.log('executando!');
 