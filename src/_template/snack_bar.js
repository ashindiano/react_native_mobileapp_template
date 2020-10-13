import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Snackbar} from 'react-native-paper';
import {connect} from 'react-redux';
import {snackBarActions} from '../_actions';
import {CComponent} from '../_components';
import {theme} from '../_helpers/theme';

const classes = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

class snackbar extends CComponent {
  render() {
    const {message, visiblity, clearSnackBar, type} = this.props;
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
        onDismiss={clearSnackBar}
        duration={1000}
        action={{
          label: 'Close',
          onPress: clearSnackBar,
        }}>
        {message}
      </Snackbar>
    );
  }
}

const actionCreators = {
  clearSnackBar: snackBarActions.clear,
};

const mapStateToProps = (state) => {
  const {message, visiblity, type} = state.snackBar;
  return {message, visiblity, type};
};

const CSnackBar = connect(mapStateToProps, actionCreators)(snackbar);
export default CSnackBar;
