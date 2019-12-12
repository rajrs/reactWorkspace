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
            <div class="row">
                    <div className="col-1">
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} />
                    </div>
                    <div className="col">
                        <div className="row">                        
                        <div className="col-6">
                        <p className={this.checkStyle()}>{title}</p>
                        </div>
                        <div className="col-6">
                        <span className="btn btn-default" onClick={this.props.deleteItem.bind(this,id)}>x</span>
                        </div>
                        </div>
                    </div>
                 
                </div>
                
    
            </div>
        )
    }
}
TodoItem.propTypes= {
    todo: PropTypes.object.isRequired
}
export default TodoItem
