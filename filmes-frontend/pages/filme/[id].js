import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { buscarFilmePorId } from "@/services/filmesService";
import Delete from "@/components/deletar/deletarFilme";
import Link from "next/link";
import styles from "./detalhes.module.css"
import Header from "@/components/Header/header";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const [filmes, setFilmes] = useState(null);

  useEffect(() => {
    async function Lfilmes() {
      try {
        const response = await buscarFilmePorId(id);
        setFilmes(response.data);
      } catch (error) {
        console.log("Erro ao listar filmes:", error);
      }
    }
    Lfilmes();
  }, [id]);

  if (!filmes) return null;

  return (
    <>
    <Header/>
    <div className={styles.container}>
        <div className={styles.direita}>  
          <img
          className={styles.imagem}
          src={filmes.posterUrl}
          alt={`Cartaz de ${filmes.titulo}`}
        />
        </div>
      <div className={styles.esquerda}>
        <h1>{filmes.titulo}</h1>
        <h3>{filmes.descricao}</h3>
        <p>{filmes.genero}</p>
        <p>{new Date(filmes.anoLancamento).toLocaleDateString("pt-BR")}</p>
        <div className={styles.açao}>
        <Delete id={filmes.id} setFilmes={setFilmes}/>
        <Link href={`/filme/atualizar/${filmes.id}`}>
          <button className={styles.atualizar}>
             Editar
          </button>
        </Link>
        </div>
      </div>
      </div>
    </>
  );
}
