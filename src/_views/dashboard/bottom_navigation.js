import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

const MusicRoute = () => (
  <SafeAreaView>
    <Text>Music</Text>
  </SafeAreaView>
);

const AlbumsRoute = () => (
  <SafeAreaView>
    <Text>Albums</Text>
  </SafeAreaView>
);

const RecentsRoute = () => (
  <SafeAreaView>
    <Text>Recent</Text>
  </SafeAreaView>
);

export const BottomNavigator = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'music', title: 'Music', icon: 'history'},
    {key: 'albums', title: 'Albums', icon: 'album'},
    {key: 'recents', title: 'Recents', icon: 'history'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
