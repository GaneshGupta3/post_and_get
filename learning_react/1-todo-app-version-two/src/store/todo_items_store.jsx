import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addTodo: () => {},
  confirmDeleteTodo: () => {},
});
{
  /*declared value here because we want auto suggestion otherwise we can give the value*/
}

const todoItemReducer = (currTodoItems, action) => {
  {
    /* currTodoItems is the current state of the items we defined the action type and payload while calling the todoItemReducer using dispatchTodoItems */
  }

  let newTodoItems = currTodoItems;

  if (action.type === "ADDTODO") {
    if (action.payload.todoDate == null || action.payload.todoName == null) {
      return null;
    } else {
      newTodoItems = [
        ...currTodoItems,
        {
          todoName: action.payload.todoName,
          todoDate: action.payload.todoDate,
        },
      ]; //we have to return it otherwise it will give error and using this because of async nature of react
    }
  } else if (action.type === "DELTODO") {
    let deleteData = {
      todoName: action.payload.todoName,
      todoDate: action.payload.todoDate,
    };

    const deletedItem = newTodoItems.find(
      (item) =>
        item.todoDate === deleteData.todoDate &&
        item.todoName === deleteData.todoName
    );

    if (deletedItem === null) {
      return null;
    }

    newTodoItems = newTodoItems.filter(
      (item) =>
        item.todoDate !== deletedItem.todoDate ||
        item.todoName != deletedItem.todoName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, [
    {
      todoName: "Buy Milk",
      todoDate: "12/12/2022",
    },
    {
      todoName: "Buy Ghee",
      todoDate: "12/12/2022",
    },
  ]);

  function formatDate(date) {
    let newDate = new Date(date);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return day + "/" + month + "/" + year;
  }

  function addTodo(todoName, todoDate) {
    todoDate = formatDate(todoDate);
    console.log(todoName + todoDate);
    const newTodoAction = {
      type: "ADDTODO",
      payload: {
        todoName,
        todoDate,
      },
    };
    dispatchTodoItems(newTodoAction);
  }

  function deleteTodo(todoName, todoDate) {
    const newTodoDeleteAction = {
      type: "DELTODO",
      payload: {
        todoName,
        todoDate,
      },
    };
    dispatchTodoItems(newTodoDeleteAction);
  }

  function confirmDeleteTodo(todoName, todoDate) {
    const confirmation = confirm(
      `do you want to delete todo with name:${todoName} and on date : ${todoDate}`
    );
    if (confirmation) {
      deleteTodo(todoName, todoDate);
    }
  }
  return (
    <TodoItemsContext.Provider
      value={{ todoItems, addTodo, confirmDeleteTodo }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
