import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
const Todos =(props)=>{  
   const item = props.todos.map((todo)=>(<TodoItem key={todo.id} todo={todo} />))
      return item
}
Todos.propTypes= {
    todos: PropTypes.array.isRequired
}
export default Todos;
