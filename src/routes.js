import React, { Component } from 'react'
import { Route, Router, Redirect, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import createHistory from 'history/createHashHistory'
import App from './containers/App'
import HomePage from './containers/HomePage'
import Article from './containers/Article'
import Message from './containers/Message'
import Login from './containers/Login'
import Profile from './containers/Profile'
import PublishTopic from './containers/PublishTopic'
import prefix from './utils/routePrefix'
import getSize from './utils/getSize'
import { setHashUrl, setTransition } from './actions/hashUrl'
// import { clearUserInfo } from './actions/login'
import { clearError } from './actions/fetchError'
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group'
const history = createHistory()



@connect(store => ({ store }))
class Routes extends Component {
    constructor() {
        super()
        this.state = {}
    }

    hashChange = (ev) => {
        if (this.props.store.hashUrl.oldURL != '/') {
            this.setState({ overflow: 'hidden' })
            setTimeout(() => this.setState({ overflow: 'visible' }), 500)
        }

        const dispatch = this.props.dispatch
        let hashUrl = null;
        if (ev.oldURL) {
            hashUrl = { oldUrl: ev.oldURL.split('#')[1], currentUrl: ev.newURL.split('#')[1] }
        } else {
            this.oldUrl = this.currentUrl
            this.currentUrl = window.location.href.split('#')[1]
            hashUrl = { oldUrl: this.oldUrl, currentUrl: this.currentUrl }
        }
        dispatch(setHashUrl(hashUrl))

        // if (this.props.hashUrl.transition != 'none') {
        //     clearTimeout(this.transitionTimeOut)
        //     this.transitionTimeOut = setTimeout(() => {
        //         dispatch(setTransition({ transition: 'none' }))
        //     }, 50)
        // }
    }

    oldUrl = '/'
    currentUrl = '/'

    // changeTransition = (transition) => {
    //     this.setState({ transition: transition })
    // }

    componentWillMount() {
        let dispatch = this.props.dispatch
        window.myDispatch = dispatch
        let menu = window.location.href.split('#')[1].split('/')
        if (menu[1]) {
            this.currentUrl = window.location.href.split('#')[1]
            dispatch(setHashUrl({ oldUrl: this.oldUrl, currentUrl: window.location.href.split('#')[1] }))
        } else {
            dispatch(setHashUrl({ oldUrl: this.oldUrl, currentUrl: this.currentUrl }))
        }
        window.addEventListener('hashchange', this.hashChange)
        // 由于头部组件fix定位，在路由切换时，width:100%在手机上的判定会有问题，暂时采取全局变量储存页面加载时的宽度
        // window.width = document.getElementById('root').offsetWidth
        // console.log('****************',document.getElementById('root').offsetWidth)
    }

    saveState = () => {
        let store = this.props.store
        sessionStorage.setItem('store', JSON.stringify(store))
    }



    componentWillUpdate(nextProps) {
        // if (this.props.store.hashUrl.oldUrl == nextProps.store.hashUrl.currentUrl) {
        //     this.props.dispatch(setTransition({ transition: 'left' }))
        // }
    }

    render() {
        this.transition = this.props.store.hashUrl.transition
        // let transition = this.props.store.hashUrl.transition
        return (
            <Router path={`${prefix}/`} history={history}>
                <Route render={({ location }) => (
                    <div style={{ position: 'relative', height: getSize().windowH, width: '100%', overflow: this.state.overflow || 'visible' }}>
                        {/* <TransitionGroup>
                                <CSSTransition classNames={this.props.store.hashUrl.transition} timeout={20000} key={`${window.location.href.split('/#/')[1]}`}>
                                    <Switch location={location}>
                                        <Route location={location} exact path='/' render={() => <Redirect to='/home' />} />
                                        <Route location={location} path='/home' render={() => <HomePage />} />
                                        <Route location={location} path='/topic/:id' render={() => <Article />} />
                                        <Route location={location} path='/message' render={() => <Message />} />
                                        <Route location={location} path='/login' render={() => <Login />} />
                                        <Route location={location} path='/profile' render={() => <Profile />} />
                                        <Route location={location} path='/publishTopic' render={() => <PublishTopic />} />
                                    </Switch>
                                </CSSTransition>
                        </TransitionGroup> */}
                        <TransitionGroup>
                            <Transition timeout={500} key={location.pathname}
                                onEnter={() =>  this.enterCN = `${this.transition}-enter` }
                                onEntering={() =>  this.enterCN = `${this.transition}-enter ${this.transition}-enter-active`}
                                onEntered={() => this.enterCN = `` }
                                onExit={() => this.exitCN = `${this.transition}-exit`}
                                onExiting={() => this.exitCN = `${this.transition}-exit ${this.transition}-exit-active`}
                                onExited={() => this.exitCN = ``}
                            >
                                {(status) => (
                                    <div className={status.includes('enter') ? this.enterCN : this.exitCN} >
                                        <Switch location={location}>
                                            <Route location={location} exact path='/' render={() => <Redirect to='/home' />} />
                                            <Route location={location} path='/home' render={() => <HomePage />} />
                                            <Route location={location} path='/topic/:id' render={() => <Article />} />
                                            <Route location={location} path='/message' render={() => <Message />} />
                                            <Route location={location} path='/login' render={() => <Login />} />
                                            <Route location={location} path='/profile' render={() => <Profile />} />
                                            <Route location={location} path='/publishTopic' render={() => <PublishTopic />} />
                                        </Switch>
                                    </div>
                                )}
                            </Transition>
                        </TransitionGroup>
                    </div>
                )} />
            </Router>
        )
    }


    componentDidMount() {
        window.addEventListener('beforeunload', this.saveState)
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.saveState)
        window.removeEventListener('hashchange', () => { })
    }


}



// const Routes = ({ props }) => (
//     <Router path={`${prefix}/`} history={history}>
//         <Route render={({ location }) => (
//             <Switch>
//                 <Route exact path='/' render={() => <HomePage />} />
//                 <Route path='/topic/:id' render={() => <Article />} />
//                 <Route path='/message' render={() => <Message />} />
//                 <Route path='/login' render={() => <Login />} />
//                 <Route path='/profile' render={() => <Profile />} />
//                 <Route path='/publishTopic' render={() => <PublishTopic />} />
//             </Switch>
//         )} />
//     </Router>
// )

// const Routes = <div>bbbbbbbb</div>
export default Routes