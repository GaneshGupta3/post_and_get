import { useContext, useRef } from "react"
import styles from "./AddTodo.module.css";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo_items_store";

function AddTodo() {
  // const [todoName , setTodoName] = useState();//as useState repaints the whole page therefore we use reference to manage states of the variable without repainting the whole element and repaints while it is needed 

  // const [todoDate , setTodoDate] = useState();

  const {addTodo} = useContext(TodoItemsContext);

  const todoName = useRef();
  const todoDate = useRef();

  function handleAddButtonClicked(event){
    event.preventDefault();//it prevents the automated submission of the form to the server.
    addTodo(todoName.current.value,todoDate.current.value);
    todoName.current.value = "";
    todoDate.current.value = "";
  }

  return ( 
    <div className="container text-center">
      <form onSubmit={handleAddButtonClicked} className={"row "+styles.kgRow}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" ref={todoName} />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDate}/>
        </div>
        <div className="col-2">
          <button type="submit" className={"btn btn-success btn-container "+ styles.kgButton}>
            <BiMessageAdd></BiMessageAdd>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
