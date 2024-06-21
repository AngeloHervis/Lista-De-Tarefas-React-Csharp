import React from "react";
import Header from "./components/Header.js";
import TarefaList from "./components/TarefaList.js";
import TarefaForm from "./components/TarefaForm.js";
import Footer from "./components/Footer";
import TarefaContextProvider from "./context/TarefaContext.js";
import "./styles/App.css";

function App() {
  return (
    <TarefaContextProvider>
      <div className="App">
        <Header />
        <main>
          <TarefaForm />
          <TarefaList />
        </main>
        <Footer />
      </div>
    </TarefaContextProvider>
  );
}

export default App;