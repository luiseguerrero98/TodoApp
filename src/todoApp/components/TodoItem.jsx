import { useForm } from "../../hooks/useForm"

export const TodoItem = ({todo, handleToggleTodo, handleToggleEditing, updateTodo}) => {

    const {inputItem, onInputChange, onResetForm} = useForm({
        inputItem: todo.task_name,
    });

    const handleCancelEditing = () => {
        handleToggleEditing(todo.id);
        onResetForm();
    };

    const handleUpdateTodo = (event) => {
        event.preventDefault();
        updateTodo({
            id: todo.id,
            task_name: inputItem
        });
    }
    
  return (
    <>
        <li className="list-group-item d-flex justify-content-between">
            
            {todo.editing ? (
                <>  
                    <form className="col-8" onSubmit={handleUpdateTodo}>
                        <input className="form-control" name="inputItem" value={inputItem} onChange={onInputChange}/>
                    </form>
                    <div className="col-2 d-flex jusify-content-between">
                        <button className="btn btn-danger m-1 btn-sm" onClick={() => handleCancelEditing()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </button>
                        <button className="btn btn-success m-1 btn-sm" onClick={handleUpdateTodo}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                            </svg>
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <span 
                        aria-label="span"
                        className={'text col-8 align-self-center'}>{todo.id}. {todo.task_name}</span>
                    <button className="btn btn-warning col-2" onClick={() => handleToggleEditing(todo.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" className="bi bi-pen" viewBox="0 0 16 16">
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
                        </svg>
                    </button>
                </>
                )
            }
            
            <input className="form-check-input align-self-center" type="checkbox" onClick={() => handleToggleTodo(todo.id)}/>
        </li>
    </>
  )
}
