import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    
});
// const myAsyncMiddleware = (store) => (next) => (actions) => {
//   // store-Original redux store
//   // next - Next Middleware function
//   //action - the dispachted action
//   if (typeof actions === "function") {
//     return actions(store.dispatch);
//   }
//   return next(actions);
// };
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
