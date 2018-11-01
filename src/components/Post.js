import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Post extends Component{
    state = {
        id: null,
        post: null
    }
    componentDidMount(){
        let id = this.props.match.params.post_id
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
            this.setState({
                post: res.data
            })
        })
        this.setState({
            id
        })
    }
    
    render(){
        let post = this.state.post ? (
            <div className="post card" key={ this.state.post.id }>
                <div className="card-content">
                    <Link to={ '/' + this.state.post.id }>
                        <span className="card-title">{ this.state.post.title }</span>
                    </Link>
                    <p>{ this.state.post.body }</p>
                </div>
            </div>
        ) : (
            <div className="center">Loading Post...</div>
        )
        return (
            <div className="container">
                { post }
            </div>
        )
    }
}

export default Post