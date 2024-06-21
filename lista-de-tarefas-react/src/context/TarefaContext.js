import React, { createContext, useState } from "react";

export const TarefaContext = createContext();

const TarefaContextProvider = (props) => {
  const [tarefas, setTarefas] = useState([]);

  const addTarefa = (tarefa) => {
    tarefa.id = Date.now();
    setTarefas([...tarefas, tarefa]);
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  const toggleStatus = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, status: !tarefa.status } : tarefa
      )
    );
  };

  return (
    <TarefaContext.Provider
      value={{ tarefas, addTarefa, removerTarefa, toggleStatus }}
    >
      {props.children}
    </TarefaContext.Provider>
  );
};

export default TarefaContextProvider;
