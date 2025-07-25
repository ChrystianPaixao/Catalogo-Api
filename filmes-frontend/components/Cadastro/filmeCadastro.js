import { useState } from "react";
import { cadastrarFilme } from "@/services/filmesService";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import styles from "./cadastro.module.css";
import Header from "../Header/header";

export default function FilmeCadastro() {
  const router = useRouter();

  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    genero: "",
    anoLancamento: "",
    posterUrl: "",
  });

  //recarrega o formulario dps do envio
  const Rec = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const Cadastro = async (e) => {
    e.preventDefault();
    try {
      await cadastrarFilme(form);
      toast.success("Filme cadastrado!", {
        autoClose: 1000,
      });
      setForm({
        titulo: "",
        descricao: "",
        genero: "",
        anoLancamento: new Date(form.anoLancamento).toISOString(),
        posterUrl: "",
      });
      setTimeout(() => {
        router.push("/");
      }, 1600);
    } catch (error) {
      toast.error("Erro no cadastro!", {
        autoClose: 1000,
      });
    }
  };

  return (
    <div className={styles.back}>
      <Header />

      <form onSubmit={Cadastro} className={styles.form}>
        <h1>Cadastro de filme</h1>
        <input
          id="titulo"
          name="titulo"
          type="text"
          value={form.titulo}
          onChange={Rec}
          required
          placeholder="Título do filme"
        />

        <textarea
          id="descricao"
          name="descricao"
          value={form.descricao}
          onChange={Rec}
          required
          placeholder="Sinopse ou detalhes"
        />

        <input
          id="genero"
          name="genero"
          type="text"
          value={form.genero}
          onChange={Rec}
          required
          placeholder="Ação, Drama, etc."
        />

        <input
          id="anoLancamento"
          name="anoLancamento"
          type="date"
          value={form.anoLancamento}
          onChange={Rec}
          required
          placeholder="Ex: 25/05/2024"
        />

        <input
          id="posterUrl"
          name="posterUrl"
          type="text"
          value={form.posterUrl}
          onChange={Rec}
          required
          placeholder="https://exemplo.com/poster.jpg"
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
