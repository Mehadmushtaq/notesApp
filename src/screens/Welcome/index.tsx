import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {appIcons} from '../../utilities/assets';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation<any>();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 5000);
  });

  return (
    <View style={styles.container}>
      <Image source={appIcons.logo} style={{height: 100, width: 100}}></Image>
      <Text>NotesBooks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Welcome;
