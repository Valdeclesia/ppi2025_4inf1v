import { useState } from "react";
import styles from "./LuckyNumber.module.css";

export function LuckyNumber() {
  const [sorteados, setSorteados] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [numeroAtual, setNumeroAtual] = useState(null);

  function sortearNumero() {
    const novoNumero = Math.floor(Math.random() * 30) + 1;

    if (sorteados.includes(novoNumero)) {
      setMensagem(`💬 O gato ${novoNumero} já foi sorteado! 🐾`);
    } else {
      setSorteados([...sorteados, novoNumero]);
      setNumeroAtual(novoNumero);
      setMensagem(`🎉gato ${novoNumero} sorteado com sucesso! 🐱`);
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Quantidade de Gatitos!!! </h2>
       <h2 className={styles.title}>🐱🐱</h2>
      {numeroAtual !== null && <div className={styles.number}>{numeroAtual}</div>}
      <button onClick={sortearNumero} className={styles.button}>
        Sortear número
      </button>
      {mensagem && <p className={styles.message}>{mensagem}</p>}
    </div>
  );
}