import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory as createHistory } from 'history';
import reducers from '../reducers';
import connectRouter from '../reducers/RouterReducer';
import thunkMiddleware from './middlewares/thunkMiddleware';
import routerMiddleware from './middlewares/routerMiddleware';

const initialState = {};
const enhancers = [];

export const history = createHistory();

const rootReducers = combineReducers({ ...reducers, router: connectRouter(history) });
// const rootReducers = connectRouter(history)(combineReducers(reducers));

// All the middlewares
const middleware = [thunkMiddleware, routerMiddleware(history)];
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

// Store it all
const store = createStore(
    rootReducers,
    initialState,
    composedEnhancers
);

export default store;