
import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchPosts } from './../post.actions';

function* ageUpAsync(){
    yield put({type: 'AGE_UP_ASYNC', value: 1})
}

function* ageDownAsync(){
    yield put({type: 'AGE_DOWN_ASYNC', value: 1 })
}

function* fetchPostsAsync(){
    yield put({type: 'FETCH_POSTS_START_ASYNC'})
    try{
        const result = yield call(fetchPosts)
        yield put({type: 'FETCH_POSTS_SUCCESS_ASYNC', payload: result.data})
    }catch(e){
        yield put({type: 'FETCH_POSTS_FAILURE_ASYNC', payload: 'Api call failed'})
    }
}

export  function* watchAction(){
    yield takeLatest('AGE_UP', ageUpAsync)
    yield takeLatest('AGE_DOWN', ageDownAsync)
    yield takeLatest('FETCH_POSTS', fetchPostsAsync)
}