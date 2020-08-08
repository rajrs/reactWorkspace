
import React, {Component} from 'react'
import {connect} from'react-redux';
import {UserLogin} from'../store/ActionTypes'
import { bindActionCreators } from 'redux'
export class Login extends Component {
    constructor(props) {    
        super(props);
        this.state={email:'',password:''}
        this.handleUserInput = this.handleUserInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleUserInput = (e) => {
        const Fieldname = e.target.name;
        const value = e.target.value;
        this.setState({[Fieldname]: value});
    }  
    onSubmit(){
        //console.log(this,this.state)
        let userdetail=this.state;
        //console.log(this.props)
       this.props.dispatch(UserLogin(userdetail))
    }
    render (){
        return (<div>
            <p>{JSON.stringify(this.state)}</p>
                    <h3>login</h3>
                    <label>Email</label>
                    <div className="input-group mb-3"> 
                        <input type="text" className="form-control" name="email" placeholder="Username" onChange={this.handleUserInput.bind(this)}aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <label>Password</label>
                    <div className="input-group mb-3"> 
                        <input type="password" name="password" className="form-control" placeholder="password" aria-label="password" onChange={this.handleUserInput.bind(this)} aria-describedby="basic-addon1"/>
                    </div>
                    <button onClick={this.onSubmit}   className="btn btn-primary">submit</button>
                </div>)
    }
}
const mapDispatchToProps = dispatch=>{ return{loginAction: bindActionCreators({UserLogin},dispatch)}}

export default connect()(Login);   