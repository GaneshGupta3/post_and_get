import { useState } from "react"
import styles from "./AddTodo.module.css";

function AddTodo({onAddClick}) {
  const [todoName , setTodoName] = useState();
  const [todoDate , setTodoDate] = useState();
  return (
    <div className="container text-center">
      <div className={"row "+styles.kgRow}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" onChange={(event)=>{setTodoName(event.target.value)}} />
        </div>
        <div className="col-4">
          <input type="date" onChange={(event)=>{setTodoDate(event.target.value)}}/>
        </div>
        <div className="col-2">
          <button type="button" onClick={()=>{onAddClick(todoDate, todoName)}} className={"btn btn-success "+ styles.kgButton}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
