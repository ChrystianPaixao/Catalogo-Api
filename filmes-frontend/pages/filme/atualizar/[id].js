import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { buscarFilmePorId, atualizarFilme } from "@/services/filmesService";
import { toast } from "react-toastify";
import styles from "@/components/Cadastro/cadastro.module.css";
import Header from "@/components/Header/header";

export default function Atualizar() {
  //pega o id no url
  const router = useRouter();
  const { id } = router.query;

  const [form, setForm] = useState(null);

  useEffect(() => {
    if (!id) return;

    // faz a chamada do filme por id
    async function carregarFilme() {
      const response = await buscarFilmePorId(id);
      setForm(response.data);
    }

    carregarFilme();
  }, [id]);

  //atualiza de forma unitaria cada campo do formulario de filmes
  const Rec = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const atualizar = async (e) => {
    //cancela o evento do submte que atualiza a página
    e.preventDefault();
    try {
      await atualizarFilme(id, form);
      toast.success("Filme atualizado", {
        autoClose: 1000,
      });
      setTimeout(() => {
        router.push(`/filme/${id}`);
      }, 1200);
    } catch (error) {
      toast.error("Error", {
        autoClose: 1000,
      });
      console.error(error);
    }
  };
  //espera o banco de dados
  if (!form) return <p>Carregando formulário...</p>;

  return (
    <div className={styles.back}>
      <Header />
      <form onSubmit={atualizar} className={styles.form}>
        <h1>Atualizar cadastro</h1>
        <input name="titulo" value={form.titulo} onChange={Rec} required />
        <textarea
          name="descricao"
          value={form.descricao}
          onChange={Rec}
          required
        />
        <input name="genero" value={form.genero} onChange={Rec} required />
        <input
        type="date"
          name="anoLancamento"
          value={form.anoLancamento ? form.anoLancamento.split("T")[0] : ""}
          onChange={Rec}
          required
        />
        <input
          name="posterUrl"
          value={form.posterUrl}
          onChange={Rec}
          required
        />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}
