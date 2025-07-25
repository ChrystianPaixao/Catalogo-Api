import filmeModel from '../models/filmeModel.js'

class FilmeController{

    async buscar(req,res){
        const row = await filmeModel.buscar();
        res.json(row);
    }

    async detalhes(req,res){
        const { id } = req.params;
        const row = await filmeModel.detalhes(id);
        res.json(row);
    }

    async cadastrar(req,res){
        console.log('Recebido do frontend:', req.body);
        const filmeCad = req.body;
        const row = await filmeModel.cadastrar(filmeCad);
        res.json(row);
    }

    async atualizar(req,res){
        const { id } = req.params;
        const filmeCad = req.body;
        const row = await filmeModel.atualizar(filmeCad, id);
        res.json(row);
    }

    async deletar(req,res){
        const { id } = req.params;
        const row = await filmeModel.deletar(id);
        res.json(row);
    }
    
}

export default new FilmeController();