import React, {
    Component
} from 'react'
import axios from 'axios';
export default class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            status: '1',
            formErrors: {
                task: '',
                status: ''
            },
            taskValid: false,
            statusValid: false,
            formValid: false
        }
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
                [name]: value
            }
            // ,
            // () => {
            //     this.validateField(name, value)}
            
            );
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let taskValid = this.state.taskValid,
            statusValid = this.state.statusValid;
        switch (fieldName) {
            case 'task':
                taskValid = value.length >= 1;
                fieldValidationErrors.task = taskValid ? '' : ' is invalid';
                break;
            case 'status':
                statusValid = value.length >= 1 && value.length != null;
                fieldValidationErrors.status = statusValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            taskValid,
            statusValid
        }, this.validateForm);
    }
    validateForm() {
        //this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }
submitForm(state){
   console.log(state.task)

// axios.post('http://localhost:3030/tasks',).then(
//     res=>{ const result= res;  console.log(result)
//       this.getTask()
//     }
//    ).catch(err=>{console.log(err)})
}
render() {
    return ( <div>
         {/* <form onSubmit={this.submitForm}>  */}
        <div className="form-inline">
        <div className="form-group mb-2" >
       
         <label htmlFor="task"  className = "sr-only" > Task </label> 
         <input type="text"   value={ this.state.task} onChange={this.handleUserInput }
            className="form-control"    name="task" id="task" placeholder = "Enter your task" />
        </div> 
        <div className="form-group mx-sm-3 mb-2" >
            <label htmlFor="status"  className = "sr-only" > status </label>
            <input type="text"  className="form-control " value={ this.state.status } onChange={this.handleUserInput }
            id="status" name="status"  placeholder="set status for your task" />
            </div> 
            <button type="submit" onClick={this.submitForm}className="btn btn-primary mb-2"> submit </button> 
        
        </div>
        {/* </form>  */}
        </div>
    )
}
}   