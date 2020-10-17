import React, {memo} from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {theme} from '../../../_core/theme';

type Props = {
  goBack: () => void;
};

const BackButton = ({goBack}: Props) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    <IconButton
      icon="arrow-left-circle"
      color={theme.colors.primary}
      size={45}
      onPress={goBack}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 0,
  },
});

export default memo(BackButton);
