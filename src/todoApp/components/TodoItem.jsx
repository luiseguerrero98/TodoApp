export const TodoItem = ({todo}) => {
  return (
    <>
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">
                {todo.task_name}
            </span>
        </li>
    </>
  )
}
