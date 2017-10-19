import axios from 'axios';

// ACTION TYPES
const GOT_CAMPUS_FROM_SERVER = 'GOT_CAMPUS_FROM_SERVER';

// ACTION CREATORS
export function gotCampusFromServer(campus){
  return {
    type: GOT_CAMPUS_FROM_SERVER,
    campus
  };
}

// THUNK CREATORS
export function fetchCampus (campusId) {
  return function thunk (dispatch) {
    return axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => {
        const action = gotCampusFromServer(campus);
        dispatch(action);
      });
  };
}

// REDUCER
const campusReducer = function(state = [], action) {
  switch (action.type) {
    case GOT_CAMPUS_FROM_SERVER:
      return action.campus;
    default:
      return state;
  }
};

export default campusReducer;
