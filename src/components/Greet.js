import React from 'react'

const Greet = props => {
    const {name, called} = props
    return (
        <div>
            <h1> Hello its {name} here a.k.a {called}</h1>
        </div>
    )
}
export default Greet