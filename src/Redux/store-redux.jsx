import { combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware } from "redux"
import { contentReducer } from "./content-reducer";

let reducers = combineReducers({
    contentPage: contentReducer,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));