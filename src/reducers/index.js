import {combineReducers} from 'redux';
import postReducer from '../reducers/load';
import countReducer from '../reducers/counter'

// 通过combineReducers把多个 reducer 合并
const rootReducers=combineReducers({
    count:countReducer,
    load:postReducer
})
export default rootReducers