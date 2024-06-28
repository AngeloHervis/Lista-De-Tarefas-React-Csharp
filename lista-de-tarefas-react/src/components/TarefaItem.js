import React, { useContext, useState } from "react";
import { TarefaContext } from "../context/TarefaContext";
import "../styles/TarefaItem.css";

const TarefaItem = ({ tarefa }) => {
  const { removeTarefa, toggleStatus, editarTarefa } =
    useContext(TarefaContext);
  const [editando, setEditando] = useState(false);
  const [titulo, setTitulo] = useState(tarefa.titulo);
  const [descricao, setDescricao] = useState(tarefa.descricao);
  const [dataVencimento, setDataVencimento] = useState(tarefa.dataVencimento);
  const [status, setStatus] = useState(tarefa.status);

  const handleToggleEdit = () => {
    setEditando(!editando);
  };

  const handleCancelEdit = () => {
    setEditando(false);
    setTitulo(tarefa.titulo);
    setDescricao(tarefa.descricao);
    setDataVencimento(tarefa.dataVencimento);
    setStatus(tarefa.status);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    const tarefaEditada = {
      id: tarefa.id,
      titulo,
      descricao,
      dataVencimento,
      status,
    };
    editarTarefa(tarefaEditada);
    setEditando(false);
  };

  const handleChangeStatus = () => {
    toggleStatus(tarefa.id);
  };

  return (
    <div className="tarefa-item">
      {!editando ? (
        <>
          <h3>{tarefa.titulo}</h3>
          <p>{tarefa.descricao}</p>
          <p>Data de Vencimento: {tarefa.dataVencimento}</p>
          <label>
            <input
              type="checkbox"
              checked={tarefa.status}
              onChange={handleChangeStatus}
            />
            Concluída
          </label>
          <button onClick={handleToggleEdit}>Editar</button>
          <button onClick={() => removeTarefa(tarefa.id)}>Excluir</button>
        </>
      ) : (
        <form onSubmit={handleSubmitEdit}>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <input
            type="date"
            value={dataVencimento}
            onChange={(e) => setDataVencimento(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={status}
              onChange={(e) => setStatus(e.target.checked)}
            />
            Concluída
          </label>
          <button type="submit">Salvar</button>
          <button type="button" onClick={handleCancelEdit}>
            Cancelar
          </button>
        </form>
      )}
    </div>
  );
};

export default TarefaItem;
