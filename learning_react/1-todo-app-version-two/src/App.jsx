import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";

function App() {
  let todoItems = [
    {
      todoName: "Buy Milk",
      todoDate: "4/10/2023"
    },
    {
      todoName: "Go to College",
      todoDate: "4/10/2023"
    }
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
