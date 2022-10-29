import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const capturarTitulo = (e) => setTitle(e.target.value);
  const capturarDescripcion = (e) => setDescription(e.target.value);
  const { createTask } = useContext(TaskContext);

  const guardar = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={guardar} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold  text-white mb-3">Crear Tarea</h1>
      <input className="bg-slate-300 p-3 w-full mb-2 "
        placeholder="escribir tarea"
        onChange={capturarTitulo}
        value={title}
        autoFocus
      ></input>
      <textarea className="bg-slate-300 p-3 w-full mb-2 "
        placeholder="Escribir descripcion"
        onChange={capturarDescripcion}
        value={description}
      ></textarea>
      <button className="bg-indigo-300 px-3 py-1 text-white">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
