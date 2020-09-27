import React from 'react';
//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import About from './components/About';
import PostDetails from './components/PostDetails';

//import Counter from"./components/Counter";
import {  Switch,  Router,Route} from "react-router-dom";
import {connect} from'react-redux';
//import {fetchTaskData} from'./store/ActionTypes'
import { Login } from './components/login';
import HomePage from './components/HomePage'
import { PrivateRoute } from './components/privateRoute';


class App extends React.Component { 
constructor(props) {
  super(props);
  
}

  render(){
    const AppContainer =(props)=> (<>    
      <Navbar />    
      <div className="container">   
      <Switch >    
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/about" component={About} />   
          <Route path="/login" render={ () => <Login  {...this.props}/> }  />   
          <Route path="/PostDetails/:postID" component={PostDetails} />         
        </Switch>             
    </div>     
    </>
    );
        return <AppContainer/>
  }
  
}


//export default connect(mapStatetoProp,fetchTaskData())(App);

export default connect()(App);

