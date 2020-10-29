import { applyMiddleware, createStore } from "redux"
import rootReducer from "./root-reducer"
import logger from "redux-logger";

const middlewares = [logger];
const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export default store;