import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Post extends Component{
    
    render(){
        let post = this.props.post ? (
            <div className="post card" key={ this.props.post.id }>
                <div className="card-content">
                    <Link to={ '/' + this.props.post.id }>
                        <span className="card-title">{ this.props.post.title }</span>
                    </Link>
                    <p>{ this.props.post.body }</p>
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

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    return {
        post: state.posts.find(post => post.id === id)
    }
}

export default connect(mapStateToProps)(Post)