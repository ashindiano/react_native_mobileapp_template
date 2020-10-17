import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import {Grid, Section, Block} from 'react-native-responsive-layout';
import {theme} from '../../_core/theme';
import {styles} from './style';

const GridScreen = () => (
  <Grid>
    <Section>
      <Block xsSize="1/1" smSize="1/2">
        <View
          style={[
            styles.element,
            {backgroundColor: theme.colors.primary, alignItems: 'center'},
          ]}>
          <Text>1/2</Text>
        </View>
      </Block>
      <Block xsSize="1/1" smSize="1/2">
        <View
          style={[
            styles.element,
            {backgroundColor: theme.colors.secondary, alignItems: 'center'},
          ]}
        />
      </Block>
      <Block xsSize="1/2" smSize="1/3">
        <View
          style={[
            styles.element,
            {backgroundColor: theme.colors.primary, alignItems: 'center'},
          ]}>
          <Text>1/3</Text>
        </View>
      </Block>
    </Section>
    <Section>
      <Block xsSize="1/1" smSize="1/2">
        <View style={[styles.element, {backgroundColor: '#2d8bfb'}]} />
      </Block>
      <Block xsSize="1/1" smSize="1/2">
        <View style={[styles.element, {backgroundColor: '#1c81fb'}]} />
      </Block>
      <Block xsSize="1/1" smSize="1/2">
        <View style={[styles.element, {backgroundColor: '#0b78fb'}]} />
      </Block>
      <Block xsSize="1/1" smSize="1/2">
        <View style={[styles.element, {backgroundColor: '#0470f1'}]} />
      </Block>
      <Block xsSize="1/1" smSize="1/2">
        <View style={[styles.element, {backgroundColor: '#0468e0'}]} />
      </Block>
    </Section>
  </Grid>
);

export default GridScreen;
