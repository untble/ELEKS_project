import {combineReducers, createStore} from "redux";
import {itemsReducer} from "./itemsReducer";
import {categoriesReducer} from "./categoriesReducer";
import {brandsReducer} from "./brandsReducer";

const rootReducer = combineReducers({
    items: itemsReducer,
    brands: brandsReducer,
    categories: categoriesReducer
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);