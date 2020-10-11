import HomeScreen from './home';
import {connect} from 'react-redux';

const actionCreators = {};

const mapStateToProps = (state) => {
  const {message, visiblity, type} = state.alert;
  return {message, visiblity, type};
};

const Home = connect(mapStateToProps, actionCreators)(HomeScreen);
export default Home;
