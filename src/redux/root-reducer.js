import {combineReducers} from 'redux';
import {CreateReducer} from './create/Create.reducer';
import {editReducer} from './edit/edit.reducer';

export default combineReducers({
    Create : CreateReducer,
    Edit : editReducer
})