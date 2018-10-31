import React from 'react'

const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjaList = ninjas.filter(ninja => ninja.age > 19).map(ninja => {
        return (
            <div className="ninja" key={ ninja.id }>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
                <button onClick= { () => deleteNinja(ninja.id) }>Delete</button>
                <br/>
            </div>
        )
    })
    return (
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas
