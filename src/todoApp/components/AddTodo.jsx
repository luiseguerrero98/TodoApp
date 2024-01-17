import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm'
import { TodosContext } from '../../context';

export const AddTodo = ({addNotification}) => {
    const {inputAdd, onInputChange, onResetForm} = useForm({
        inputAdd: ''
    });
    const {addTodo,hasError} = useContext(TodosContext);
    

    const onAddNewTodo = (event) => {
        event.preventDefault();
        addTodo(inputAdd);
        onResetForm();
        addNotification(hasError);
    }
  return (
    <>
        <div className='container col-10 align-center'>
            <form onSubmit={onAddNewTodo}>
                <div className='row'>
                    <div className='col-8 align-center'>
                        <input type='text' 
                            placeholder='Nuevo To Do' 
                            className='form-control' 
                            name='inputAdd' 
                            value={inputAdd}
                            onChange={onInputChange}
                            style={{backgroundColor: "rgba(255,255,255,0.6)"}}/>
                    </div>
                    <div className='container col-4 ms-auto text-end'>
                        <button 
                        type='submit' 
                        className='btn btn-outline-primary align-self-center'
                        onClick={onAddNewTodo}>
                            Agregar
                        </button>
                    </div>

                </div>

            </form>
        </div>
    </>
  )
}
