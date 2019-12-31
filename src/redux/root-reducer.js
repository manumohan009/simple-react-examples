import { combineReducers } from 'redux';

import countReducer from './count-app/count.reducer';
import cakeReducer from './cake-app/cake.reducers';
import userReducer from './user-api-app/user.reducer';


const rootReducer = combineReducers({
    count: countReducer,
    cake: cakeReducer,
    users: userReducer
})

export default rootReducer;