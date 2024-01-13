import { useTodo } from "../hooks/useTodo"
import { TodosContext } from "./TodosContext"

export const TodosProvider = ({children}) => {
    const {todos,handleToggleTodo,deleteTodos} = useTodo();
  return (  
    <TodosContext.Provider value={{todos, handleToggleTodo, deleteTodos}}>
        {children}
    </TodosContext.Provider>
  )
}
