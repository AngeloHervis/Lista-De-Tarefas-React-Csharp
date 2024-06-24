import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { TarefaContext } from "../context/TarefaContext";

const PrivateRoute = ({ children }) => {
  const { usuarioLogado } = useContext(TarefaContext);
  return usuarioLogado ? children : <Navigate to="/tarefas" />;
};

export default PrivateRoute;
