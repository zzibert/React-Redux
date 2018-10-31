import React, {Component} from 'react'

class AddForm extends Component{
    state = {
        content: null
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        e.target.reset()
        this.setState({
            content: null
        })
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label>Add a new Todo</label>
                    <input onChange={ this.handleChange } type="text"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddForm