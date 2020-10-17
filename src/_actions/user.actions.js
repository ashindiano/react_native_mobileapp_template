import {userConstants} from '../_constants';

export const userActions = {
  updateToken,
  clearToken,
};

function updateToken(token) {
  return {type: userConstants.UPDATE_TOKEN, token};
}

function clearToken() {
  return {type: userConstants.RESET_TOKEN};
}
