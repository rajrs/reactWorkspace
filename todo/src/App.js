import React from 'react';
import './App.css';
import Todos from './components/Todo';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import PostDetails from './components/PostDetails';
import TaskForm from './components/TaskForm';
import Counter from"./components/Counter";
import {
  Switch,
  Route
} from "react-router-dom";
import {connect} from'react-redux';
import {fetchTaskData} from'./store/ActionTypes'

class App extends React.Component { 
  
  // componentDidMount(){   
  //   this.getTask()
  // }
  //to get all task
  // getTask(){
  //   axios.get('http://localhost:3030/tasks')
  //   .then(res=>{  const result= res.data.result; 
  //      res= result.map((item) =>{ return {...item,isUpdate:false}});   
  //     this.setState({todos:res})})
  //   .catch(err =>{console.log(err)})
  // }
  // markComplete =(task)=>{
  //   (task.status ===1)? task.status=2:task.status=1; 
  //   axios.put(`http://localhost:3030/tasks/${task.id}`,{task})
  // .then( res=>{  const result= res.data; console.log(result);this.getTask()})
  // .catch(err =>{console.log(err)})
  //  }
  //  deleteItem=(id)=>{   
  //    axios.delete(`http://localhost:3030/tasks/${id}`).then(
  //     res=>{ const result= res;  console.log(result)
  //       this.getTask()
      //   this.setState({todos:[...this.state.todos.filter((todo)=>
      //     {if(todo.id !== id){return todo } ; return false})]})
      //}
     //).catch(err=>{console.log(err)})    
   //}
  //  findArrayIndex(arr,attr,value){
  //   return arr.map((item,i)=>{
  // if(item[attr] === value) {return i}
  // else{ return -1}
  // }).filter(item =>{ return item !== -1});
  // }
  //  updateItem =(task)=>{ 
  //   let  copy = [...this.state.todos];
  //   let filterdindex =this.findArrayIndex( copy,'id',task.id)[0]   
  //   console.log(filterdindex);
  //   copy = copy.map((item) =>{ return {...item,isUpdate:false}}); 
    
  //   copy[filterdindex].isUpdate = !copy[filterdindex].isUpdate
  //   this.setState({todos:copy})
  //    //task.isUpdate = !task.isUpdate;
     
  //  }
  render(){   
    return (<>   
    <Navbar />    
        <div className="container">
          {/* <Counter /> */}
        <Switch>
          <Route exact path="/"> 
            <h3>Add new Task</h3>
            <TaskForm />
    {/* <p>{JSON.stringify(this.props)  }</p> */}
          <Todos todos={this.props.todos} />
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
const mapStatetoProp=(state)=>{ 
  return {todos:state.todos}
}

export default connect(mapStatetoProp,fetchTaskData())(App);
