import {
    GET_TASKS   
  } from './ActionTypes'

  const initialState = {
    loading: false,
    users: [],
    error: ''
  }

  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_TASKS:
        return {
          ...state,
          loading: true
        }
      
      default: return state
    }
  }
  
  export default todoReducer