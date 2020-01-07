import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TodoItem.css'
export class TodoItem extends Component {

    checkStyle=()=>{
        if(this.props.todo.status !== 1){
            return 'completed'
        }
        return 'not-completed'
    }
    checkedOrNot=()=>{
        if(this.props.todo.status === 2){
            return true
        }
        return false
    }
    
    render() {
        const {id,task,status}= this.props.todo;
        return (
            <div>
            <div className="row">
                    <div className="col-1">
                        
                    <input type="checkbox"  checked = {this.checkedOrNot()} onChange={this.props.markComplete.bind(this,{id,task,status})} />
                    </div>
                    <div className="col">
                        <div className="row">                        
                        <div className="col-6">
                     <p className={this.checkStyle()}>{task} <span>status -{status}</span></p>

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
