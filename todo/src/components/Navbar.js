import React,{Component} from 'react';
import { Link  } from "react-router-dom";
import {connect} from'react-redux';
 class Navbar extends Component {
        constructor(props){
            super(props)
                }
render() {
return (<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <span className="navbar-brand" >Navbar</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">{this.props.isAuth &&(<>
                <li className="nav-item active">
                    <Link className="nav-link" to="/">My Task</Link>                   
                </li>
            </>)}
          
                {
                     !this.props.isAuth   &&  (<>
                     <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                     <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                      </>)
                }
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>                   
                </li>              
                <li className="nav-item">
                     <Link className="nav-link" to="/about">Contact</Link>                   
                </li>
            </ul>{ this.props.isAuth && (<>  <ul className="navbar-nav  navbar-nav align-items-center ml-auto">
               <li>   <Link className="nav-link" to="#">userName</Link>  </li>
               <li>  <Link className="nav-link" to="#">Logout</Link> </li>
           </ul></>)}
          
        </div>
    </nav>
    </>
    )
}
}
function mapStateToProps(state) {
    return {isAuth:state.isAuth};
  }
export default connect(mapStateToProps)(Navbar);
