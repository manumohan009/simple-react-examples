import { combineReducers } from 'redux';

import countReducer from './count-app/count.reducer';
import cakeReducer from './cake-app/cake.reducers';
import userReducer from './user-api-app/user.reducer';
import postReducer from './redux-saga-app/post.reducer';
import ageReducer from './redux-saga-app/age.reducer';


const rootReducer = combineReducers({
    count: countReducer,
    cake: cakeReducer,
    users: userReducer,
    posts: postReducer,
    age: ageReducer
})

export default rootReducer;