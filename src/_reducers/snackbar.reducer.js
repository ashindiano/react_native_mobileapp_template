import {snackBarConstants, snackBarTypes} from '../_constants';
export function snackBar(state = {}, action) {
  switch (action.type) {
    case snackBarConstants.SUCCESS:
      return {
        type: snackBarTypes.SUCCESS,
        message: action.message,
        visiblity: true,
      };
    case snackBarConstants.ERROR:
      return {
        type: snackBarTypes.ERROR,
        message: action.message,
        visiblity: true,
      };
    case snackBarConstants.CLEAR:
      return {type: undefined, message: undefined, visiblity: false};
    default:
      return state;
  }
}
