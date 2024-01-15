export const todoReducer = (initialState = [], action) => {
    switch(action.type) {
        case '[TODO] Init Todo':
            return action.payload.map((todo) => {
                return {
                    ...todo,
                    checked: false,
                    editing: false,
                }

            });

        case '[TODO] Add Todo':
            return [
                ...initialState,
                {
                    ...action.payload,
                    checked: false,
                    editing: false,
                }
            ]
        
        case '[TODO] Update Todo':
            return initialState.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        task_name: action.payload.task_name,
                        editing: !todo.editing
                    }
                };
                return todo;
            });

        case '[TODO] Toggle Todo':
            return initialState.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        checked: !todo.checked
                    }
                }
                return todo;
            });
        
        case '[TODO] Editing Todo':
            return initialState.map((todo) => {
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        editing: !todo.editing,
                    }
                }
                return todo; 
            });

        case '[TODO] Delete Todos':
            //console.log('llego al reducer');
            return initialState.filter(todo => todo.checked !== true);


        default:
            return initialState;

    }
}