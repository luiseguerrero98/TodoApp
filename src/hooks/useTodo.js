import { useEffect, useReducer } from "react";
import { useFetch } from "./useFetch";
import { todoReducer } from "../reducer/todoReducer";



export const useTodo = () => {
    const url = 'https://65a1801c600f49256fb1c07c.mockapi.io/v1/todo/';
    const [todos, dispatchTodo] = useReducer(todoReducer,[]);
    const {getFetch} = useFetch();

    useEffect(() => {
        initializeTodos();
    }, [])

    const initializeTodos = async () => {
        const method = 'GET'
        const resp = await getFetch(url, method);
        dispatchTodo({
            type: '[TODO] Init Todo',
            payload: resp
        });
    }
    
    const handleToggleTodo = (id) => {
        dispatchTodo({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    const deleteTodos = async () => {
        const method = 'DELETE';
        //console.log('hizo click en el boton');
        const deletedTodos = await Promise.all(
            todos.map((todo) => {
                if(todo.checked) {
                    return getFetch(`${url}${todo.id}`, method);
                }
            })
        );

        dispatchTodo({
            type: '[TODO] Delete Todos',
            payload: deletedTodos
        });
    }
    
     

  return {
    todos,
    handleToggleTodo,
    deleteTodos,
  }
}
