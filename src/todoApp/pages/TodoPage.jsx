import { AddTodo } from "../components/AddTodo"
import { TodoList } from "../components/TodoList"

export const TodoPage = () => {

  return (
    <>
        <div className="container">
            <h1 className="text-center">To Do's</h1>
            <hr/>
            <AddTodo/>
            <div className="col-5">
                <TodoList/>
            </div>
        </div>
        
    </>
  )
}
