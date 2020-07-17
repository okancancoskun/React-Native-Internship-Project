import React, { Component } from 'react'

import HintScreen from '../../screens/HintScreen/Hintscreen';
import SplashScreen from "react-native-splash-screen";
import Login from '../../screens/LoginScreen/Login'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MenuNavigation from '../../screens/MenuNavigation/MenuNavigation';
import Profile from '../../screens/ProfileScreen/Profile';
import EditProfile from '../../screens/EditProfile/EditProfile';

const Tab = createBottomTabNavigator();
const AppNavigator = createStackNavigator();
const optionHeandler = () => ({
  headerShown: false,
});
export default class Navigation extends Component {
    componentDidMount(){
        SplashScreen.hide();
      }
    render() {
        
        return(
            <NavigationContainer>
              
              <AppNavigator.Navigator initialRouteName="HintScreen" > 
              <AppNavigator.Screen name="HintScreen" component={HintScreen} options={optionHeandler} />
              <AppNavigator.Screen name="Login" component={Login} options={optionHeandler}/>
                <AppNavigator.Screen name="MenuNavigation" component={MenuNavigation} options={optionHeandler}/>
                <AppNavigator.Screen name="EditProfile" component={EditProfile} options={optionHeandler} />
                <AppNavigator.Screen name="Profile" component={Profile} options={optionHeandler} />
              </AppNavigator.Navigator>
            </NavigationContainer>
            
          )
    }
}
