export const BRANDS = 'BRANDS';


export const brandsReducer = (state = [], action) => {
    switch (action.type) {
        case BRANDS:
            return action.payload;
        default:
            return state
    }
}