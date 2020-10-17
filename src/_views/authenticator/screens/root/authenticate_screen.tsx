import React from 'react';
import Background from '../../components/Background';
import Button from '../../components/Button';
import {Navigation} from '../../../../_core/types';
import {theme} from '../../../../_core/theme';
import {CComponent} from '../../../../_components';
import {getUserToken} from '../../../../_core/user';
import {Text} from 'react-native-paper';
import LoggedRootScreen from '../../../LoggedRootScreen';

type Props = {
  navigation: Navigation;
};

export default class authenticateScreen extends CComponent {
  state = {
    userToken: undefined,
  };

  componentDidMount() {
    getUserToken().then((token) =>
      this.updateState({userToken: token ? token : null}),
    );
  }

  render() {
    const navigation = this.props.navigation;
    const state = this.state;
    const userToken = this.props.token || state.userToken;
    return userToken === undefined ? (
      <Background>
        <Text>Loading...</Text>
      </Background>
    ) : userToken === null ? (
      <Background>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('LoginScreen')}
          color={theme.colors.primary}>
          Login
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('RegisterScreen')}>
          Sign Up
        </Button>
      </Background>
    ) : (
      <LoggedRootScreen />
    );
  }
}
