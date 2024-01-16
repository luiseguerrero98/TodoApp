import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm'
import { TodosContext } from '../../context';

export const AddTodo = () => {
    const {inputAdd, onInputChange, onResetForm} = useForm({
        inputAdd: ''
    });
    const {addTodo} = useContext(TodosContext);
    

    const onAddNewTodo = (event) => {
        event.preventDefault();
        addTodo(inputAdd);
        onResetForm();
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
                            onChange={onInputChange}/>
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
