import DashBoardScreen from './dashboard';
import {connect} from 'react-redux';
import {alertActions} from '../../_actions';

const actionCreators = {
  errorAlert: alertActions.error,
};

const mapStateToProps = (state) => {
  const {message, visiblity, type} = state.alert;
  return {message, visiblity, type};
};

const DashBoard = connect(mapStateToProps, actionCreators)(DashBoardScreen);
export default DashBoard;
