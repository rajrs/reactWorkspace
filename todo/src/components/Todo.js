import React from 'react';
//import './App.css';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'


class Todos extends React.Component {
   
  render(){
    
    return this.props.todos.map((todo)=>(<TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}  deleteItem={this.props.deleteItem}/>))
  }
  
}
Todos.propTypes= {
    todos: PropTypes.array.isRequired
}
export default Todos;