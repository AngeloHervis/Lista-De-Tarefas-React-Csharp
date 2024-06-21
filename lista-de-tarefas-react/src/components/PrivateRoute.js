import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { TarefaContext } from "../context/TarefaContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { usuarioLogado } = useContext(TarefaContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        usuarioLogado ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
