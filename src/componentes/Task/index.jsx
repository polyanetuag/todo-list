import "./styles.css";

export function Task({ task, quandoClicarNaTask }) {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.done}
        className="input-checkbox"
        onChange={() => {
          quandoClicarNaTask(task.id);
        }}
      />
      <p>{task.text}</p>
    </div>
  );
}
