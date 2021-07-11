
const INITIAL_STATE = {
    postData: null,
    isFetching: false,
    errorMessage: null,
}
const postReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'FETCH_POSTS_START_ASYNC':
            return {
                ...state,
                isFetching: true,
                postData: null,
                errorMessage: null,
            }
        case 'FETCH_POSTS_SUCCESS_ASYNC':
            return {
                ...state,
                isFetching: false,
                postData: action.payload,
                errorMessage: null,
            }
        case 'FETCH_POSTS_FAILURE_ASYNC':
            return {
                ...state,
                isFetching: false,
                postData: null,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default postReducer;