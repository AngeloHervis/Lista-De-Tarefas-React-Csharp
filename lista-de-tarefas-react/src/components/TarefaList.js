import React, { useContext } from "react";
import { TarefaContext } from "../context/TarefaContext";
import TarefaItem from "./TarefaItem";
import "../styles/TarefaList.css";

const TarefaList = () => {
  const { tarefas } = useContext(TarefaContext);

  return (
    <div>
      <h2>Tarefas a realizar</h2>
      {tarefas
        .filter((tarefa) => !tarefa.status)
        .map((tarefa) => (
          <TarefaItem key={tarefa.id} tarefa={tarefa} />
        ))}
      <h2>Tarefas concluídas</h2>
      {tarefas
        .filter((tarefa) => tarefa.status)
        .map((tarefa) => (
          <TarefaItem key={tarefa.id} tarefa={tarefa} />
        ))}
    </div>
  );
};

export default TarefaList;