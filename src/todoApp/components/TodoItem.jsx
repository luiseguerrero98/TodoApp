export const TodoItem = ({todo, handleToggleTodo}) => {
  return (
    <>
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">
                {todo.task_name} y {JSON.stringify(todo.checked)}
            </span>
            <input className="form-check-input" type="checkbox" onClick={() => handleToggleTodo(todo.id)}/>
        </li>
    </>
  )
}
