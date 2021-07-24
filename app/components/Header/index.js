import React from 'react';
import {View, Text, StyleSheet,Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import {displayNameToShow as appName} from '../../../app.json';
import {appColors, shadow} from '../../utils/appColors';
import Label from '../Label';
import Feather from 'react-native-vector-icons/dist/Feather';
export default function index() {
  const _renderIcon = (icon) => {
    return (
      <Pressable style={styles.icCon}>
        <Feather name={icon} size={scale(20)} />
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.appName}>
        <Label
          text={appName}
          style={{
            fontSize: scale(25),
            color: appColors.primary,
            fontWeight: '700',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex:1,
          justifyContent: 'space-between',
          paddingHorizontal: scale(15),
          //paddingVertical:scale(30)
        }}>
        {_renderIcon("moon")}
        {_renderIcon("search")}
        {_renderIcon("more-vertical")}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    flex: 0.1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(20),
  },
  appName: {
    width: '45%',
  },
  icCon: {
    ...shadow,
    padding: scale(5),
    backgroundColor: appColors.lightBg,
    borderRadius: scale(18),
    height: scale(35),
    width: scale(35),
    //marginRight: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
