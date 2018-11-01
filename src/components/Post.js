import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component{
    handleClick = () =>{
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }
    render(){
        console.log(this.props)
        let post = this.props.post ? (
            <div className="post card" key={ this.props.post.id }>
                <div className="card-content">
                    <Link to={ '/' + this.props.post.id }>
                        <span className="card-title">{ this.props.post.title }</span>
                    </Link>
                    <p>{ this.props.post.body }</p>
                    <div className="center">
                        <button onClick={ this.handleClick } className="btn grey">
                            Delete Post
                        </button>
                    </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: id => { dispatch(deletePost(id))}
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Post)