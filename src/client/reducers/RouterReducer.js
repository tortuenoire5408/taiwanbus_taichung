import { Iterable, fromJS } from 'immutable'
import scrollBarHandler from '../../../lib/handler/scrollBarHandler';
import ActionTypes from '../constants/ActionTypes';
// refactor from connected-react-router's ConnectedRouter

/**
 * Adds query to location.
 * Utilises the search prop of location to construct query.
 */
const injectQuery = (location) => {
    if(location && location.query) {
        // Don't inject query if it already exists in history
        return location
    }

    const searchQuery = location && location.search

    if(typeof searchQuery !== 'string' || searchQuery.length === 0) {
        return {
            ...location,
            query: {}
        }
    }

    // Ignore the `?` part of the search string e.g. ?username=codejockie
    const search = searchQuery.substring(1)
    // Split the query string on `&` e.g. ?username=codejockie&name=Kennedy
    const queries = search.split('&')
    // Contruct query
    const query = queries.reduce((acc, currentQuery) => {
        // Split on `=`, to get key and value
        const [queryKey, queryValue] = currentQuery.split('=')
        return {
            ...acc,
            [queryKey]: queryValue
        }
    }, {})

    return {
        ...location,
        query
    }
}

const _fromJS = (jsValue) => {
    const reviver =
        (key, value) => Iterable.isIndexed(value)
            ? value.toList()
            : value.toMap();
    return (fromJS(jsValue, reviver))
}

const _getIn = (state, path) => {
    const plainGetIn = (state, path) => {
        if(!state) {
            return state
        }

        const length = path.length
        if(!length) {
            return undefined
        }

        let result = state
        for(let i = 0; i < length && !!result; ++i) {
            result = result[path[i]]
        }

        return result
    }
    return Iterable.isIterable(state)
        ? state.getIn(path)
        : plainGetIn(state, path)
}

const _merge = (state, payload) => {
    return state.merge(payload)
}

const _toJS = (value) => {
    return Iterable.isIterable(value) ? value.toJS() : value
}


const connectRouter = (history) => {
    const initialRouterState = _fromJS({
        location: injectQuery(history.location),
        action: history.action,
    })

    const router = (state = initialRouterState, action) => {
        switch(action.type) {
            case ActionTypes.Router.LOCATION_CHANGE:
                const { location, actionString, isFirstRendering } = action;
                scrollBarHandler.scrollToTop();
                return isFirstRendering
                    ? state
                    : _merge(state, { location: _fromJS(injectQuery(location)), action: actionString })
            default:
                return state;
        }
    }
    return router
}

export default connectRouter;