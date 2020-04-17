import React, { Component } from 'react'
import {UpdateItem} from './UpdateItem'
import {connect} from'react-redux';
import PropTypes from 'prop-types'
import {markAsCompleted,deleteTask} from'../store/ActionTypes'
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
    EditToggle =()=>{
    return this.props.isUpdate = !this.props.isUpdate;
    }
    onMarkComplete= (task)=>{
        console.log(task);        
        (task.status ===1)? task.status=2 : task.status=1;
        console.log(task);
        this.props.dispatch(markAsCompleted(task))
       // console.log(task)
        //this.props.dispach(markAsCompleted(task))
        
    }
    OnDelete=(id)=>{
        console.log(id)
        this.props.dispatch(deleteTask(id))
    }
    
    render() {
        const {id,task,status,isUpdate}= this.props.todo;      
        return (
            <div>
            <div className="row">
                {(isUpdate )? (  <UpdateItem updateData={this.props.todo}/>):( 
                <div className="showItem col-12" >
                    <div className="row">
                        <div className="col-1">                        
                        {/* <input type="checkbox"  checked = {this.checkedOrNot()} onChange={this.props.markComplete.bind(this,{id,task,status})} /> */}
                        <input type="checkbox"  checked = {this.checkedOrNot()} onClick={()=>this.onMarkComplete({id,task,status})}/>
                        </div>
                        <div className="col-11">
                            <div className="row">                        
                                <div className="col-6">
                                <p className={this.checkStyle()}>{task} <span>status -{status}</span></p>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-2">
                                        <span className="btn btn-info" >Edit</span> 
                                        </div>
                                        <div className="col-2">
                                        <span className="btn btn-danger" onClick={()=>this.OnDelete(id)}>x</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                     </div>                     
                    </div>)}       
                </div>   
            </div> )
    
}

}

TodoItem.propTypes= {
    todo: PropTypes.object.isRequired
}
export default  connect(null,null)(TodoItem);
