import { useState } from "react";
import "./styles.css";

import { FiPlusCircle } from "react-icons/fi";

export function AddTask({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  // função para adicionar uma nova tarefa
  const handleSubmit = (event) => {
    event.preventDefault();

    // validar para adicionar uma tarefa somente se o campo não estiver vazio
    if (taskText.trim() === "") {
      return;
    }
    onAddTask(taskText);
    console.log(taskText);
    setTaskText("");
  };

  return (
    <form className="form-add-task" onSubmit={handleSubmit}>
      <input
        className="input-new-task"
        type="text"
        placeholder="Nova tarefa..."
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
      />
      <button className="button-add-task" type="submit">
        Adicionar <FiPlusCircle />
      </button>
    </form>
  );
}
