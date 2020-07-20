import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Profile from '../ProfileScreen/Profile';
import Events from '../EventsScreen/Events';
import Maps from '../MapsScreen/Maps';
import Camera from '../CameraScreen/Camera';
import Settings from '../SettingsScreen/Settings';
import Editprofile from '../EditProfile/EditProfile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const optionHeandler = () => ({
  headerShown: false,
});

function stack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={optionHeandler}
      />
      <Stack.Screen
        name="EditProfile"
        component={Editprofile}
        options={optionHeandler}
      />
    </Stack.Navigator>
  );
}
export default function MenuNavigation() {
  return (
   
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Events') {
              iconName = focused ? 'calendar-plus' : 'calendar-plus';
            } else if (route.name === 'Maps') {
              iconName = focused ? 'map-marker-alt' : 'map-marker-alt';
            } else if (route.name === 'Camera') {
              iconName = focused ? 'camera' : 'camera';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'cog' : 'cog';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            }
            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          keyboardHidesTabBar: true,
          shadowColor: '#28282F',
          shadowOpacity: 1,
          shadowRadius: 10,
          activeBackgroundColor: '#28282F',
          inactiveBackgroundColor: '#28282F',
          activeTintColor: '#018786',
        }}>
        <Tab.Screen
          style={{fontFamily: 'nunito.tff'}}
          name="Events"
          component={Events}
        />
        <Tab.Screen
          style={{fontFamily: 'nunito.tff'}}
          name="Maps"
          component={Maps}
        />
        <Tab.Screen
          style={{fontFamily: 'nunito.tff'}}
          name="Camera"
          component={Camera}
        />
        <Tab.Screen
          style={{fontFamily: 'nunito.tff'}}
          name="Settings"
          component={Settings}
        />
        <Tab.Screen
          style={{fontFamily: 'nunito.tff'}}
          name="Profile"
          component={stack}
        />
    
      </Tab.Navigator>
    
  );
}
