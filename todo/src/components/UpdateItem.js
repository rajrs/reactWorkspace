import React, { Component } from 'react';
import {connect} from'react-redux';
import {updateTask,clearBtn} from'../store/ActionTypes'
export class UpdateItem extends Component {
    constructor(props) {       
        super(props);
        this.state={
            id:this.props.updateData.id,
            task: this.props.updateData.task,
            status: this.props.updateData.status
               
        }        
        this.saveData= this.saveData.bind(this)
    }
    
    handleChange= (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
                [name]: value
            })
    }
    saveData() {       
        let task = this.state;
        this.props.dispatch(updateTask(task))
        
    }
    ClearBtn= ()=>{
        this.props.dispatch(clearBtn())
    }
    render() {
        return (  
            <div className="editItemcol-12">
                <div className="h4">Edit Task</div>
                    <div className="row">
                        <div className="col-6 form-group mb-2">                           
                            <input type="text" className="form-control " name="task" onChange={this.handleChange} value={this.state.task}/> 
                        </div>
                        <div className="col-6">
                            <span className="btn btn-sm btn-primary mr-2" onClick={this.saveData} >Update Item</span>
                            <span className="btn btn-sm btn-light" onClick={this.ClearBtn}>Cancel</span>
                        </div>
                    </div>
                </div>
        )
    }
}

export default  connect(null,null)(UpdateItem)
