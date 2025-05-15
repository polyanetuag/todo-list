import { useState } from "react";
import { Task } from "../Task";

import "./styles.css";
import { AddTask } from "../AddTask";

export function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Aprender React", done: false },
    { id: 2, text: "Aprender logica", done: false },
    { id: 3, text: "Praticar CSS", done: true },
    { id: 4, text: "Aprender Componentização", done: false },
  ]);

  // filtros
  const [filter, setFilter] = useState("all"); // tipos all, active e completed

  // filtrando a lista de tarfeas
  const filteredTask = tasks.filter((task) => {
    if (filter === "active") return !task.done;
    if (filter === "completed") return task.done;
    return true;
  });

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const handleAddTask = (taskText) => {
    setTasks([
      {
        id: crypto.randomUUID(),
        text: taskText,
        done: false,
      },
      ...tasks,
    ]);
  };

  return (
    <section>
      <AddTask onAddTask={handleAddTask} />
      <div className="filters">
        <button onClick={() => setFilter("all")}>Todas</button>
        <button className="active" onClick={() => setFilter("active")}>
          Ativas
        </button>
        <button onClick={() => setFilter("completed")}>Concluídas</button>
        <p>{filteredTask.length} tarefas restantes</p>
      </div>
      <div className="tasks-rest"></div>
      <ul className="tasks-list">
        {filteredTask.map((task, index) => {
          return (
            <li key={index}>
              <Task task={task} quandoClicarNaTask={toggleTask} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
