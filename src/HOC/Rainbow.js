import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'green', 'orange', 'blue', 'yellow']
    const randomColour = colours[Math.floor(Math.random() * 4)]
    const className = randomColour + '-text'

    return (props) => {
        return (
            <div className={ className }>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow