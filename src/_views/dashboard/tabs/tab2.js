import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text} from 'react-native-paper';
import {CComponent} from '../../../_components';

export class Tab2 extends CComponent {
  render() {
    return (
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Good AfterNoon</Text>
        <Button> TAB 2</Button>
      </SafeAreaView>
    );
  }
}
