const selectedModelReducer = (state = '', action) => {
    switch (action.type) {
        case 'SELECT_MODEL':
            return !state;    
        default:
            return state;
    }
}

export default selectedModelReducer;