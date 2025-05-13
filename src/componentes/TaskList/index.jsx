import { useState } from "react";
import { Task } from "../Task";

import "./styles.css";

const initialTask = [
  { id: 1, text: "Aprender React", done: false },
  { id: 2, text: "Aprender logica", done: false },
  { id: 3, text: "Praticar CSS", done: true },
  { id: 4, text: "Aprender Componentização", done: false },
];

export function TaskList() {
  const [tasks, setTasks] = useState(initialTask);

  return (
    <ul className="tasks-list">
      {tasks.map((task, index) => {
        return (
          <li key={index}>
            <Task task={task} />
          </li>
        );
      })}
    </ul>
  );
}
