import {
    GET_TASKS,FETCH_TASKS,INCREMENT,DECREMENT,UPDATE_TASK_BEGIN,UPDATE_TASK_END,SET_USER,UNSET_USER
  } from './ActionTypes'
 
  const initialState = {
    loading: false,
    todos:[{id:1,task:'setup redux',status:'1'}],
    post:[],
    user: null,
    isUpdate:null,
    error: '',
    isAuth:false,
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
        case UPDATE_TASK_BEGIN:
          return {
            ...state,
            isUpdate:action.data
          }  
          case UPDATE_TASK_END:
          return {
            ...state,
            isUpdate:null
          }  
       case SET_USER:
         return{...state, isAuth:true,user:action.data         
       }
       case UNSET_USER:
         return {...state,isAuth:false,user:null}
        
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