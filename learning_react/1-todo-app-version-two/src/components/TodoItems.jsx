import { useContext } from "react";
import TodoItem from "./TodoItem"
import { TodoItemsContext } from "../store/todo_items_store";
function TodoItems() {

  const {todoItems} = useContext(TodoItemsContext);

  if (todoItems.length !== 0) {
    return (
      <>
        {todoItems.map((item, index) => (
          <TodoItem key={item.todoName + item.todoDate} todoName={item.todoName} todoDate={item.todoDate} className="itemsContainer" />
        ))}
      </>
    );
  }
  else {
    return (
      <>
        <h2>No more Todo and please be happy you little rat ass</h2>
      </>
    );
  }
}

export default TodoItems;