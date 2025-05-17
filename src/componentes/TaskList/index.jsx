import { useEffect, useState } from "react";
import { Task } from "../Task";

import "./styles.css";
import { AddTask } from "../AddTask";

export function TaskList() {
  const [tasks, setTasks] = useState(() => {
    const tasksDefault = [
      { id: 1, text: "Aprender React", done: false },
      { id: 2, text: "Aprender lógica", done: false },
      { id: 3, text: "Praticar CSS", done: true },
      { id: 4, text: "Aprender Componentização", done: false },
    ];

    // salva as tarefas ao iniciar
    const savedTasks = localStorage.getItem("tasks");
    // verifica se há algum dado corrompido
    try {
      if (savedTasks) return JSON.parse(savedTasks);
      return tasksDefault;
    } catch (error) {
      console.error("Dados inválidos no localStorage:", error);
    }
  });

  // filtros
  const [filter, setFilter] = useState(() => {
    const savedFilter = localStorage.getItem("taskFilter");

    if (savedFilter) {
      return savedFilter;
    }
    return "all";
  });

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

  // useEffect(() => {
  //   localStorage.setItem("taskFilter", filter);
  // }, [filter]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <section>
      <AddTask onAddTask={handleAddTask} />
      <div className="filters">
        <p className="tasks-rest">{filteredTask.length} tarefas restantes</p>
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Todas
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Ativas
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Concluídas
        </button>
        <button onClick={() => setTasks(tasks.filter((task) => !task.done))}>
          Remover Concluídas
        </button>
      </div>

      {/* // se não tiver tarefa, retornar uma mensagem */}
      {filteredTask.length === 0 && (
        <p>
          Nenhuma tarefa{" "}
          {filter === "all"
            ? "criada"
            : filter === "active"
            ? "ativa"
            : "concluída"}
        </p>
      )}

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
