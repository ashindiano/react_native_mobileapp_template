import HomeScreen from './home';
import {connect} from 'react-redux';
import {snackBarActions} from '../../_actions';

const actionCreators = {
  successSnackBar: snackBarActions.success,
  errorSnackBar: snackBarActions.error,
};

const mapStateToProps = (state) => {
  const {message, visiblity, type} = state.snackBar;
  return {message, visiblity, type};
};

const Home = connect(mapStateToProps, actionCreators)(HomeScreen);
export default Home;
