import React, { Component } from 'react'

export default class Posts extends Component {

        state = {
            posts: []
        }

  async componentDidMount(){
      const res =  await fetch('https://jsonplaceholder.typicode.com/posts')
       const data = await res.json();
       this.setState({posts: data})
    }
    render() {
        return (
            <div>
                <h1>Publicaciones Posts</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            </div>
                    })
                }
            </div>
        )
    }
}
