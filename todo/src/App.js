import React from 'react';
import './App.css';
import Todos from './components/Todo';
//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import PostDetails from './components/PostDetails';
import TaskForm from './components/TaskForm';
//import Counter from"./components/Counter";
import {  Switch,  Route} from "react-router-dom";
import {connect} from'react-redux';
import {fetchTaskData} from'./store/ActionTypes'

class App extends React.Component { 
  render(){   
    return (<>   
        <Navbar />    
        <div className="container">        
        <Switch>
          <Route exact path="/"> 
              <h3>Add New Task</h3>
              <TaskForm />
              {/* <p>{JSON.stringify(this.props)  }</p> */}
              <Todos todos={this.props.todos} />
          </Route>
          <Route path="/about"><About /></Route>   
          <Route path="/PostDetails/:postID" component={PostDetails} />
        </Switch>
      </div>     
      </>
    );
  }
  
}
const mapStatetoProp=(state)=>{ 
  return {todos:state.todos}
}

export default connect(mapStatetoProp,fetchTaskData())(App);
