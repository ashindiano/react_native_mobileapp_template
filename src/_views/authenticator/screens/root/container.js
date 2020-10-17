import {connect} from 'react-redux';
import {userActions} from '../../../../_actions';
import authenticateScreen from './authenticate_screen';

const actionCreators = {
  updateUserToken: userActions.updateToken,
};
const mapStateToProps = (state) => {
  const {token} = state.user;
  return {token};
};

const AuthenticateScreen = connect(
  mapStateToProps,
  actionCreators,
)(authenticateScreen);
export default AuthenticateScreen;
