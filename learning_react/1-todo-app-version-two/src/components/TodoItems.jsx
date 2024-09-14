
import TodoItem from "./TodoItem"
function TodoItems({ todoItems, onDelete }) {
  if (todoItems.length !== 0) {
    return (
      <>
        {todoItems.map((item, index) => (
          <TodoItem key={index} todoName={item.todoName} todoDate={item.todoDate} className="itemsContainer" onDelete={onDelete} />
        ))}
      </>
    )
  }
  else {
    return (
      <>
        <h2>No more Todo</h2>
      </>
    );
  }
}

export default TodoItems;