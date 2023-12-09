import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ico-material-design';

// These are the screens required
import Homescreen from "./Homescreen";
import Rewards from "./Rewards";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

const NavigationBar = () => {
  return (
    <Tab.Navigator
    screenOptions={{
    tabBarStyle: {backgroundColor: '#5F8575'},
    tabBarActiveTintColor: '#A8D38D',
    tabBarInactiveTintColor : '#8fb6ab'
    }}>
        <Tab.Screen name="Home" component={Homescreen} options = {{
        tabBarLabel: '',
        tabBarIcon: ({size, color})=> (
            <Icon name = "home-button" size={size} color={color}/>
        )
        }} />
        <Tab.Screen name="Rewards" component={Rewards} options = {{
        tabBarLabel: '',
        tabBarIcon: ({size, color})=> (
            <Icon name = "view-list-button" size={size} color={color}/>
        )
        }} />
        <Tab.Screen name="Profile" component={Profile} options = {{
        tabBarLabel: '',
        tabBarIcon: ({size, color})=> (
            <Icon name = "user-shape" size={size} color={color}/>
        )
        }} />
    </Tab.Navigator>
  )
}

export default NavigationBar;
