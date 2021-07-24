import React from 'react';
import {View, Text, StyleSheet, FlatList, Image, Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import {appColors} from '../../utils/appColors';
import {stories} from '../../utils/MockData';
import Label from '../Label';
export default function index() {
  const StoryCard = ({item}) => {
    const {storyImage, profileImage, name, numberOfStories, seenAll, me} = item;
    return (
      <Pressable style={styles.center}>
        <View style={[styles.card, styles.center]}> 
          <Image
            source={storyImage}
            resizeMode="contain"
            style={{height: scale(60), width: scale(60)}}
          />
          <View style={[styles.innerCard, styles.center, me ? {backgroundColor:appColors.primary} : {}]}>
            {!me &&<Image
              source={profileImage}
              resizeMode="contain"
              style={{height: scale(17), width: scale(17)}}
            />  }
          </View>
        </View>
        <Label text={name} style={{fontWeight: '300', fontSize: scale(11)}} />
      </Pressable>
    );
  };
  return (
    <View style={{ paddingHorizontal:scale(20),marginBottom:scale(20) }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{padding: scale(5)}} />}
        horizontal
        data={stories}
        renderItem={({item, index}) => <StoryCard item={item} key={index} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    //backgroundColor: appColors.blue,
    height: scale(60),
    width: scale(60),
    borderRadius: scale(30),
    margin: scale(5),
    borderWidth: scale(10),
    borderColor: appColors.blue,
      
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCard: {
    position: 'absolute',
    bottom: scale(-6),
    backgroundColor: appColors.white,
    height: scale(20),
    width: scale(20),
    borderRadius: scale(12),
  },
});
