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
      return null;
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

  function deleteTodo(todoName, todoDate) {
    let deleteData = {
      todoName: todoName,
      todoDate: todoDate,
    };
    console.log(deleteData);
    const deletedItem = todoItems.find(
      (item) => item.todoDate === todoDate && item.todoName === todoName
    );
    console.log(deletedItem);
    if(deletedItem===null){
      return;
    }
    setTodoItems(()=>
      todoItems.filter(
        (item) => item.todoDate !== todoDate || item.todoName != todoName
      )
    );
  }

  function confirmDeleteTodo(todoName,todoDate){
    const confirmation = confirm(`do you want to delete todo with name:${todoName} and on date : ${todoDate}`);
    console.log(confirmation);
    if(confirmation) {
      deleteTodo(todoName,todoDate);
    }
  }

  return (
    <TodoItemsContext.Provider
      value={{ todoItems, addTodo, confirmDeleteTodo }}
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
