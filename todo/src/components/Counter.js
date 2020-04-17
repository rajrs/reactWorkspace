import React, { Component } from 'react'
import { connect } from 'react-redux'
import { INCREMENT,DECREMENT } from '../store/ActionTypes'


 class Counter extends Component {
  increment = () => {    
    if(this.props.count >=0){
      this.props.dispatch({type:INCREMENT})
    }
    }
    
  decrement = () => {  
    if(this.props.count >0){
      this.props.dispatch({type:DECREMENT})
    }
    
  }

    render() {
        return (
            <div>
              <div className="click-count">
                <button onClick={this.decrement}>-</button>
                   Button presses: {this.props.count}
                <button onClick={this.increment}>+</button>
              </div>        
            </div>
        )
    }
}
const mapStateToProp=(state)=>{ 
  return {count:state.count}
}
export default connect(mapStateToProp,)(Counter) ;
