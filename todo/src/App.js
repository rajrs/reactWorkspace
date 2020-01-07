import React from 'react';
import './App.css';
import Todos from './components/Todo';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import PostDetails from './components/PostDetails';
import {
  Switch,
  Route
} from "react-router-dom";
class App extends React.Component { 
  state={
       todos:[]
  }
  componentDidMount(){   
    this.getTask()
  }
  //to get all task
  getTask(){
    axios.get('http://localhost:3030/tasks')
    .then(res=>{  const result= res.data.result; this.setState({todos:result})})
    .catch(err =>{console.log(err)})
  }
  markComplete =(task)=>{
    (task.status ===1)? task.status=2:task.status=1; 
    axios.put(`http://localhost:3030/tasks/${task.id}`,{task})
  .then( res=>{  const result= res.data; console.log(result);this.getTask()})
  .catch(err =>{console.log(err)})
   }
   deleteItem=(id)=>{   
     axios.delete(`http://localhost:3030/tasks/${id}`).then(
      res=>{ const result= res;  console.log(result)
        this.getTask()
      //   this.setState({todos:[...this.state.todos.filter((todo)=>
      //     {if(todo.id !== id){return todo } ; return false})]})
      }
     ).catch(err=>{console.log(err)})
    
   }
  render(){   
    return (<>   
    <Navbar />    
        <div className="container">
        <Switch>
          <Route exact path="/">
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>   
          <Route path="/PostDetails/:postID" component={PostDetails} />          
             
        </Switch>
      </div>     
      </>
    );
  }
  
}

export default App;
