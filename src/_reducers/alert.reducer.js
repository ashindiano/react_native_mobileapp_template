import {alertConstants, alertTypes} from '../_constants';
export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: alertTypes.SUCCESS,
        message: action.message,
        visiblity: true,
      };
    case alertConstants.ERROR:
      return {
        type: alertTypes.ERROR,
        message: action.message,
        visiblity: true,
      };
    case alertConstants.CLEAR:
      return {type: undefined, message: undefined, visiblity: false};
    default:
      return state;
  }
}
