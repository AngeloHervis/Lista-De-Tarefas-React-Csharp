import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5272/api",
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

export const realizarLogin = async (credenciais) => {
  const response = await api.post("/login", credenciais);
  return response.data;
}

export const realizarCadastro = async (usuario) => {
  const response = await api.post("/usuarios", usuario);
  return response.data;
}

export const login = async (credentials) => {
  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Email ou senha inválidos.");
  }
};