import { useState, useEffect } from "react";
import { listarFilmes } from "@/services/filmesService";
import { toast } from "react-toastify";
import styles from "./filmeCard.module.css"
import Header from "../Header/header";
import FilmeCard from "./filmeCard";


export default function ListarFilmes() {
  const [filmes, setFilmes] = useState([]);

  const toastId = "carregando...";

  useEffect(() => {
    async function Lfilmes() {
      if (!toast.isActive(toastId)) {
        toast.loading("Carregando...", { toastId });
      }
      try {
        const response = await listarFilmes();
        setFilmes(response.data);

        toast.update(toastId, {
          render: "Produtos carregados!",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
      } catch (error) {
        toast.update(toastId, {
          render: "Erro ao carregar!",
          type: "error",
          isLoading: false,
          autoClose: 1000,
        });
      }
    }
    Lfilmes();
  }, []);

  return (
    <>
    <Header/>
    <div className={styles.caixa}>
      <h1 className={styles.hy}>Lista de filmes</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
      {filmes.map((filme) => (
           <FilmeCard key={filme.id} filme={filme}/> 
      ))}
      </div>
    </div>
    </>
  );
}