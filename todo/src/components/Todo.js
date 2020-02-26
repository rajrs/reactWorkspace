import React from 'react';
//import './App.css';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
const Todos =(props)=>{
  console.log('prop'+JSON.stringify(props))
    //if (props.todos.length) {
        const item = props.todos.map((todo)=>(<TodoItem key={todo.id} todo={todo}/>))
        return item
    //}else{
      //  return  (<p>no items available</p>)
      
    //}
  

}

// class Todos extends React.Component {   
//   render(){    
//     return this.props.todos.map((todo)=>(<TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}  deleteItem={this.props.deleteItem}/>))
//   }
//   }
Todos.propTypes= {
    todos: PropTypes.array.isRequired
}
export default Todos;
