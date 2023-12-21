import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';

function Home(): React.JSX.Element {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.Container}>
      <Text style={styles.Heading}> Learn Digitally</Text>
      <View style={styles.InnerContainer}>
        <View style={styles.Item}>
          <Pressable onPress={() => navigation.navigate('Chapter')}>
            <Text>Chapters</Text>
          </Pressable>
        </View>
        <View style={styles.Item}>
          <Pressable onPress={() => navigation.navigate('Students')}>
            <Text>Students List</Text>
          </Pressable>
        </View>
        <View style={styles.Item}>
          <Pressable onPress={() => navigation.navigate('AsyncStorage')}>
            <Text>Async Storage</Text>
          </Pressable>
        </View>
        <View style={styles.Item}>
          <Pressable onPress={() => navigation.navigate('AnimatedAPI')}>
            <Text>Animations</Text>
          </Pressable>
        </View>
      </View>

      <Pressable
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={styles.login_button}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    rowGap: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  InnerContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Item: {
    borderWidth: 1,
    borderRadius: 10,
    width: '40%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login_button: {
    borderRadius: 100,
    padding: 10,
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: '#D2DDDE',
  },
});
export default Home;
