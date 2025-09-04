import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  if (!tasks.length) {
    return <div className="card muted">Nenhuma tarefa ainda. Que tal criar a primeira?</div>;
  }

  return (
    <ul className="task-list">
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} />
      ))}
    </ul>
  );
};

export default TaskList;
