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
    return{type:FETCH_TASKS ,data }
}


/*****************************
GET tasks 
*****************************/
export const fetchTaskData = () => { 
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
/*****************************
create new tasks 
*****************************/
export const newTask =(task) =>{
  return dispatch => {
    return axios.post(`${apiUrl}`,task)
    .then(response => { 
      console.log("newTask success" + response)
      dispatch(fetchTaskData())
    })
    .catch(error => {
      throw(error);
    });
  }

}
/*****************************
create update  tasks 
*****************************/
export const updateTask =(task) =>{
  return dispatch => {
    return axios.put(`${apiUrl}/${task.id}`,task)
    .then(response => { 
      console.log("edit" + response)
      dispatch(fetchTaskData())
    })
    .catch(error => {
      throw(error);
    });
  }

}


/****************************
|       delete task      |
/*****************************/
export const deleteTask =(taskId)=>{
  return dispatch =>{ 
    return axios.delete(`${apiUrl}/${taskId}`)
    .then(response => {       
      dispatch(fetchTaskData())
    })
    .catch(error => {
      throw(error);
    });
  }
}