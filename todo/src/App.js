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
import { Login } from './components/login';


class App extends React.Component { 

  render(){   
    return (<>   
        <Navbar />    
        <div className="container">        
        <Switch>
          <Route exact path="/"> 
              <TaskForm />             
              <Todos todos={this.props.todos} />
          </Route>
          <Route path="/about"><About /></Route>   
          <Route path="/login"><Login  dispatch={this.props.dispatch} /></Route>   
          <Route path="/PostDetails/:postID" component={PostDetails} />
        </Switch>
      </div>     
      </>
    );
  }
  
}
const mapStatetoProp=(state)=>{ 
  return {todos:state.todos,isAuth:state.isAuth}
}

//export default connect(mapStatetoProp,fetchTaskData())(App);
export default connect(mapStatetoProp,null)(App);

