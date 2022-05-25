import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./auth/reducer";
const rootReducer = combineReducers({
  auth: authReducer
})
const Middleware = (store) => (next) => (action) => {
  // console.log("Middleware", action, next, store);
  return typeof action === "function" ? action(store.dispatch) : next(action)
}
export const store = createStore(rootReducer, applyMiddleware(Middleware));
