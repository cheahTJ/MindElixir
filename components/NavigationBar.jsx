import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-ico-material-design';

// These are the screens required
import Homescreen from "./Homescreen";
import Rewards from "./Rewards";
import Profile from "./Profile";
import ExerciseConfig from "./ExerciseConfig";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeScreen = () => {
  return (    
    <Tab.Navigator
    screenOptions={{
    tabBarStyle: {backgroundColor: '#5F8575'},
    tabBarActiveTintColor: '#A8D38D',
    tabBarInactiveTintColor : '#8fb6ab',
    title:"",
    headerTitle:""
    }}>
        <Tab.Screen name="Home" component={Homescreen} options = {{
        tabBarLabel: '',
        tabBarIcon: ({size, color})=> (
            <Icon name = "home-button" size={size} color={color}/>
        ),
        headerShown:false
        }} />
        <Tab.Screen name="Rewards" component={Rewards} options = {{
        tabBarLabel: '',
        tabBarIcon: ({size, color})=> (
            <Icon name = "view-list-button" size={size} color={color}/>
        ),
        headerShown:false
        }} />
        <Tab.Screen name="Profile" component={Profile} options = {{
        tabBarLabel: '',
        tabBarIcon: ({size, color})=> (
            <Icon name = "user-shape" size={size} color={color}/>
        ),
        headerShown:false
        }} />  
      
    </Tab.Navigator>

  )
}

const NavigationBar = () => {
  return (
    // This is a stack navigator with a bottom tab navigator, by default stack screen that comes first will be displayed first
    <Stack.Navigator screenOptions={{title:"", headerTitle: ""}}>
      <Stack.Screen name = "Homescreen" component={HomeScreen} options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name = "ExerciseConfig" component={ExerciseConfig} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default NavigationBar;
