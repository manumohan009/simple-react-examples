import { createStore, applyMiddleware } from 'redux'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk';
import {logger } from 'redux-logger';
// import { buyCake } from './cake-example/cake.actions';

const middlewares = [thunk,logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares));


// console.log('Initial state', store.getState());
// const unsubscribe = store.subscribe(()=>{
//     console.log('Updated state', store.getState()); 
// })
// store.dispatch(buyCake());
// unsubscribe();

export default store;
