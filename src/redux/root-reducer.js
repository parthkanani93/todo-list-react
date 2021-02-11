import {combineReducers} from 'redux';
import {CreateReducer} from './create/Create.reducer';

export default combineReducers({
    Create : CreateReducer
})