import {connect} from 'react-redux';
import authenticateScreen from './authenticate_screen';

const mapStateToProps = (state) => {
  const {token} = state.user;
  return {token};
};

const AuthenticateScreen = connect(mapStateToProps)(authenticateScreen);
export default AuthenticateScreen;
