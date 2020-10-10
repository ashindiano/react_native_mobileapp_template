import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Snackbar} from 'react-native-paper';
import {connect} from 'react-redux';
import {alertActions} from '../_actions';
import {CComponent} from '../_components';
import {theme} from '../_helpers/theme';

const classes = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

class snackBar extends CComponent {
  render() {
    const {message, visiblity, clearAlert, type} = this.props;
    console.log('Snackbar', visiblity, message);
    return (
      <Snackbar
        style={{
          backgroundColor:
            type === 'success'
              ? theme.colors.primary
              : type === 'error'
              ? theme.colors.error
              : theme.colors.disabled,
          borderRadius: 4,
        }}
        theme={{colors: {accent: 'white'}}}
        visible={visiblity}
        onDismiss={clearAlert}
        duration={1000}
        action={{
          label: 'Close',
          onPress: clearAlert,
        }}>
        {message}
      </Snackbar>
    );
  }
}

const actionCreators = {
  clearAlert: alertActions.clear,
};

const mapStateToProps = (state) => {
  const {message, visiblity, type} = state.alert;
  return {message, visiblity, type};
};

const CSnackBar = connect(mapStateToProps, actionCreators)(snackBar);
export default CSnackBar;
