import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createMemoryHistory as createHistory } from 'history';
import reducers from '../../client/reducers';
import connectRouter from '../../client/reducers/RouterReducer';
import thunkMiddleware from '../../client/store/middlewares/thunkMiddleware';
import routerMiddleware from '../../client/store/middlewares/routerMiddleware';

// Create a store and history based on a path
const createServerStore = (path = '/') => {
    const initialState = {};
    const enhancers = [];

    // We don't have a DOM, so let's create some fake history and push the current path
    const history = createHistory({ initialEntries: [path] });

    // Combine all reducers
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

    // Return all that I need
    return {
        history,
        store
    };
};

export default createServerStore;