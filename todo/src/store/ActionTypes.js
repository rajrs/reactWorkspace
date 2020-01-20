/*action types*/
export const GET_TASKS='GET_TASKS';
// export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
// export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
// export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

/*action creators*/

export function getTask(text){
    return{ type:GET_TASKS,text}
}