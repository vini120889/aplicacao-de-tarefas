import React, { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Carregar do localStorage ao montar
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(stored);
    } catch {
      setTasks([]);
    }
  }, []);

  // Salvar no localStorage quando tasks mudar
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const editTask = (updated) => {
    setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed, updatedAt: Date.now() } : t
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, editTask, toggleComplete }}
    >
      {children}
    </TaskContext.Provider>
  );
};
