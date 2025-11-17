// todos.js

export function createTodo(title) {
  return {
    id: Date.now(),
    title,
    completed: false,
  };
}
