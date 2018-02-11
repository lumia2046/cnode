import React, { Component } from 'react'
import CircleLoading from './CircleLoading'

class AsyncContainer extends Component {
    state = { mounted: false }

    componentDidMount() {
        this.timeOut = setTimeout(() => {
            this.setState({ mounted: true })
        }, this.props.delay || 500)
    }

    componentWillUnmount() {
        clearTimeout(this.timeOut)
    }

    render() {
        return (
            <div>
                <div style={{ height: this.state.mounted ? 0 : 'auto', overflow: 'hidden' }}>
                    <CircleLoading />
                </div>
                {this.state.mounted && this.props.children}
            </div>
        )
    }
    componentWillUnmount() {
        clearTimeout(this.timeOut)
    }
}

export default AsyncContainer