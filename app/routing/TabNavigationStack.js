/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description Minimal example of Tab Navigations
 */
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RoutesList} from './routes';
import {appColors} from '../utils/appColors';
import { scale } from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

export default function TabNavigationStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: appColors.primary,
          inactiveTintColor: appColors.secondary,
          showLabel: false,
          style: {
             //...shadow,
            //position: 'absolute',
            height:scale(90),
            left: scale(20),
            right: scale(20),
            borderRadius: scale(20), 
            alignItems: 'center',  
            justifyContent:'center',
             paddingVertical:scale(10)
          },
        }}>
        {RoutesList?.map((route, key) => {
          const {name, component, options} = route;
          return (
            <Tab.Screen
              key={key}
              name={name}
              component={component}
              options={options}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
