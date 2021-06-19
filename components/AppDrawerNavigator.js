/*
//mine
import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { TabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';

export const DrawerNavigator = createDrawerNavigator({
    Home: { screen: TabNavigator }
}, 
    { contentComponent: CustomSideBarMenu },
    { initialRouteName: 'Home' }
);*/

import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { TabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingsScreen from '../Screens/SettingsScreen';
import MyBarters from '../Screens/MyBarters';

export const DrawerNavigator = createDrawerNavigator({

    Home: { screen: TabNavigator },
    Settings: { screen: SettingsScreen },
    MyBarters: { screen: MyBarters }

},

    { contentComponent: CustomSideBarMenu },
    { initialRouteName: 'Home' }
    
);