/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description List of routes for Tabs Navigator and Stack navigator, Along addational  Option for Tabs
 */
import React from 'react';
import Home from '../screens/Home';
import {Pressable, Text} from 'react-native';
import {appColors} from '../utils/appColors';
import {scale} from 'react-native-size-matters';

export const RoutesList = [
  {
    name: 'Home',
    component: Home,
    options: {
      tabBarButton: (props) => {
        return <Cbutton name={'Chats'} props={props} />;
      },
      tabBarBadge: 3,
      tabBarLabel: 'Home',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },

  {
    name: 'HomeX',
    component: Home,
    options: {
      tabBarButton: (props) => {
        return <Cbutton name={'Groups'} props={props} />;
      },
      tabBarBadge: 3,
      tabBarLabel: 'Home',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },
];

const Cbutton = ({name, props}) => {
  const {
    onPress,
    onLongPress,
    style,
    accessibilityState: {selected},
  } = props;
  //console.log({props});
  return (
    <Pressable
      onPress={onPress}
      style={[
        //style,
        {
          backgroundColor: selected ? appColors.primary : appColors.white,
          borderRadius: scale(20),
          justifyContent: 'center',
          padding: scale(10),
          paddingHorizontal: scale(40),
          height: scale(40),
        },
      ]}>
      <Text style={{color: selected ? appColors.white : appColors.black}}>
        {name}
      </Text>
    </Pressable>
  );
};
