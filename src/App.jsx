import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editTodo, setEditTodo] = useState(null);

  const handleSave = (title) => {
    if (!title.trim()) return;

    if (editTodo) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editTodo.id ? { ...todo, title } : todo
        )
      );
    } else {
      const newTodo = {
        id: Date.now(),
        title,
        completed: false,
      };
      setTodos((prev) => [newTodo, ...prev]);
    }

    setModalOpen(false);
    setEditTodo(null);
  };

  const handleEdit = (todo) => {
    setEditTodo(todo);
    setModalOpen(true);
  };

  const handleDelete = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));
  const handleToggle = (id) =>
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  return (
    <div className="page-bg">
      <main className="container">
        <header className="header">
          <h1 className="heading">My Todos</h1>
          <p className="sub">My Little Tasks</p>
        </header>

        <section className="controls">
          <button
            className="btn primary"
            onClick={() => {
              setModalOpen(true);
              setEditTodo(null);
            }}
          >
            + Create Todo
          </button>
        </section>

        <section className="list">
          {todos.length === 0 ? (
            <div className="empty">No todos yet — add your first one!</div>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onToggle={handleToggle}
              />
            ))
          )}
        </section>

        <Todos
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
          initialTitle={editTodo ? editTodo.title : ""}
        />
      </main>
    </div>
  );
};

export default App;
