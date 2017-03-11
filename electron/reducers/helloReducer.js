import * as types from '../actions/actionTypes';

const initialState = {
  message: "initial"
};

const messageReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.CHANGE_MESSAGE:
      return Object.assign({}, state, { message: action.message });

  }

  return state;

}

export default messageReducer;
