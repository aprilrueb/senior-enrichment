import axios from 'axios';

// ACTION TYPES
const GOT_STUDENT_FROM_SERVER = 'GOT_STUDENT_FROM_SERVER';

// ACTION CREATORS
export function gotStudentFromServer(student){
  return {
    type: GOT_STUDENT_FROM_SERVER,
    student
  };
}

// THUNK CREATORS
export function fetchStudent (studentId) {
  return function thunk (dispatch) {
    return axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
        const action = gotStudentFromServer(student);
        dispatch(action);
      });
  };
}

// REDUCER
const studentReducer = function(state = [], action) {
  switch (action.type) {
    case GOT_STUDENT_FROM_SERVER:
      return action.student;
    default:
      return state;
  }
};

export default studentReducer;
