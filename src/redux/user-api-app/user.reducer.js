import UserActionTypes from './user.types'

const INITIAL_STATE = {
    userData: null,
    isFetching: false,
    errorMessage: null,
}
const userReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case UserActionTypes.FETCH_USERS_START: 
            return{
                ...state,
                isFetching: true
            }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                userData: action.payload
            }
        case UserActionTypes.FETCH_USERS_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
        
    }
}

export default userReducer;