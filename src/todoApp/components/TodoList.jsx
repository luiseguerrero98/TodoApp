import { useContext } from "react"
import { TodoItem } from "./"
import { TodosContext } from "../../context"

export const TodoList = ({deleteNotification, updateNotification}) => {

    const {todos, handleToggleTodo,
            deleteTodos,selectedTodos, 
            handleToggleEditing, updateTodo, 
            hasError} = useContext(TodosContext);
    

    const onDelete = () => {
        deleteTodos();
        deleteNotification(hasError);
    }
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
                    updateTodo={updateTodo}
                    hasError= {hasError}
                    updateNotification= {updateNotification}/>
            ))
            }   
            </ul>
        </div>
        <div className="container ms-auto mt-3 mb-3 text-end">
            <button 
                className="btn btn-danger align-self-center" 
                onClick={() => onDelete()} 
                disabled={selectedTodos === 0}
                > 
                    Eliminar To Do's</button>
        </div>
    </>
    
  )
}
