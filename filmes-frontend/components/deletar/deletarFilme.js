import { useRouter } from "next/router";
import { deletarFilme } from "@/services/filmesService";
import styles from "@/pages/filme/detalhes.module.css"
import { toast } from "react-toastify";

export default function Delete({ id }) {
  const router = useRouter();

  const deletar = async () => {
    try {
      await deletarFilme(id);
      toast.success('Filme foi de vasco',{
        autoClose: 1000,
      })
      setTimeout(() => {
        router.push("/filmes");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className={styles.delete}
      onClick={deletar}>
       Deletar
    </button>
  );
}
