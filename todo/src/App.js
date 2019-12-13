import React from 'react';
import './App.css';
import Todos from './components/Todo';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import {

  Switch,
  Route
} from "react-router-dom";
class App extends React.Component { 
  state={
       todos:[]
  }
  componentDidMount(){   
    axios.get('https://jsonplaceholder.typicode.com/todos/')
    .then(res=>{ const result= res.data; this.setState({todos:result})})
    .catch(err =>{console.log(err)})
  }
  markComplete =(id)=>{ 
    this.setState({todos:this.state.todos.map(
      todo=> {
          if(todo.id === id){
            todo.completed = !todo.completed        
          }
         return todo
       }
    )})
   }
   deleteItem=(id)=>{   
     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      res=>{ const result= res.data;  console.log(result)
        this.setState({todos:[...this.state.todos.filter((todo)=>
          {if(todo.id !== id){return todo }  console.log(todo); return false})]})
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
         
        </Switch>
      </div>
     
      </>
    );
  }
  
}

export default App;
