import { useState, useEffect } from "react";
import { listarFilmes } from "@/services/filmesService";
import Link from "next/link";
import styles from "./carrossel.module.css";
import Slider from "react-slick";

export default function ListarFilmes() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function Lfilmes() {
      try {
        const response = await listarFilmes();
<<<<<<< HEAD
=======
        console.log("Filmes recebidos:", response.data);
>>>>>>> teste
        setFilmes(response.data);
      } catch (error) {
        console.log("Erro ao listar filmes:", error);
      }
    }
    Lfilmes();
  }, []);

  const settings = {
    dots: true,
<<<<<<< HEAD
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
=======
    infinite: filmes.length >= 3,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: filmes.length > 3,
>>>>>>> teste
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className={styles.container}>
    <Slider {...settings}>
      {filmes.map((filme) => (
        <div key={filme.id} className={styles.card}>
          <Link href={`/filme/${filme.id}`}>
            <img
              src={filme.posterUrl}
              alt={filme.titulo}
              className={styles.poster}
            />
          </Link>
        </div>
      ))}
    </Slider>
    </div>
  );
}