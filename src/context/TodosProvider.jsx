import { useTodo } from "../hooks/useTodo"
import { TodosContext } from "./TodosContext"

export const TodosProvider = ({children}) => {
    const {todos,handleToggleTodo,deleteTodos, selectedTodos, addTodo, handleToggleEditing, updateTodo} = useTodo();
  return (  
    <TodosContext.Provider value={{todos, handleToggleTodo, deleteTodos, selectedTodos, addTodo, handleToggleEditing, updateTodo}}>
        {children}
    </TodosContext.Provider>
  )
}
