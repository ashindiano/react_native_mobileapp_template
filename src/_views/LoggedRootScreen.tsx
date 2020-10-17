import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CComponent} from '../_components';
import {SideMenu} from '../_template/side_menu';
import CSnackBar from '../_template/snack_bar';

class LoggedRootScreen extends CComponent {
  render() {
    return (
      <NavigationContainer>
        <SideMenu />
        <CSnackBar />
      </NavigationContainer>
    );
  }
}

export default LoggedRootScreen;
