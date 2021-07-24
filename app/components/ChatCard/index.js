import React from 'react';
import {View, Text, StyleSheet,Pressable,Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import { appColors } from '../../utils/appColors';
import Label from '../Label'; 

export default function index({item}) {
    const { name , time , message , image ,isSelected } =item
  return (
    <Pressable style={[styles.container, styles.center, isSelected ? styles.isSelected: {}]}>
      <View style={[styles.imgContainer, styles.center]}>
         <Image source={image} />
      </View>

      <View style={styles.chartCard}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',marginBottom:scale(5)}}> 
          <Label text={name} style={{fontWeight:"600"}} />
          <Label text={time} style={{fontWeight:"300", fontSize:scale(10), opacity:0.5}} />
        </View>

        <Label text={message} style={{fontWeight:"300", fontSize:scale(10), opacity:0.5}} />
         
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop:scale(10),
    paddingBottom:scale(10)
  },
  imgContainer: {
    width: '30%',
    //backgroundColor: 'blue',
    height: scale(50),
    width: scale(50),
    justifyContent: 'center',
    borderRadius:scale(25),
    left:scale(7)
  },
  center: {
    // justifyContent:'center',
    alignItems: 'center',
  },
  chartCard: {
    //backgroundColor: 'green',
    flex: 1,
    paddingHorizontal: scale(15),
  },
  isSelected:{
    backgroundColor:appColors.bg,
    borderLeftWidth:scale(5),
    borderColor:appColors.primary,
    //left:scale(-5)
  }
});
