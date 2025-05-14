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
      <ul className="tasks-list">
        {tasks.map((task, index) => {
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
