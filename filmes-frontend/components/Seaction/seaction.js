import styles from "@/components/Seaction/seaction.module.css";

export default function Seaction() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <h2>Melhor catálogo de filmes</h2>
        <p>Mussum Ipsum, cacilds vidis litro abertis.
             Per aumento de cachacis, eu reclamis. Nec orci ornare</p>
        <button className={styles.button1}>ver mais</button>
        <button className={styles.button2}>cadastrar</button>
      </div>
    </section>
  );
}
