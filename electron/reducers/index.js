import { combineReducers } from 'redux';

// Reducers
import helloReducer from './helloReducer';

// Combine Reducers
var reducers = combineReducers({
    messageState: helloReducer
});

export default reducers;
