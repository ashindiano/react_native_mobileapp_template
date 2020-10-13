import React from 'react';
import {View, Text} from 'react-native';
import {Appbar, Button} from 'react-native-paper';
import _ from 'lodash';

import {CComponent} from '../../_components';
import {BottomNavigator} from './bottom_navigation';

export default class DashBoardScreen extends CComponent {
  render() {
    const {navigation, errorSnackBar} = this.props;
    return (
      <>
        <Appbar.Header>
          {_.isFunction(navigation.canGoBack) &&
            navigation.canGoBack() === true && (
              <Appbar.BackAction onPress={() => navigation.goBack()} />
            )}
          <Appbar.Content title="Dashboard" />
          <Appbar.Action icon="magnify" onPress={() => errorSnackBar('Test')} />
        </Appbar.Header>
        <BottomNavigator />
      </>
    );
  }
}
