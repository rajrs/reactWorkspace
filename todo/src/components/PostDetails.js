import React, { Component } from 'react';
import axios from 'axios';
class PostDetails extends Component {
    state={postDetail:{}}
    componentDidMount() {
        const { match: { params } } = this.props;      
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postID}`)
          .then(({ data: postDetail }) => {
            console.log('postDetail', postDetail);
      
            this.setState({ postDetail });
          });
      }
    render(){
        console.log(this.props);
        const {id:dataId ,title,body} = this.state.postDetail;
      
        console.log(dataId,title,body)
    return <>
    
      <div>{dataId}</div> 
    <h1>{title}</h1>
    <p>{body}</p>
    </>
    }

}

export default PostDetails;