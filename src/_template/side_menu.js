import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './side_menu_content';
import Home from '../_views/home/container';
import DashBoard from '../_views/dashboard/container';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Dashboard" component={DashBoard} />
    </Drawer.Navigator>
  );
};
