import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import {Tab1} from './tabs/tab1';
import {Tab2} from './tabs/tab2';
import {Tab3} from './tabs/tab3';

export const BottomNavigator = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'tab1', title: 'TAB 1', icon: 'history'},
    {key: 'tab2', title: 'TAB 2', icon: 'album'},
    {key: 'tab3', title: 'TAB 3', icon: 'history'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    tab1: Tab1,
    tab2: Tab2,
    tab3: Tab3,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
