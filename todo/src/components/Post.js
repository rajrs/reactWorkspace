import React, { Component } from 'react'
import {     Link  } from "react-router-dom";
class Post extends Component {
    render(){
        return <div className="col-12">
        {this.props.postList.map((post, index) => {
            return <div key={index}> <Link to={`/PostDetails/${post.id}`}>{post.title}</Link> </div>
        })}
        </div> 
    }

}
export default Post