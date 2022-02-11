import ActionTypes from '../constants/ActionTypes';
// refactor from connected-react-router's ConnectedRouter

/**
 * This action type will be dispatched when your history
 * receives a location change.
 */
export const onLocationChanged = (location, actionString, isFirstRendering = false) => {
    return {
        type: ActionTypes.Router.LOCATION_CHANGE,
        location,
        actionString,
        isFirstRendering,
    };
};

/**
 * These actions correspond to the history API.
 * The associated routerMiddleware will capture these events before they get to
 * your reducer and reissue them as the matching function on your history.
 */
export const routerPush = (...args) => {
    return {
        type: ActionTypes.Router.CALL_HISTORY_METHOD,
        method: 'push',
        args,
    };
};

export const routerReplace = (...args) => {
    return {
        type: ActionTypes.Router.CALL_HISTORY_METHOD,
        method: 'replace',
        args,
    };
};

export const routerGo = (...args) => {
    return {
        type: ActionTypes.Router.CALL_HISTORY_METHOD,
        method: 'go',
        args,
    };
};

export const routerGoBack = (...args) => {
    return {
        type: ActionTypes.Router.CALL_HISTORY_METHOD,
        method: 'goBack',
        args,
    };
};

export const routerGoForward = (...args) => {
    return {
        type: ActionTypes.Router.CALL_HISTORY_METHOD,
        method: 'goForward',
        args,
    };
};