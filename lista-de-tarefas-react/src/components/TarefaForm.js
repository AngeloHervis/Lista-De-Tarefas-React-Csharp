import React, { useState, useContext } from "react";
import { TarefaContext } from "../context/TarefaContext";
import "../styles/TarefaForm.css";

const TarefaForm = () => {
  const { addTarefa } = useContext(TarefaContext);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataVencimento, setDataVencimento] = useState("");
  const [status, setStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tarefa = { titulo, descricao, dataVencimento, status };
    addTarefa(tarefa);
    setTitulo('');
    setDescricao('');
    setDataVencimento('');
    setStatus(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />

      <input
        type="date"
        value={dataVencimento}
        onChange={(e) => setDataVencimento(e.target.value)}
        required
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default TarefaForm;