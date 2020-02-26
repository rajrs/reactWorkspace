import React, { Component } from 'react'
import { connect } from 'react-redux'
import { INCREMENT,DECREMENT } from '../store/ActionTypes'


 class Counter extends Component {
  increment = () => {
    // fill in later
    console.log('from inc')
    this.props.dispatch({type:INCREMENT})
  }
  decrement = () => {
    // fill in later
    console.log('from dec')
    this.props.dispatch({type:DECREMENT})
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
