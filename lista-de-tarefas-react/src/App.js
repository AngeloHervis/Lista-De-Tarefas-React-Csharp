// src/App.jsimport React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
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
            <Switch>
              <PrivateRoute exact path="/tarefas" component={TarefaList} />
              <PrivateRoute
                exact
                path="/adicionar-tarefa"
                component={TarefaForm}
              />
              <Route exact path="/login" component={Login} />
              <Route exact path="/cadastro" component={CadastroUsuario} />
              <Route exact path="/">
                {usuarioLogado ? (
                  <Redirect to="/tarefas" />
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </TarefaContextProvider>
  );
}

export default App;
