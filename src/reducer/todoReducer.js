export const todoReducer = (initialState = [], action) => {
    switch(action.type) {
        case '[TODO] Init Todo':
            return action.payload;

        default:
            return initialState;

    }
}