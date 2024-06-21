import React, { createContext, useState } from "react";

export const TarefaContext = createContext();

const TarefaContextProvider = (props) => {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (tarefa) => {
    tarefa.id = Date.now();
    setTarefas([...tarefas, tarefa]);
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  const editarTarefa = (tarefaEditada) => {
    const novasTarefas = tarefas.map((tarefa) =>
      tarefa.id === tarefaEditada.id ? { ...tarefaEditada } : tarefa
    );
    setTarefas(novasTarefas);
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
      value={{ tarefas, adicionarTarefa, removerTarefa, editarTarefa, toggleStatus }}
    >
      {props.children}
    </TarefaContext.Provider>
  );
};

export default TarefaContextProvider;
