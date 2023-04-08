import { combineReducers } from 'redux';
import columnsReducer from './columns';
import rateReducer from './rate';
import schoolboyReducer from './schoolboy';

export default combineReducers({
    columns: columnsReducer,
    rate: rateReducer,
    schoolboy: schoolboyReducer,
});