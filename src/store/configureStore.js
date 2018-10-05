import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import asyncMiddleware from "../middlewares/async";
export default createStore(rootReducer, applyMiddleware(asyncMiddleware));
