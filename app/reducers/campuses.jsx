import axios from 'axios';

// ACTION TYPES
const GOT_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER';

// ACTION CREATORS
export function gotCampusesFromServer(campuses){
  return {
    type: GOT_CAMPUSES_FROM_SERVER,
    campuses
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

// REDUCER
const campusesReducer = function(state = [], action) {
  switch (action.type) {
    case GOT_CAMPUSES_FROM_SERVER:
      return action.campuses;
    default:
      return state;
  }
};

export default campusesReducer;
