import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom'
import store from './configureStore'
import { Provider } from 'react-redux'
// import { Router,hashHistory } from 'react-router'
import Routes from './Routes'
import './styles/index.css'
import { AppContainer } from 'react-hot-loader'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()


const render = (Component) => {
    ReactDOM.render(
    	<AppContainer>
        	<Provider store={store}>
        	    <Component />
        	</Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}

render(Routes)

if(module.hot) {
    module.hot.accept('./Routes', () => { render(Routes) });
}

    // ReactDOM.render(
    // 	<AppContainer>
    //     	<Provider store={store}>
    //     	    <div>aaaaaaaa</div>
    //     	</Provider>
    //     </AppContainer>,
    //     document.getElementById('root')
    // )
