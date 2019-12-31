import { CountActionTypes } from './count.types';

const INITIAL_STATE = {
    count: 0
}

const countReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case CountActionTypes.ADD_COUNT: 
            return {
                ...state,
                count: state.count+1
            }
        default:
            return state;
    }
}

export default countReducer;