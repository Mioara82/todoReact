import { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import { uid } from "uid";
import { useLocalState } from "../../utils";

export const TodoContext = createContext();

export function useTodo() {
  const value = useContext(TodoContext);
  return value;
}

const TodoProvider = ({ children }) => {
  const { id } = useParams();
  const [todos, setTodos] = useLocalState("todos", []);
  console.log("context value", { todos });

  const addTodo = (value) => {
    const newTodo = {
      id: uid(),
      value,
      isCompleted: false,
      isEditable: false,
      priority: null,
      complexity: null,
      dueDate: null,
      subtask: [],
      tags: [],
      sort: null
    };
    setTodos([...todos, newTodo]);
  };

  const getTodo = (todo) => {
    return todos.find((t) => t.id === todo.id);
  };

  const removeTodo = (todo) => {
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  };

  const completeTodo = (todo) => {
    const newTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTodos(newTodos);
  };

  const editTodo = (todo) => {
    const newTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, isEditable: !t.isEditable } : t
    );
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        getTodo,
        completeTodo,
        removeTodo,
        editTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
