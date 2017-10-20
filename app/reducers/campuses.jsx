import axios from 'axios';

// ACTION TYPES
const GOT_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER';
const ADD_CAMPUS = 'ADD_CAMPUS';

// ACTION CREATORS
export function gotCampusesFromServer(campuses){
  return {
    type: GOT_CAMPUSES_FROM_SERVER,
    campuses
  };
}

export function addCampus(campus){
  return {
    type: ADD_CAMPUS,
    campus
  };
}

// THUNK CREATORS
export function fetchCampuses () {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = gotCampusesFromServer(campuses);
        dispatch(action);
      });
  };
}

export function addCampusThunk () {
  return function thunk (dispatch) {
    return axios.post('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = addCampus(campuses);
        dispatch(action);
      });
  };
}

// REDUCER
const campusesReducer = function(state = [], action) {
  switch (action.type) {
    case GOT_CAMPUSES_FROM_SERVER:
      return action.campuses;
    case ADD_CAMPUS:
      return action.campuses;
    default:
      return state;
  }
};

export default campusesReducer;
