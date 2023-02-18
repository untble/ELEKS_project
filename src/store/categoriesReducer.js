export const CATEGORIES = 'CATEGORIES';


export const categoriesReducer = (state = [], action) => {
    switch (action.type) {
        case CATEGORIES:
            return action.payload;
        default:
            return state
    }
}