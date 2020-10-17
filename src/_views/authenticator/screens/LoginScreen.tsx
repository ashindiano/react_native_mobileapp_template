import React, {useState} from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Background from '../components/Background';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import {emailValidator, passwordValidator} from '../../../_core/validators';
import {theme} from '../../../_core/theme';
import {storeUserToken} from '../../../_core/user';
import {userActions} from '../../../_actions';

type Props = {
  navigation: any;
  updateUserToken: any;
};

const resetNavigator = (route: string) => {};

const loginScreen = (props: Props) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    // Your Api call here and store the user token received
    storeUserToken('DUMMY TOKEN');
    props.navigation.popToTop();
    props.updateUserToken('DUMMY TOKEN');
  };

  return (
    <Background>
      <BackButton
        goBack={() => props.navigation.navigate('AuthenticateScreen')}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        style={{height: 45, backgroundColor: 'white'}}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        style={{height: 45, backgroundColor: 'white'}}
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button
        mode="contained"
        onPress={_onLoginPressed}
        color={theme.colors.primary}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

const actionCreators = {
  updateUserToken: userActions.updateToken,
};

const mapStateToProps = (state: any) => {
  const {token} = state.user;
  return {token};
};

const LoginScreen = connect(mapStateToProps, actionCreators)(loginScreen);
export default LoginScreen;
