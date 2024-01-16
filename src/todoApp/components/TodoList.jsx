import { useContext } from "react"
import { TodoItem } from "./TodoItem"
import { TodosContext } from "../../context"

export const TodoList = () => {

    const {todos, handleToggleTodo,deleteTodos,selectedTodos, handleToggleEditing, updateTodo} = useContext(TodosContext);
  return (
    <>
        <div className="container overflow-auto align-center" style={{height: '50vh'}}>
            <ul
                className="list-group">
            {
            todos.map((todo) => (
                <TodoItem key={todo.id} 
                    todo={todo} 
                    handleToggleTodo={handleToggleTodo} 
                    handleToggleEditing={handleToggleEditing}
                    updateTodo={updateTodo}/>
            ))
            }   
            </ul>
        </div>
        <div className="container ms-auto mt-3 mb-3 text-end">
            <button 
                className="btn btn-danger align-self-center" 
                onClick={() => deleteTodos()} 
                disabled={selectedTodos === 0}
                > 
                    Eliminar To Do's</button>
        </div>
    </>
    
  )
}
