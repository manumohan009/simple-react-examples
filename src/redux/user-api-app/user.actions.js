import UserActionTypes from './user.types';
import axios from 'axios';

export const fetchUsersStart = ()=>({
    type: UserActionTypes.FETCH_USERS_START
});

export const fetchUsersStartAsync = ()=>{
    return dispatch=>{
        const userUrl = "https://jsonplaceholder.typicode.com/users/";
        dispatch(fetchUsersStart());
        axios.get(userUrl).then(res => {
            dispatch(fetchUsersSuccess(res.data))
        }).catch(error=>dispatch(fetchUsersFailure(error.message)))
    }
}

export const fetchUsersSuccess = (users)=>({
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: users
});

export const fetchUsersFailure = (errorMessage)=>({
    type: UserActionTypes.FETCH_USERS_FAILURE,
    payload: errorMessage
});