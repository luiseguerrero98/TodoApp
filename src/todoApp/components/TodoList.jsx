import { useContext } from "react"
import { TodoItem } from "./TodoItem"
import { TodosContext } from "../../context"

export const TodoList = () => {

    const {todos, handleToggleTodo,deleteTodos} = useContext(TodosContext);
  return (
    <>
        <button className="btn btn-danger" onClick={() => deleteTodos()}> Eliminar Todos</button>
        <ul
            className="list-group">
        {
        todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} handleToggleTodo={handleToggleTodo}/>
        ))
        }   
        </ul>
    </>
    
  )
}
