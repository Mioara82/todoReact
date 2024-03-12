import Todo from "./Todo";
import { useTodo } from "../contexts/ToDoContext";

const Todos = () => {
  const { todos } = useTodo();
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
