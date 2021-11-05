import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { requests } from "./requests";

const rootReducer = combineReducers({
  requests,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
