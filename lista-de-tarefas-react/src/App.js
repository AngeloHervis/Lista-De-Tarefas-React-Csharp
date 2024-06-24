import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import TarefaList from "./components/TarefaList";
import TarefaForm from "./components/TarefaForm";
import Footer from "./components/Footer";
import Login from "./components/Login";
import CadastroUsuario from "./components/CadastroUsuario";
import PrivateRoute from "./components/PrivateRoute";
import TarefaContextProvider, { TarefaContext } from "./context/TarefaContext";
import "./styles/App.css";

function App() {
  const { usuarioLogado } = useContext(TarefaContext);

  return (
    <TarefaContextProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <PrivateRoute exact path="/tarefas" component={TarefaList} />
              <PrivateRoute
                exact
                path="/adicionar-tarefa"
                component={TarefaForm}
              />
              <Router exact path="/login" component={Login} />
              <Router exact path="/cadastro" component={CadastroUsuario} />
              <Router exact path="/">
                {usuarioLogado ? (
                  <Navigate to="/tarefas" />
                ) : (
                  <Navigate to="/login" />
                )}
              </Router>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TarefaContextProvider>
  );
}

export default App;
