import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TodoItem.css'
export class TodoItem extends Component {
    checkStyle=()=>{
        if(this.props.todo.completed){
            return 'completed'
        }
        return 'not-completed'
    }
    
    render() {
        const {id,title}= this.props.todo;
        return (
            <div>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} />
    <p className={this.checkStyle()}>{title}</p><span onClick={this.props.deleteItem.bind(this,id)}>x</span>
            </div>
        )
    }
}
TodoItem.propTypes= {
    todo: PropTypes.object.isRequired
}
export default TodoItem
