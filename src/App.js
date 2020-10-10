/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Header, BottomNavigator} from './_template';
import CSnackBar from './_template/snack_bar';

const App = () => {
  return (
    <>
      <Header />
      <SafeAreaView></SafeAreaView>
      <CSnackBar />
      {/* <BottomNavigator /> */}
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
