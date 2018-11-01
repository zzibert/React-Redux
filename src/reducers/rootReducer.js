const initState = {
    posts: [
        {id: '1', title: 'POST 1', body: 'this is the first post!'},
        {id: '2', title: 'POST 2', body: 'this is the second post!'},
        {id: '3', title: 'POST 3', body: 'this is the third post!'},
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => post.id !== action.id)
        return {
            ...state,
            posts: newPosts
        }
    }
    return state
}

export default rootReducer