import DashBoardScreen from './dashboard';
import {connect} from 'react-redux';
import {snackBarActions} from '../../_actions';

const actionCreators = {
  errorSnackBar: snackBarActions.error,
};

const mapStateToProps = (state) => {
  const {message, visiblity, type} = state.snackBar;
  return {message, visiblity, type};
};

const DashBoard = connect(mapStateToProps, actionCreators)(DashBoardScreen);
export default DashBoard;
