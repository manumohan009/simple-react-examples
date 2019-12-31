import { BUY_CAKE } from "./cake.types"

const INITIAL_STATE = {
    numberOfCakes: 10
}

const cakeReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default:
            return state 
    }
}

export default cakeReducer;