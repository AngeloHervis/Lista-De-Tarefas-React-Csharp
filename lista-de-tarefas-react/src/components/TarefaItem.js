import React, { useContext } from "react";
import { TarefaContext } from "../context/TarefaContext";
import "../styles/TarefaItem.css";

const TarefaItem = ({ tarefa }) => {
  const { removerTarefa, toggleStatus } = useContext(TarefaContext);

  return (
    <div>
      <h3>{tarefa.titulo}</h3>
      <p>{tarefa.descricao}</p>
      <p>Data de vencimento: {tarefa.dataVencimento}</p>
      <label>
        <input
          type="checkbox"
          checked={tarefa.status}
          onChange={() => toggleStatus(tarefa.id)}
        />
        Concluída
      </label>
      <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
    </div>
  );
};

export default TarefaItem;