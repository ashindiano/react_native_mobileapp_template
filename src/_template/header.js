import * as React from 'react';
import {connect} from 'react-redux';
import {Appbar} from 'react-native-paper';
import {alertActions} from '../_actions';
import {CComponent} from '../_components';

class header extends CComponent {
  _goBack = () => console.log('Went back');

  _handleSearch = () => this.props.successAlert('Success');

  _handleMore = () => this.props.failureAlert('Error');

  render() {
    return (
      <Appbar.Header>
        <Appbar.BackAction onPress={this._goBack} />
        <Appbar.Content title="Title" subtitle="Subtitle" />
        <Appbar.Action icon="magnify" onPress={this._handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
      </Appbar.Header>
    );
  }
}

const actionCreators = {
  successAlert: alertActions.success,
  failureAlert: alertActions.error,
  clearAlert: alertActions.clear,
};

const component = connect(null, actionCreators)(header);
export {component as Header};
