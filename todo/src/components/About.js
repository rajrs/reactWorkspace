import React, { Component } from 'react'
import Post from './Post'
import axios from 'axios';
 class About extends Component {
     state={post:[]}

     componentDidMount(){   
        this.getPost()
        console.log(this.state.post)
      }
      getPost(){
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(res=>{  const result= res.data; console.log(result);
             this.setState({post:result})
             console.log(this.state.post)
            })
        .catch(err =>{console.log(err)})  
    }
  
    render() {
        return (
            <>
            <div>
                <h1>About content</h1>
            </div>
            <div className="row">
                <Post postList={this.state.post}></Post>
                {/* <div className="col-12">
                {this.state.post.map((post, index) => {
                    return <div key={index}>{post.title} {post.id}</div>
                })}
                </div> */}
            </div>
        </>
        )
    }
}
export default About