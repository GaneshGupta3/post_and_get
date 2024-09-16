import { createContext } from "react";

export const TodoItemsContext = createContext({ todoItems : [], addTodo: ()=>{}, confirmDeleteTodo: ()=>{} });{/* for auto suggestion*/}