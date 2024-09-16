import { createContext } from "react";

export const TodoItemsContext = createContext({ todoItems : [], addTodo: ()=>{}, confirmDeleteTodo: ()=>{} });{/*declared value here because we want auto suggestion otherwise we can give the value*/}