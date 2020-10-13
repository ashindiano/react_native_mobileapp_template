import {snackBarConstants} from '../_constants';

export const snackBarActions = {
  success,
  error,
  clear,
};

function success(message) {
  return {type: snackBarConstants.SUCCESS, message};
}

function error(message) {
  return {type: snackBarConstants.ERROR, message};
}

function clear() {
  return {type: snackBarConstants.CLEAR};
}
