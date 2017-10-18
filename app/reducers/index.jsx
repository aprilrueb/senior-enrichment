import { combineReducers} from 'redux';
import students from './students';
import campuses from './campuses';

const rootReducer = combineReducers({campuses, students});

export default rootReducer;
