import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
} from './_views/authenticator/screens';
import AuthenticateScreen from './_views/authenticator/screens/root/container';

import LoggedRootScreen from './_views/LoggedRootScreen';

const Router = createStackNavigator(
  {
    AuthenticateScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    LoggedRootScreen,
  },
  {
    initialRouteName: 'AuthenticateScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(Router);
