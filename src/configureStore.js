import { applyMiddleware, createStore, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/index'


let enhancer = compose(
        applyMiddleware(thunk, createLogger()),
        // applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default createStore(reducer, enhancer)