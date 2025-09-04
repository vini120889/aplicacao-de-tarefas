import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { useHistory } from "react-router-dom";

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
      createdAt: new Date().getTime(), // timestamp correto
    };

    addTask(newTask);
    history.push("/");
  };

  return (
    <div>
      <h2>Adicionar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título da tarefa..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Descrição (opcional)..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
        />
        <button type="submit" className="btn primary">
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default AddTask;
