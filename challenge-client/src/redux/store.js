import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import axios from "axios";

import reducer from "./reducers";

/*const reducer = (state={}, action) => {
    return state;
}*/

const middleware = applyMiddleware(promise ,thunk ,logger);

const store = createStore(reducer, middleware);



export default store; 