import {
    GET_TASKS,FETCH_TASKS,MARK_AS_COMPLETED,INCREMENT,DECREMENT
  } from './ActionTypes'
 
  const initialState = {
    loading: false,
    todos:[{id:1,task:'setup redux',status:'1'}],
    post:[],
    users: [],
    error: '',
    count:0
  }
  
  const todoReducer = (state = initialState, action) => {   
    switch (action.type) {
      case GET_TASKS: 
        return {
          ...state, 
          todos:action.data,      
          loading: true
        }
        case FETCH_TASKS: 
        return {
          ...state, 
          todos:action.data,      
          loading: true
        }       
       
          case DECREMENT: 
        return {          
            ...state, 
            count:state.count-1  
            
          }   
          case INCREMENT: 
        return {          
            ...state, 
            count:state.count+1  
            
          }   
      default:
         return state
    }
  }
 
  export const getTodos = state => state.todos;
  
  export default todoReducer