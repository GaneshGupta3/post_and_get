
import TodoItem from "./TodoItem"
function TodoItems({todoItems}){
  return(
    <>
    {todoItems.map((item, index) => (
      <TodoItem key={index} todoName={item.todoName} todoDate={item.todoDate} className="itemsContainer"/>
    ))}
    </>
  )
}

export default TodoItems;