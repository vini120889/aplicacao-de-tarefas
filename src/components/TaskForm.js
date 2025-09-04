import React, { useEffect, useState } from "react";

const empty = { title: "", description: "" };

const TaskForm = ({ initialTask, onSubmit, submitLabel = "Salvar" }) => {
  const [form, setForm] = useState(empty);

  useEffect(() => {
    if (initialTask) {
      setForm({
        title: initialTask.title || "",
        description: initialTask.description || "",
      });
    } else {
      setForm(empty);
    }
  }, [initialTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    onSubmit(form);
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <label className="label" htmlFor="title">Título</label>
      <input
        id="title"
        name="title"
        className="input"
        placeholder="Ex.: Estudar React"
        value={form.title}
        onChange={handleChange}
      />

      <label className="label" htmlFor="description">Descrição</label>
      <textarea
        id="description"
        name="description"
        className="textarea"
        placeholder="Detalhes da tarefa (opcional)"
        value={form.description}
        onChange={handleChange}
        rows={4}
      />

      <div className="actions">
        <button type="submit" className="btn primary">{submitLabel}</button>
      </div>
    </form>
  );
};

export default TaskForm;
