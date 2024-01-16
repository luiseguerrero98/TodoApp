import { AddTodo } from "../components/AddTodo"
import { TodoList } from "../components/TodoList"

export const TodoPage = () => {

  return (
    <>
        <div className="container">
            <div className="text-center d-flex align-items-center justify-content-center">
              <h3 className="mt-3 text-muted">TO DO APP</h3>
              <span className="icon mt-2" style={{marginLeft:'10px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gray" className="bi bi-card-checklist" viewBox="0 0 16 16">
                  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
              
            </div>
          
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
