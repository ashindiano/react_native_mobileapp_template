import React from 'react';
import {Appbar} from 'react-native-paper';
import _ from 'lodash';

import {CComponent} from '../../_components';
import {BottomNavigator} from './bottom_navigation';
import {DrawerActions} from '@react-navigation/native';

export default class DashBoardScreen extends CComponent {
  render() {
    const {navigation, errorSnackBar} = this.props;
    return (
      <>
        <Appbar.Header>
          <Appbar.Action
            icon="menu"
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}
          />
          <Appbar.Content title="Dashboard" />
          <Appbar.Action icon="magnify" onPress={() => errorSnackBar('Test')} />
        </Appbar.Header>
        <BottomNavigator />
      </>
    );
  }
}
