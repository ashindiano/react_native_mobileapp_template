import {userConstants} from '../_constants';

const initialState = {
  token: undefined,
};

export function user(state = {...initialState}, action) {
  switch (action.type) {
    case userConstants.UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case userConstants.RESET_TOKEN:
      return {
        ...state,
        token: undefined,
      };

    default:
      return state;
  }
}
