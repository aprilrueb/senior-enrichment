import { combineReducers} from 'redux';
import students from './students';
import campuses from './campuses';
import student from './student';
import campus from './campus';

const rootReducer = combineReducers({campuses, students, campus, student});

export default rootReducer;
