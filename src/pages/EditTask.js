import React, { useContext, useState, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import { useParams, useHistory } from "react-router-dom";

const EditTask = () => {
  const { tasks, editTask } = useContext(TaskContext);
  const { id } = useParams();
  const history = useHistory();

  const taskToEdit = tasks.find((task) => task.id === Number(id));
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const updatedTask = { ...taskToEdit, title };
    editTask(updatedTask);
    history.push("/");
  };

  if (!taskToEdit) {
    return <p>Tarefa não encontrada!</p>;
  }

  return (
    <div>
      <h2>Editar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Editar tarefa..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditTask;
