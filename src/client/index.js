import '../../assets/style/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component';
import { Provider } from 'react-redux';
import { default as ConnectedRouter } from './component/Router/containers/RouterContainer';
import Root from './component/Root';
import store, { history } from './store';
import * as envConfig from '../config';

loadableReady(() => {
    ReactDOM.hydrate(
        <Provider store={store}>
            <ConnectedRouter history={history} basename={envConfig.baseHref}>
                <Root />
            </ConnectedRouter>
        </Provider>,
        document.getElementById('app')
    );
});

// 在開發環境下接受 hot module reloading
if(envConfig.NODE_ENV !== 'production') {
    if(module.hot) {
        module.hot.accept()
    }
}