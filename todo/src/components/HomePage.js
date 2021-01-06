import React, { Component } from 'react'
import TaskForm from './TaskForm';
import Todos from './Todo';
import {connect} from'react-redux';

class HomePage extends Component {
    render(){
        return (<><TaskForm /><Todos todos={this.props.todos} /></>)
        }
}
const mapStatetoProp=(state)=>{ 
    return {todos:state.todos,isAuth:state.isAuth}
  }
  
export default connect(mapStatetoProp,null)(HomePage);