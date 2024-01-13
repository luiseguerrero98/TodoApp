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
    
    
     

  return {
    todos
  }
}
