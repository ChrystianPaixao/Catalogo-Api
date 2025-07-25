import express from 'express';
import FilmeController from "../controllers/filmeController.js";
const Router = express.Router();

Router.get("/", FilmeController.buscar);
Router.get("/:id",FilmeController.detalhes);
Router.post("/cadastrar", FilmeController.cadastrar);
Router.put("/atualizar/:id", FilmeController.atualizar);
Router.delete("/deletar/:id", FilmeController.deletar);


export default Router;