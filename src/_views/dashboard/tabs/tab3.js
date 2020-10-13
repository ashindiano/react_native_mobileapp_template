import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text} from 'react-native-paper';
import {CComponent} from '../../../_components';

export class Tab3 extends CComponent {
  render() {
    return (
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Good Night</Text>
        <Button> TAB 3</Button>
      </SafeAreaView>
    );
  }
}
