import {FETCH_USER_REQUEST ,FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from './userTypes'
import axios from 'axios'
export const fetchUsersRequest = ()=>{
    return {
        type:FETCH_USER_REQUEST
    }
}

export const fetchUsersSuccess = users=>{
    return {
        type:FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error=>{
    return {
        type:FETCH_USER_FAILURE,
        payload: error

    }
}

export const fetchUsers = ()=>{
    return async(dispatch)=>{
        try {
            dispatch(fetchUsersRequest)
            const response =await axios.get(' https://jsonplaceholder.typicode.com/users')

            const users = response.data
            dispatch(fetchUsersSuccess(users))
            
        } catch (error) {
            const errorMsg = error.message
            console.log(errorMsg);
            dispatch(fetchUsersFailure(errorMsg))
            
        }
    }
}