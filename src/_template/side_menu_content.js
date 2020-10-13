import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {theme} from '../_helpers/theme';

export function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                'https://media-exp1.licdn.com/dms/image/C5103AQHVzvcqTcNK8A/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=H4SncZqtH2ZOCYtcrfiJQQ5DIWIt7reX0jmucN35xeQ',
            }}
            size={50}
          />
          <Title style={styles.title}>Ash Indiano</Title>
          <Caption style={styles.caption}>Senior Developer</Caption>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="DashBoard"
            onPress={() => {
              props.navigation.navigate('Dashboard', {
                itemId: 86,
                otherParam: 'anything you want here',
              });
            }}
          />
          <DrawerItem label="Reports" onPress={() => {}} />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Disable Something</Text>
              <View pointerEvents="none">
                <Switch value={true} color={theme.colors.primary} />
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Enable Something</Text>
              <View pointerEvents="none">
                <Switch value={false} color={theme.colors.primary} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
