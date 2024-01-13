import { useTodo } from "../hooks/useTodo"
import { TodosContext } from "./TodosContext"

export const TodosProvider = ({children}) => {
    const {todos} = useTodo();
  return (  
    <TodosContext.Provider value={{todos}}>
        {children}
    </TodosContext.Provider>
  )
}
