import {combineReducers} from 'redux';
import {snackBar} from './snackbar.reducer';
import {template} from './template.reducer';
import {user} from './user.reducer';

export const rootReducer = combineReducers({
  template,
  snackBar,
  user,
});
