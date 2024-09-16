import { RiDeleteBin5Fill } from "react-icons/ri";
import styles from "./TodoItem.module.css"
import { TodoItemsContext } from "../store/todo_items_store";
import { useContext } from "react";

function TodoItem({ todoName, todoDate }) {
  const {confirmDeleteTodo} = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className={"row "+styles.kgRow}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className={"btn btn-danger "+styles.kgButton} onClick={()=>confirmDeleteTodo(todoName,todoDate)}>
            <RiDeleteBin5Fill/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;







