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
            
            // formErrors: {
            //     task: '',
            //     status: ''
            // },
            // taskValid: false,
            // statusValid: false,
            // formValid: false
        }
        this.handleUserInput = this.handleUserInput.bind(this)
        this.submitForm = this.submitForm.bind(this)
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

    // static getDerivedStateFromProps(props, state) {
    //     if (props.FormUpdateTask.isUpdate) {
    //       this.setState({id:props.FormUpdateTask.id,task:props.FormUpdateTask.task})           
    //     } 
    //   }
    // componentDidUpdate(prevProps) {
    //     console.log('logs on update')
    //     if ((this.props.FormUpdateTask.id !== prevProps.FormUpdateTask.id))  {
    //         this.setState({id:this.props.FormUpdateTask.id,task:this.props.FormUpdateTask.task})           
    //     }
    //   }
submitForm(e){   
    e.preventDefault();
    let data= {task:this.state.task, status:    this.state.status}
axios.post('http://localhost:3030/tasks',data).then(
    res=>{ const result= res;  console.log(result)
      //this.getTask()
    }
   ).catch(err=>{console.log(err)})
}
render() {
    return ( <div>
      
         {/* <form onSubmit={this.submitForm}>  */}
   
        <div className="form-inline">
        <div className="form-group mb-2" >       
         <label htmlFor="task"  className = "sr-only" > Task </label> 
         <input type="text"   value={ this.state.task} onChange={this.handleUserInput.bind(this)}
            className="form-control"    name="task" id="task" placeholder = "Enter your task" />
        </div> 
        <div className="form-group mx-sm-3 mb-2" >
            <label htmlFor="status"  className = "sr-only" > status </label>
            <input type="text"  className="form-control " value={ this.state.status } onChange={this.handleUserInput.bind(this) }
            id="status" name="status"  placeholder="set status for your task" />
            </div> 
            <button type="submit" onClick={this.submitForm}className="btn btn-primary mb-2"> submit </button> 
        
        </div>
        {/* </form>  */}
        </div>
    )
}
}   