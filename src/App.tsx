import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  const onTodoHandler = (todoText: string) => {};

  return (
    <div>
      <NewTodo onAddTodo={onTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
