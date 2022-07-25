import express from 'express';
import statusRoute from './routes/statusroute';
import usersRoute from './routes/usersroute';
import userRouter from './routes/userroute';

const app = express();

//configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//configuração das rotas
app.use(usersRoute);
app.use(statusRoute);
app.use(userRouter);


app.listen(3000, ()=>{
    console.log("Api executando na porta 3000!")
});



console.log('executando!');
 