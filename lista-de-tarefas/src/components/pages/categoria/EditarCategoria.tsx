import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const EditarCategoria = () => {
  const [nome, setNome] = useState("");

  const editarCategoria = async () => {
    try {
      const response = await axios.put("http://localhost:4000/categorias/1", {
        nome,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Editar Categoria</h1>
      <input
        type="text"
        placeholder="Nome da categoria"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={editarCategoria}>Editar</button>
      <Link to="/categorias">Voltar</Link>
    </div>
  );
};

export default EditarCategoria;
