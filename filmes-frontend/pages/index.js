import ListarFilmes from "@/components/carrosel/carrossel";
import Header from "@/components/Header/header.js";
import Seaction from "@/components/Seaction/seaction.js";
import styles from "@/styles/index.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.banner_header}>
        <Header />
        <Seaction />
      </div>
        <ListarFilmes/>
    </div>
  );
}
