import axios from "axios";
/*https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao*/
/*action types*/
export const GET_TASKS='GET_TASKS';
export const FETCH_TASKS='FETCH_GET_TASKS';
export const FETCH_TASK_ERROR='FETCH_TASK_ERROR';
export const MARK_AS_COMPLETED='MARK_AS_COMPLETED';
export const INCREMENT='INCREMENT';
export const DECREMENT='DECREMENT';

// export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
// export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
// export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const apiUrl='http://localhost:3030/tasks'
/*action creators*/

export const fetchTasks =(data)=> {
    return{type:FETCH_TASKS ,data    }
}

export const fetchTaskError =(error)=> {
  return{type:FETCH_TASK_ERROR ,    }
}

export const fetchTaskData = () => {
  console.log('fetchTaskData')
    return dispatch => {
      return axios.get(apiUrl)
        .then(response => {
          dispatch(fetchTasks(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
export const markComplete=(id)=>{
  return { type:MARK_AS_COMPLETED, id}
}
   

 



// mark(task){
//   (task.status ===1)? task.status=2:task.status=1;
//   axios.put(`${apiUrl}/${task.id}`,{task})
//   .then( res=>{  const result= res.data;
//      console.log(result);
//      this.getTask()})
//   .catch(err =>{console.log(err)}