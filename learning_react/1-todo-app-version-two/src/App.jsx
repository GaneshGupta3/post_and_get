import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useReducer } from "react";

import "./App.css";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/todo_items_store";



function App() {
  

  return (
    <TodoItemsContextProvider>
      {/*we pass the state elements to the context provider so that we can repaint on the change of it*/}
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems></TodoItems>
      </center>
    </ TodoItemsContextProvider>
  );
}

export default App;
