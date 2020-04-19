import React, {    Component} from 'react'
import {connect} from'react-redux';
import {newTask} from'../store/ActionTypes'
export  class TaskForm extends Component {
    constructor(props) {
        console.log('TaskForm'+JSON.stringify(props))
        super(props);
        this.state = {          
            task: '',
            status: '1'
        }
        this.handleUserInput = this.handleUserInput.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
 
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

  
submitForm(e){   
    e.preventDefault();
    let taskData= {task:this.state.task, status:this.state.status}     
    this.props.dispatch(newTask(taskData))
    this.setState({task: '',status: '1'})
}
render() {
    return ( <div>
            <div className="form-inline">
            <div className="form-group mb-2" >       
            <label htmlFor="task"  className ="sr-only" > Task </label> 
            <input type="text"   value={ this.state.task} onChange={this.handleUserInput.bind(this)}
                className="form-control"    name="task" id="task" placeholder = "Enter your task" />
            </div> 
            <div className="form-group mx-sm-3 mb-2 d-none" >
                <label htmlFor="status"  className = "sr-only" > status </label>
                <input type="text"  className="form-control " value={ this.state.status } onChange={this.handleUserInput.bind(this) }
                id="status" name="status"  placeholder="set status for your task" />
            </div> 
                <button type="submit" onClick={this.submitForm}className="btn btn-primary ml-1 mb-2"> submit </button> 
            </div>      
        </div>
    )
}
}
export default connect(null,null)(TaskForm);   