import { AddTodo } from "../components/AddTodo"
import { TodoList } from "../components/TodoList"

export const TodoPage = () => {

  return (
    <>
        <div className="container">
            <h3 className="text-center mt-3 text-muted">TO DO APP</h3>
            <hr/>
            <AddTodo/>
            <hr/>
            <div className="col-10 mx-auto">
                <TodoList/>
            </div>
        </div>
        
    </>
  )
}
