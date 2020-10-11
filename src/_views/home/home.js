import React from 'react';
import {View, Text} from 'react-native';
import {Appbar, Button} from 'react-native-paper';
import {CComponent} from '../../_components';
import _ from 'lodash';
import style from './style';
import {DrawerActions} from '@react-navigation/native';

export default class HomeScreen extends CComponent {
  render() {
    const {navigation} = this.props;
    return (
      <>
        <Appbar.Header>
          <Appbar.Action
            icon="menu"
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}
          />
          {_.isFunction(navigation.canGoback) &&
            navigation.canGoback() === true && (
              <Appbar.BackAction onPress={() => navigation.goBack()} />
            )}
          <Appbar.Content title="Home" />
          <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Home Screen</Text>
          <Button
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate('Dashboard', {
                itemId: 86,
                otherParam: 'anything you want here',
              });
            }}>
            Dashboard
          </Button>
        </View>
      </>
    );
  }
}
