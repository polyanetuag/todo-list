import "./styles.css";

export function Task({ task }) {
  return (
    <div className="task">
      <input type="checkbox" checked={task.done} className="input-checkbox" />
      <p>{task.text}</p>
    </div>
  );
}
