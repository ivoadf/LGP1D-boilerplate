import * as types from './actionTypes';

export function changeMessage(message) {
  return {
    type: types.CHANGE_MESSAGE,
    message
  };
}
