/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import CSnackBar from './_template/snack_bar';
import {SideMenu} from './_template/side_menu';

const App = () => {
  return (
    <NavigationContainer>
      <SideMenu />
      <CSnackBar />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
