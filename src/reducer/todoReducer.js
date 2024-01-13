export const todoReducer = (initialState = [], action) => {
    switch(action.type) {
        case '[TODO] Init Todo':
            return action.payload.map((todo) => {
                return {
                    ...todo,
                    checked: false
                }

            });

        case '[TODO] Update Todo':
            return initialState.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        task_name: action.payload.task_name
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

        case '[TODO] Delete Todos':
            //console.log('llego al reducer');
            return initialState.filter(todo => todo.checked !== true);


        default:
            return initialState;

    }
}