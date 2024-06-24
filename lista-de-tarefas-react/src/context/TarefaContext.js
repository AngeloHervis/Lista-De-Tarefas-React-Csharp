import React, { createContext, useState } from "react";

export const TarefaContext = createContext();

const TarefaContextProvider = (props) => {
  const [tarefas, setTarefas] = useState([]);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  const adicionarTarefa = (tarefa) => {
    if (usuarioLogado) {
      tarefa.id = Date.now();
      setTarefas([...tarefas, tarefa]);
    } else {
      console.log("Usuário não Logado. Não é possível adicionar tarefa.");
    }
  };

  const removerTarefa = (id) => {
    if (usuarioLogado) {
      setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    } else {
      console.log("Usuário não Logado. Não é possível remover tarefa.");
    }
  };

  const editarTarefa = (tarefaEditada) => {
    if (usuarioLogado) {
      const novasTarefas = tarefas.map((tarefa) =>
        tarefa.id === tarefaEditada.id ? { ...tarefaEditada } : tarefa
      );
      setTarefas(novasTarefas);
    } else {
      console.log("Usuário não Logado. Não é possível editar tarefa.");
    }
  };

  const toggleStatus = (id) => {
    if (usuarioLogado) {
      setTarefas(
        tarefas.map((tarefa) =>
          tarefa.id === id ? { ...tarefa, status: !tarefa.status } : tarefa
        )
      );
    } else {
      console.log(
        "Usuário não Logado. Não é possível alterar status da tarefa."
      );
    }
  };

  const realizarLogin = async (credenciais) => {
    try {
      const response = await fetch("http://localhost:5272/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credenciais),
      });

      if (response.ok) {
        setUsuarioLogado(true);
      } else {
        throw new Error("Credenciais inválidas. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      throw new Error("Credenciais inválidas. Por favor, tente novamente.");
    }
  };

  const realizarLogout = () => {
    setUsuarioLogado(false);
    setTarefas([]);
  };

  return (
    <TarefaContext.Provider
      value={{
        tarefas,
        adicionarTarefa,
        removerTarefa,
        editarTarefa,
        toggleStatus,
        realizarLogin,
        realizarLogout,
        usuarioLogado,
        setUsuarioLogado
      }}
    >
      {props.children}
    </TarefaContext.Provider>
  );
};

export default TarefaContextProvider;
