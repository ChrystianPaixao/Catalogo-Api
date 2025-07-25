import Link from "next/link";
import styles from "@/components/Header/header.module.css";

export default function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.seila}>
                <Link href="/"><img src="/logo.png" className={styles.img}></img></Link>
                <nav className={styles.nav}>
                    <Link href="/">Home</Link>
                    <Link href="/filmes">Movies</Link>
                    <Link href="/">Series</Link>
                    <Link href="/cadastro">Adicionar</Link>
                </nav>
            </div>
            <nav >
                <input className={styles.text} type="search" placeholder="search"></input>
            </nav>          
        </header>
    );
}