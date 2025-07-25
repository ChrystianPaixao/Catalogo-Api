import Filme from '../database/filmes.js'

class FilmeModel {

    async buscar(){
        return await Filme.findAll();
    }

    async detalhes(id){
        return await Filme.findByPk(id)
    }

    async cadastrar(filmeCad){
        filmeCad.data = new Date(filmeCad.data); 
        return await Filme.create(filmeCad);
    }

    async atualizar(filmecad, id) {
        filmecad.anoLancamento = new Date(filmecad.anoLancamento);
        await Filme.update(filmecad, { where: { id } });
        return await Filme.findByPk(id);
    }

    async deletar(id){
        return await Filme.destroy({where: {id}});
    }
    
}

export default new FilmeModel();