import React, { Component } from 'react'

class AddNinja extends Component{
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addNinja(this.state)
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input onChange={this.handleChange} type="text" id="name"/>
                    <label htmlFor="name">Age</label>
                    <input onChange={this.handleChange} type="text" id="age"/>
                    <label htmlFor="name">Belt</label>
                    <input onChange={this.handleChange} type="text" id="belt"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja