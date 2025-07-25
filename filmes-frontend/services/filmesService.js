import api from './api';

export const listarFilmes = () => api.get('/');
export const buscarFilmePorId = (id) => api.get(`/${id}`);
export const cadastrarFilme = (dados) => api.post('/cadastrar', dados);
export const atualizarFilme = (id, dados) => api.put(`/atualizar/${id}`, dados);
export const deletarFilme = (id) => api.delete(`/deletar/${id}`);
