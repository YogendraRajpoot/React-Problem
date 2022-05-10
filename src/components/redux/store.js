import { createStore } from "redux";
import { ReducerK } from "./reducer";


export const store = createStore(ReducerK, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
