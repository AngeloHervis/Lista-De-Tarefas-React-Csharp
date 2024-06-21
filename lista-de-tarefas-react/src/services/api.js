import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const obterTarefas = async () => {
  const response = await api.get("/tarefas");
  return response.data;
};

export const adicionarTarefa = async (tarefa) => {
  const response = await api.post("/tarefas", tarefa);
  return response.data;
};

export const atualizarTarefa = async (tarefa) => {
  const response = await api.put(`/tarefas/${tarefa.id}`, tarefa);
  return response.data;
};

export const removerTarefa = async (id) => {
  await api.delete(`/tarefas/${id}`);
};
