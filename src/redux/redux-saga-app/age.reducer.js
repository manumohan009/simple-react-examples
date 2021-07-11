const initialState = 20

const ageReducer =  (state=initialState, action) =>{
    let newState = state
    switch(action.type){
        case 'AGE_UP_ASYNC':
            newState += action.value;
            break;
        
        case 'AGE_DOWN_ASYNC':
            newState -= action.value;
            break;
    }
    return newState;
}

export default ageReducer;