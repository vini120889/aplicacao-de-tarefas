import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { removeTask, editTask } = useContext(TaskContext);

  const toggleCompleted = () => {
    editTask({ ...task, completed: !task.completed });
  };

  return (
    <li className={task.completed ? "completed" : ""}>
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleCompleted}
        />
        <div>
          <span>{task.title}</span>
          {task.description && <div className="task-desc">{task.description}</div>}
          <div className="task-date">
            Criada em {new Date(task.createdAt).toLocaleString()}
          </div>
        </div>
      </div>
      <div className="task-right">
        <Link to={`/edit/${task.id}`}>
          <button>Editar</button>
        </Link>
        <button onClick={() => removeTask(task.id)}>Excluir</button>
      </div>
    </li>
  );
};

export default TaskItem;
