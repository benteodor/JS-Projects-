const Plan = ({ task }) => {
  return (
    <div className="plan">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <small>{task.date}</small>
      <div>
        <span className="material-symbols-outlined">edit</span>
        <span className="material-symbols-outlined">delete</span>
      </div>
    </div>
  );
};

export default Plan;
