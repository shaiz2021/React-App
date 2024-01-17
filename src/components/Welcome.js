import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { name, called } = this.props
        // const {state1, state2} = this.state
        return (
            <h1>
                Hello its {name} here a.k.a {called}
            </h1>
        )
    }
}

export default Welcome