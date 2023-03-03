import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";
import thunk from "redux-thunk";


const composeEmhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //esta linea es para conectar con la extension del navegador => REDUX DEVTOOLS


const store = createStore(
    reducer,
    //composeEmhancer(applyMiddleware(thunkMiddleware))
    composeEmhancer(applyMiddleware(thunk))
); // esta linea es para poder hacer peticiones a un server

export default store;

