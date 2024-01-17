import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <h1>
                Hello its {this.props.name} here a.k.a {this.props.called}
            </h1>
        )
    }
}

export default Welcome