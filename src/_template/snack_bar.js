import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Snackbar} from 'react-native-paper';
import {CComponent} from '../_components';

const classes = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

class Alert extends CComponent {
  state = {visible: false};

  onToggleSnackBar = () => this.updateState({visible: !this.state.visible});

  onDismissSnackBar = () => this.updateState({visible: false});

  render() {
    const state = this.state;
    return (
      <View style={classes.container}>
        <Button onPress={this.onToggleSnackBar}>
          {state.visible ? 'Hide' : 'Show'}
        </Button>
        <Snackbar
          visible={state.visible}
          onDismiss={this.onDismissSnackBar}
          action={{
            label: 'Undo',
            onPress: () => {
              // Do something
            },
          }}>
          Hey there! I'm a Snackbar.
        </Snackbar>
      </View>
    );
  }
}
