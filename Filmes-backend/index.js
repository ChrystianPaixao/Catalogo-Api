import express from 'express'
import sequelize from './database/db.js'
import Router from './router/filmeRotas.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/filmes', Router);

try{
    await sequelize.sync();
    console.log("Tabelas criadas com sucesso!");
}catch(error){
    console.log("Deu ruim!", error);
}

app.listen(8000, (error)=>{
    if(error){
        console.log("Servido não subiu")
    }
    console.log("Servidor subiu! ")
})