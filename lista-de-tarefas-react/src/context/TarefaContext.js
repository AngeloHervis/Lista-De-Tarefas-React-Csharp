import React, { createContext, useState } from "react";

export const TarefaContext = createContext();

const TarefaContextProvider = (props) => {
  const [tarefas, setTarefas] = useState([]);
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);

  const adicionarTarefa = (tarefa) => {
    if (usuarioAutenticado) {
      tarefa.id = Date.now();
      setTarefas([...tarefas, tarefa]);
    } else {
      console.log("Usuário não autenticado. Não é possível adicionar tarefa.");
    }
  };

  const removerTarefa = (id) => {
    if (usuarioAutenticado) {
      setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    } else {
      console.log("Usuário não autenticado. Não é possível remover tarefa.");
    }
  };

  const editarTarefa = (tarefaEditada) => {
    if (usuarioAutenticado) {
      const novasTarefas = tarefas.map((tarefa) =>
        tarefa.id === tarefaEditada.id ? { ...tarefaEditada } : tarefa
      );
      setTarefas(novasTarefas);
    } else {
      console.log("Usuário não autenticado. Não é possível editar tarefa.");
    }
  };

  const toggleStatus = (id) => {
    if (usuarioAutenticado) {
      setTarefas(
        tarefas.map((tarefa) =>
          tarefa.id === id ? { ...tarefa, status: !tarefa.status } : tarefa
        )
      );
    } else {
      console.log(
        "Usuário não autenticado. Não é possível alterar status da tarefa."
      );
    }
  };

  const realizarLogin = async (credenciais) => {
    try {
      // Chamar API para realizar o login
      // Exemplo: const response = await fetch('http://localhost:5000/login', {...});

      // Simular login bem-sucedido (usuário fictício)
      setUsuarioAutenticado(true);
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      throw new Error("Credenciais inválidas. Por favor, tente novamente.");
    }
  };

  const realizarLogout = () => {
    setUsuarioAutenticado(false);
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
        usuarioAutenticado,
      }}
    >
      {props.children}
    </TarefaContext.Provider>
  );
};

export default TarefaContextProvider;
