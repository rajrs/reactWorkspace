import React from 'react';
import './App.css';
import Todos from './components/Todo';
import axios from 'axios';
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
     console.log(id)
     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      res=>{ const result= res.data;  console.log(result)
        this.setState({todos:[...this.state.todos.filter((todo)=>
          {if(todo.id !== id){return todo }  console.log(todo); return false})]})
      }
     ).catch(err=>{console.log(err)})
    
   }
  render(){   
    return (
      <div className="App">
     <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem}/>
      </div>
      
    );
  }
  
}

export default App;
