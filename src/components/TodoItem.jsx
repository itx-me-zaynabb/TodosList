import React from "react";

const TodoItem = ({ todo, onEdit, onDelete, onToggle }) => {
  return (
    <div className={`todo-item ${todo.completed ? "done" : ""}`}>
      <label className="check">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className="custom-check" />
      </label>

      <div className="todo-body">
        <span className="todo-title">{todo.title}</span>
        <div className="todo-actions">
          <button className="btn small" onClick={() => onEdit(todo)}>
            Edit
          </button>
          <button
            className="btn small danger"
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
