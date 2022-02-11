import React, { PureComponent } from 'react';
import { Router as ReactRouter } from 'react-router';
import { useStore } from 'react-redux';
import PropTypes from 'prop-types';
import isEqualWith from 'lodash.isequalwith';
import { getLocation } from 'connected-react-router/immutable';
// refactor from connected-react-router's ConnectedRouter

class Router extends PureComponent {
    constructor(props) {
        super(props)

        // const { getLocation } = createSelectors(structure)
        const { history, stateCompareFunction } = props

        this.inTimeTravelling = false

        this._unsubscribe = this._unsubscribe.bind(this);
        this._unlisten = this._unlisten.bind(this);
        this._handleLocationChange = this._handleLocationChange.bind(this);

        if(!props.noInitialPop) {
            // Dispatch a location change action for the initial location.
            // This makes it backward-compatible with react-router-redux.
            // But, we add `isFirstRendering` to `true` to prevent double-rendering.
            this._handleLocationChange(history.location, history.action, true)
        }
    }

    _unsubscribe() {
        // Subscribe to store changes to check if we are in time travelling
        const store = useStore();
        return store.subscribe(() => {
            // Allow time travel debugging compatibility to be turned off
            // as the detection for this (below) is error prone in apps where the
            // store may be unmounted, a navigation occurs, and then the store is re-mounted
            // during the app's lifetime. Detection could be much improved if Redux DevTools
            // simply set a global variable like `REDUX_DEVTOOLS_IS_TIME_TRAVELLING=true`.
            const isTimeTravelDebuggingAllowed = !this.props.noTimeTravelDebugging

            // Extract store's location
            const {
                pathname: pathnameInStore,
                search: searchInStore,
                hash: hashInStore,
                state: stateInStore,
            } = getLocation(store.getState())
            // Extract history's location
            const {
                pathname: pathnameInHistory,
                search: searchInHistory,
                hash: hashInHistory,
                state: stateInHistory,
            } = history.location

            // If we do time travelling, the location in store is changed but location in history is not changed
            if(
                isTimeTravelDebuggingAllowed &&
                this.props.history.action === 'PUSH' &&
                (pathnameInHistory !== pathnameInStore ||
                    searchInHistory !== searchInStore ||
                    hashInHistory !== hashInStore ||
                    !isEqualWith(stateInStore, stateInHistory, stateCompareFunction))
            ) {
                this.inTimeTravelling = true
                // Update history's location to match store's location
                history.push({
                    pathname: pathnameInStore,
                    search: searchInStore,
                    hash: hashInStore,
                    state: stateInStore,
                })
            }
        });
    }

    _unlisten() {
        // Listen to history changes
        const { history } = this.props;
        return history.listen(this._handleLocationChange);
    }

    _handleLocationChange(location, actionString, isFirstRendering = false) {
        // Dispatch onLocationChanged except when we're in time travelling
        const { onLocationChanged } = this.props;
        if(!this.inTimeTravelling) {
            onLocationChanged(location, actionString, isFirstRendering);
        } else {
            this.inTimeTravelling = false;
        }
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    componentDidMount() {
        this._unlisten();
    }

    render() {
        const { omitRouter, history, basename, children } = this.props

        // The `omitRouter` option is available for applications that must
        // have a Router instance higher in the component tree but still desire
        // to use connected-react-router for its Redux integration.

        if(omitRouter) {
            return <>{children}</>
        }

        return (
            <ReactRouter
                history={history}
                basename={basename}
                children={children}
                location={history.location}
                navigationType={history.action}
                navigator={history}
            >
                {children}
            </ReactRouter>
        )
    }
}

Router.propTypes = {
    history: PropTypes.shape({
        action: PropTypes.string.isRequired,
        listen: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
        push: PropTypes.func.isRequired,
    }).isRequired,
    basename: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    onLocationChanged: PropTypes.func.isRequired,
    noInitialPop: PropTypes.bool,
    noTimeTravelDebugging: PropTypes.bool,
    stateCompareFunction: PropTypes.func,
    omitRouter: PropTypes.bool,
}

export default Router;
