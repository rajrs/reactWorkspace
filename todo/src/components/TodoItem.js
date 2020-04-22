import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from'react-redux';
import {deleteTask,updateTask} from'../store/ActionTypes'
import './TodoItem.css'
import UpdateItem from './UpdateItem';
export class TodoItem extends Component {   
    checkStyle=()=>{   
        return  (this.props.todo.status !== 1)? 'completed' :'not-completed'; 
    }
    checkedOrNot=()=>{
        return (this.props.todo.status === 2)? true:false;        
    }
    OnEditValue =(id)=>{
        console.log('on edit',id)
       // this.isUpdate = true;
    //return this.props.isUpdate = !this.props.isUpdate;
    }
    onMarkComplete= (task)=>{
        //console.log(task);        
        (task.status ===1)? task.status=2 : task.status=1;       
        this.props.dispatch(updateTask(task))     
    }
    OnDelete=(id)=>{
        //console.log(id)
        this.props.dispatch(deleteTask(id))
    }    
    render() {
        const {id,task,status}= this.props.todo;       
        return (                
            <div className="row">                 
                <div className="showItem col-12" >
                <div className="row">
                    <div className="col-1">                        
                    {/* <input type="checkbox"  checked = {this.checkedOrNot()} onChange={this.props.markComplete.bind(this,{id,task,status})} /> */}
                    <input type="checkbox"  checked={this.checkedOrNot()} onChange={()=>this.onMarkComplete({id,task,status})}/>
                    </div>
                    <div className="col-11">
                        <div className="row">                        
                            <div className="col-6">
                            <p className={this.checkStyle() } >{task} <span>status -{status}</span></p>
                            </div>
                            <div className="col-6">
                            <span className="btn btn-info btn-sm mr-2" onClick={this.OnEditValue.bind(this,id)} >Edit</span> 
                            <span className="btn btn-danger btn-sm" onClick={()=>this.OnDelete(id)}>x</span>
                                
                            </div>
                        </div>
                    </div> 
                    </div>                     
                </div>  
                {/* <UpdateItem updateData={this.props.todo}/>*/}
            </div>   
             )
}
}

TodoItem.propTypes= {
    todo: PropTypes.object.isRequired
}
export default  connect(null,null)(TodoItem);
