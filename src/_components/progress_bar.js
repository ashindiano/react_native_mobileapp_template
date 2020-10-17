import * as React from 'react';
import {View} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {theme} from '../_core/theme';

const ProgressScreen = (props) => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <ProgressBar progress={0.5} color={theme.colors.primary} {...props} />
  </View>
);

export default ProgressScreen;
