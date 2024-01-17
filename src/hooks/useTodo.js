import { useEffect, useReducer } from "react";
import { useFetch } from "./";
import { todoReducer } from "../reducer/";



export const useTodo = () => {
    const url = 'https://65a1801c600f49256fb1c07c.mockapi.io/v1/todo/';
    const [todos, dispatchTodo] = useReducer(todoReducer,[]);
    const {getFetch, hasError} = useFetch();

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

    const addTodo = async (newTodo) => {
        if(newTodo.trim().length === 0) return;
        const method = 'POST';
        const bodyNew = {
            task_name: newTodo
        }
        const resp = await getFetch(url,method,bodyNew);
        dispatchTodo({
            type: '[TODO] Add Todo',
            payload: resp,
        });

    }
    
    const handleToggleTodo = (id) => {
        dispatchTodo({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    const handleToggleEditing = (id) => {
        dispatchTodo({
            type: '[TODO] Editing Todo',
            payload: id
        });
    }

    const deleteTodos = async () => {
        const method = 'DELETE';
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

    const updateTodo = async (todoUpdated) => {
        if(todoUpdated.task_name.trim().length === 0) return;
        const method = 'PUT';
        const body = {
            task_name: todoUpdated.task_name
        }
        const resp = await getFetch(`${url}${todoUpdated.id}`, method, body);
        dispatchTodo({
            type: '[TODO] Update Todo',
            payload: resp,
        });
    }
    
  return {
    todos,
    handleToggleTodo,
    handleToggleEditing,
    deleteTodos,
    addTodo,
    updateTodo,
    selectedTodos: todos.filter((todo) => todo.checked).length,
    hasError,
  }
}
