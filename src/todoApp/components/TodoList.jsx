import { useContext } from "react"
import { TodoItem } from "./TodoItem"
import { TodosContext } from "../../context"

export const TodoList = () => {

    const {todos} = useContext(TodosContext);
  return (
    <>
        <ul
            className="list-group">
        {
        todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo}/>
        ))
        }   
        </ul>
    </>
    
  )
}
