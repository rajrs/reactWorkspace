import React, { Component } from 'react';
import {connect} from'react-redux';
import {updateTask} from'../store/ActionTypes'
export class UpdateItem extends Component {
  
    state={
        id:this.props.updateData.id,
        task: this.props.updateData.task,
        status: this.props.updateData.status       
    }
    handleChange= (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
                [name]: value
            })
    }
    saveData(task){     
        this.props.dispatch(updateTask(task))
    }
    render() {
        //console.log("update item"+JSON.stringify(this.state))
        return (           
            <div className="editItemcol-12">
                <p>{JSON.stringify(this.props.updateData)}</p>               
                    <div className="row">
                        <div className="col-6">                           
                            <input type="text" className="form-control" name="task" onChange={this.handleChange} value={this.state.task}/> 
                        </div>
                        <div className="col-6">
                            <span className="btn btn-sm btn-primary mr-2" onClick={()=>{this.saveData(this.state)}} >Update Item</span>
                            <span className="btn btn-sm btn-light">Cancel</span>
                        </div>
                    </div>
                </div>
        )
    }
}

export default  connect(null,null)(UpdateItem)
