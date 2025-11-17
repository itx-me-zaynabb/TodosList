import React, { useState, useEffect } from "react";

const Todos = ({ isOpen, onClose, onSave, initialTitle = "" }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (isOpen) setTitle(initialTitle);
  }, [isOpen, initialTitle]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{initialTitle ? "Edit Todo" : "Add Todo"}</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          placeholder="Enter todo title"
        />
        <div className="modal-actions">
          <button className="btn primary" onClick={() => onSave(title)}>
            Save
          </button>
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todos;
