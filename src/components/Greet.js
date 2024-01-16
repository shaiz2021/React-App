import React from 'react'

const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1> Hello its {props.name} here a.k.a {props.called}</h1>
            {props.children}
        </div>
    )
}
export default Greet