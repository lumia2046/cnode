import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import store from './configureStore';
import { Provider } from 'react-redux';
import { Router,browserHistory,hashHistory } from 'react-router';
import routes from './routes';
import './styles/index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

if(process.env.NODE_ENV === 'production') {
    console.log('production');
} else {
    console.log('dev');
}
render(
        <Provider store={store}>
            <Router routes={routes} history={hashHistory}/>
        </Provider>
    ,
    document.getElementById('root')
);