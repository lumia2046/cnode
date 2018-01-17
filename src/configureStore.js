import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/index'

const history = createHistory();
const middleware = routerMiddleware(history)
const logger = createLogger({ collapsed: true })
const middlewares = [thunk, middleware]

if(process.env.NODE_ENV === 'development') {
        middlewares.push(logger)
}
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))
    
export default store


