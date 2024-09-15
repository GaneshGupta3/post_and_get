import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

import "./App.css";
import { TodoItemsContext } from "./store/todo_items_store";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      todoName: "Buy Milk",
      todoDate: "4/10/2023",
    },
    {
      todoName: "Go to College",
      todoDate: "4/10/2023",
    },
  ]);

  function formatDate(date) {
    let newDate = new Date(date);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return day + "/" + month + "/" + year;
  }

  /*function addTodo(todoDate , todoName){
    console.log(todoName , todoDate);
    if(todoDate==null || todoName==null){
      return ;
    }
    else{
      let newData = {
        todoName : todoName,
        todoDate : formatDate(todoDate)
      }
      setTodoItems([...todoItems , newData]);
    }
  }*/

  function addTodo(todoName, todoDate) {
    console.log(todoName, todoDate);
    if (todoDate == null || todoName == null) {
      return;
    } else {
      setTodoItems((currVal) => {
        return [
          ...currVal,
          {
            todoName: todoName,
            todoDate: formatDate(todoDate),
          },
        ]; //we have to return it otherwise it will give error and using this because of async nature of react
      });
    }
  }

  function deleteTodo(todoDate, todoName) {
    let deleteData = {
      todoName: todoName,
      todoDate: todoDate,
    };
    console.log(deleteData);
    setTodoItems(
      todoItems.filter(
        (item) => item.todoDate !== todoDate || item.todoName != todoName
      )
    );
  }

  return (
    <TodoItemsContext.Provider
      value={{ todoItems, addTodo, deleteTodo }}
    >
      
      {/*we pass the state elements to the context provider so that we can repaint on the change of it*/}
      <center className="todo-container">
        <AppName />
        <AddTodo onAddClick={addTodo} />
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
