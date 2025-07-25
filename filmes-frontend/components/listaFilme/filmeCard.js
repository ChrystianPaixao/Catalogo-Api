import styles from "./filmeCard.module.css";
import Link from "next/link";

export default function FilmeCard({ filme }) {
  return (
    <div className={styles.card}>
      <img src={filme.posterUrl} alt={filme.titulo} className={styles.image}  />
      <div className={styles.pr}>
        <h1 className={styles.title}>{filme.titulo}</h1>
        <p className={styles.genero}>{filme.genero}</p>
      </div>
      <Link href={`/filme/${filme.id}`} className={styles.button}>Ver mais</Link>
    </div>
  );
}
