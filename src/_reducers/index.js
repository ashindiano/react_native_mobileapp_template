import {combineReducers} from 'redux';
import {snackBar} from './snackbar.reducer';
import {template} from './template.reducer';

export const rootReducer = combineReducers({
  template,
  snackBar,
});
