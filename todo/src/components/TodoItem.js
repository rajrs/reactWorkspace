import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from'react-redux';
import {deleteTask,updateTask,UpdateTaskBegin} from'../store/ActionTypes'
import './TodoItem.css';
export class TodoItem extends Component {   
    checkStyle=()=>{   
        return  (this.props.todo.status !== 1)? 'completed' :'not-completed'; 
    }
    checkedOrNot=()=>{
        return (this.props.todo.status === 2)? true:false;        
    }
    OnEditValue =(task)=>{       
        this.props.dispatch(UpdateTaskBegin(task))      
    }
    onMarkComplete= (task)=>{         
        (task.status ===1)? task.status=2 : task.status=1;       
        this.props.dispatch(updateTask(task))     
    }
    OnDelete=(id)=>{
        this.props.dispatch(deleteTask(id))
    }    
    render() {
        const {id,task,status}= this.props.todo;       
        return (                
            <div className="row">                 
                <div className="showItem col-12" >
                <div className="row">
                    <div className="col-1"> 
                    <input type="checkbox"  checked={this.checkedOrNot()} onChange={()=>this.onMarkComplete({id,task,status})}/>
                    </div>
                    <div className="col-11">
                        <div className="row">                        
                            <div className="col-6">
                                <div className="form-group mb-2">
                                    <p className={this.checkStyle() } >{task} <span>status -{status}</span></p>
                                </div>                               
                            </div>
                            <div className="col-6">
                                <span className="btn btn-info btn-sm mr-2" onClick={this.OnEditValue.bind(this,{id,task,status})} >Edit</span> 
                                <span className="btn btn-danger btn-sm" onClick={()=>this.OnDelete(id)}>x</span>
                            </div>
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
export default  connect(null,null)(TodoItem);
