import React, { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import TaskList from "../components/TaskList";

const Home = () => {
  const { tasks } = useContext(TaskContext);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all"); // all | open | done

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return tasks
      .filter((t) => {
        if (filter === "open") return !t.completed;
        if (filter === "done") return !!t.completed;
        return true;
      })
      .filter((t) => t.title.toLowerCase().includes(q) || (t.description || "").toLowerCase().includes(q))
      .sort((a, b) => b.createdAt - a.createdAt);
  }, [tasks, query, filter]);

  return (
    <>
      <div className="toolbar card">
        <input
          className="input"
          placeholder="Buscar tarefa..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select className="input" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Todas</option>
          <option value="open">Abertas</option>
          <option value="done">Concluídas</option>
        </select>
        <Link to="/add-task" className="btn primary">+ Nova tarefa</Link>
      </div>

      <TaskList tasks={filtered} />
    </>
  );
};

export default Home;
