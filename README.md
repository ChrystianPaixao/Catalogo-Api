<<<<<<< HEAD
# Catalogo-de-Filmes
=======
#  Catálogo de Filmes

Interface web desenvolvida em **React.js (Next.js)** para exibir filmes em um carrossel animado. Os dados dos filmes são carregados via API, com suporte a navegação para páginas individuais de cada filme.

##  Funcionalidades

- Listagem dinâmica de filmes com dados vindos do backend
- Carrossel responsivo com rotação automática
- Redirecionamento para página de detalhes do filme
- Página para Cadastro de filme
- Página de atualização
- Botão de deletar Filme

##  Tecnologias utilizadas no Frontend

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [React Slick](https://react-slick.neostack.com/) (carrossel)
- [Axios](https://axios-http.com/) (para chamadas HTTP)
- [Reacttoastify](https://fkhadra.github.io/react-toastify/introduction)

## Tecnologias utilizadas Backend 

- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [dotenv](https://github.com/motdotla/dotenv)
- [cors](https://github.com/expressjs/cors)
- [nodemon](https://nodemon.io/)

##  Integração com Backend

A interface consome os dados da API através do serviço `listarFilmes`, que realiza uma requisição para o backend (`filmes-backend`). Certifique-se de que o servidor esteja ativo antes de rodar o frontend.

##  Como rodar localmente

```bash
cd Filmes-backend
npm install
npm start 

cd filmes-frontend
npm install
npm run dev

⚠️ Certifique-se de configurar corretamente o arquivo .env com as credenciais do MySQL.
>>>>>>> teste
