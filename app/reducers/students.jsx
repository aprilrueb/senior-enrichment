import axios from 'axios';

// ACTION TYPES
const GOT_STUDENTS_FROM_SERVER = 'GOT_STUDENTS_FROM_SERVER';

// ACTION CREATORS
export function gotStudentsFromServer(students){
  return {
    type: GOT_STUDENTS_FROM_SERVER,
    students
  };
}

// THUNK CREATORS
export function fetchStudents () {
  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = gotStudentsFromServer(students);
        dispatch(action);
      });
  };
}

// REDUCER
const studentsReducer = function(state = [], action) {
  switch (action.type) {
    case GOT_STUDENTS_FROM_SERVER:
      return action.students;
    default:
      return state;
  }
};

export default studentsReducer;
