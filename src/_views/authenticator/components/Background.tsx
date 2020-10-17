import React, {memo} from 'react';
import {ImageBackground, StyleSheet, KeyboardAvoidingView} from 'react-native';

type Props = {
  children: React.ReactNode;
};

const Background = ({children, ...other}: Props) => (
  <KeyboardAvoidingView style={styles.container} {...(other as any)}>
    {children}
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 40,
    width: '100%',
    maxWidth: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(Background);
