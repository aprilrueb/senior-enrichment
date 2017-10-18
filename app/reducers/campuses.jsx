import { combineReducers } from 'redux';
import axios from 'axios';

// ACTION TYPES
const GOT_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER';
const GOT_CAMPUS_FROM_SERVER = 'GOT_CAMPUS_FROM_SERVER';

// ACTION CREATORS
export function gotCampusesFromServer(campuses){
  return {
    type: GOT_CAMPUSES_FROM_SERVER,
    campuses
  };
}

export function gotCampusFromServer(campus){
  return {
    type: GOT_CAMPUS_FROM_SERVER,
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
const campusesReducer = function(state = [], action) {
  switch (action.type) {
    case GOT_CAMPUSES_FROM_SERVER:
      return action.campuses;
    case GOT_CAMPUS_FROM_SERVER:
      return action.campus;
    default:
      return state;
  }
};

export default campusesReducer;
