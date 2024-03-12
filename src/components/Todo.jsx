import { useTodo } from "../contexts/ToDoContext";

function Todo({ todo }) {
  const { completeTodo, editTodo, getTodo } = useTodo();
  todo = getTodo(todo);

  return (
    <div style={{ border: "1px solid pink" }}>
      <div>
        <button></button>
        <h5>{todo.value}</h5>
        <button
          onClick={() => {
            editTodo;
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            completeTodo;
          }}
        >
          Complete
        </button>
      </div>
      <div>
        <h5>Due date</h5>
        <h5>Priority</h5>
        <h5>Complexity</h5>
      </div>
    </div>
  );
}

export default Todo;
