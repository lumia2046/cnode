import React, { Component } from 'react'
import CircleLoading from './CircleLoading'

class AsyncContainer extends Component {
    state = { mounted: false }

    componentWillMount() {
        this.timeOut = setTimeout(() => {
            this.setState({ mounted: true })
        }, this.props.delay || 600)
    }

    render() {
        return (
            <div style={{ position: 'relative', width: '100%', background: 'white', ...this.props.style }}>
                {this.state.mounted ? this.props.children : <CircleLoading />}
            </div>
        )
    }
    componentWillUnmount() {
        clearTimeout(this.timeOut)
    }
}

export default AsyncContainer