import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react"; 

import "./App.css";

function App() {
  

  const [todoItems , setTodoItems] = useState([
    {
      todoName: "Buy Milk",
      todoDate: "4/10/2023"
    },
    {
      todoName: "Go to College",
      todoDate: "4/10/2023"
    }
  ]);

  function formatDate(date){
    let newDate = new Date(date);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return day + "/" + month + "/" + year;
  }
  
  function addTodo(todoDate , todoName){
    console.log(todoName , todoDate);
    let newData = {
      todoName : todoName,
      todoDate : formatDate(todoDate)
    }
    setTodoItems([...todoItems , newData]);
  }

  function deleteTodo(todoDate,todoName){
    let deleteData = {
      todoName : todoName,
      todoDate : todoDate
    }
    console.log(deleteData);
    setTodoItems(todoItems.filter((item) => item.todoDate !== todoDate || item.todoName!=todoName));
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onAddClick = {addTodo} />
      <TodoItems todoItems={todoItems} onDelete={deleteTodo}></TodoItems>
    </center>
  );
}

export default App;
