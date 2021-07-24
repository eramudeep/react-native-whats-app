import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setError} from '../../redux/actions';
import {} from 'react-native-gesture-handler';
import {chats, features, starterIntro} from '../../utils/MockData';
import {AlertHelper} from '../../utils/AlertHelper';
import {appColors} from '../../utils/appColors';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Container from '../../components/Container';
import ChatCard from '../../components/ChatCard';
import Stories from '../../components/Stories';
import {scale} from 'react-native-size-matters';
import GroupContainer from '../../components/Group/GroupContainer';
import Feather from 'react-native-vector-icons/dist/Feather';

export default function Home() {
  const [isError, setIsError] = useState({});
  const [text, setText] = useState('hello');
  let error = useSelector((state) => state.error); // getting from reducer.
  const dispatch = useDispatch();
  const hasError = (error) => {
    dispatch(setError({error})); //here we can call a action to set an error in reducer.
  };
  console.log('error is =>', isError);
  useEffect(() => {
    setIsError(error);
  }, [error]);

  const NewChat = () => {
    return (
      <Pressable style={styles.newchat}>
        <Feather name={'plus'} size={scale(25)} color={appColors.white} />
      </Pressable>
    );
  };
  return (
    <Container
      showHeader
      style={styles.container}
      innerViewStyle={{paddingHorizontal: scale(0)}}>
      <Stories />

      <ScrollView style={styles.scrollContainer}>
        <GroupContainer
          containerStyle={{paddingTop: scale(20), paddingBottom: scale(20)}}>
          <FlatList
            ItemSeparatorComponent={() => <View style={{padding: scale(7)}} />}
            data={chats}
            renderItem={({item, index}) => <ChatCard item={item} key={index} />}
          />
        </GroupContainer>
        <NewChat />
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.bg,
  },
  header: {
    backgroundColor: appColors.primary,
    alignItems: 'center',
    borderBottomWidth: 12,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    padding: 20,
    margin: 20,
    textAlign: 'center',
  },
  TitleText: {
    fontSize: 25,
    // padding: 20,
    marginVertical: 20,
  },
  scrollContainer: {
    backgroundColor: appColors.white,
    flex: 1,
    paddingHorizontal: 20,
    //backgroundColor:'red',
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
  },
  newchat: {
    height:scale(60),
    width:scale(60),
    position: 'absolute',
    bottom: scale(50),
    right: scale(10),
    backgroundColor: appColors.primary, 
    borderRadius: scale(35),
    justifyContent:'center',
    alignItems:'center'
  },
});
