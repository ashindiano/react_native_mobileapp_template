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
    tokenAcquired: false,
  };
  componentDidMount() {
    getUserToken().then((token) => {
      this.updateState({tokenAcquired: token !== undefined});
      this.props.updateUserToken(token);
    });
  }

  render() {
    const navigation = this.props.navigation;
    const userToken = this.props.token;
    return this.state.tokenAcquired === false ? (
      <Background>
        <Text>Loading...</Text>
      </Background>
    ) : !userToken ? (
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
