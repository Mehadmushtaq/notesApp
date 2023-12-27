import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useTheme} from 'react-native-paper';

function Home(): React.JSX.Element {
  const navigation = useNavigation<any>();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: 'Apple',
      value: 'apple',
      icon: () => (
        <Image
          source={require('../../../src/assets/icons/icon-apple.png')}
          style={{height: 20, width: 20}}
        />
      ),
    },
    {
      label: 'Facebook',
      value: 'facebook',
      icon: () => (
        <Image
          source={require('../../../src/assets/icons/icon-facebook.png')}
          style={{height: 20, width: 20}}
        />
      ),
    },
    {
      label: 'Google',
      value: 'google',
      icon: () => (
        <Image
          source={require('../../../src/assets/icons/icon-google.png')}
          style={{height: 20, width: 20}}
        />
      ),
    },
  ]);

  const theme = useTheme();

  // const staticData: ICheckboxButton[] = [
  //   {
  //     id: 0,
  //     fillColor: '#ff7473',
  //     unfillColor: '#fbbfbb',
  //     iconStyle: _iconStyle('#fbbfbb'),
  //     iconImageStyle: styles.iconImageStyle,
  //   },
  //   {
  //     id: 1,
  //     fillColor: '#5567e9',
  //     unfillColor: '#afb5f5',
  //     iconStyle: _iconStyle('#afb5f5'),
  //     iconImageStyle: styles.iconImageStyle,
  //   },
  //   {
  //     id: 2,
  //     fillColor: '#a98ae7',
  //     unfillColor: '#cab6f4',
  //     iconStyle: _iconStyle('#cab6f4'),
  //     iconImageStyle: styles.iconImageStyle,
  //   },
  //   {
  //     id: 3,
  //     fillColor: '#fcb779',
  //     unfillColor: '#ffd1a7',
  //     iconStyle: _iconStyle('#ffd1a7'),
  //     iconImageStyle: styles.iconImageStyle,
  //   },
  //   {
  //     id: 4,
  //     fillColor: '#2be055',
  //     unfillColor: '#cbf2d5',
  //     iconStyle: _iconStyle('#cbf2d5'),
  //     iconImageStyle: styles.iconImageStyle,
  //   },
  // ];

  return (
    <View style={styles.Container}>
      <Text style={styles.Heading}> Learn Digitally</Text>

      {/* <View style={styles.dropDownStyle}>
        <Text>Social Media</Text> */}
      {/* <DropDownPicker
          placeholder={'---Select---'}
          // multiple={true}
          // min={0}
          // max={10}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          searchable={true}
          theme="DARK"
          dropDownContainerStyle={{
            borderColor: 'white',
          }}
          searchContainerStyle={{
            borderBottomWidth: 0,
          }}
          onSelectItem={item => {
            console.log(item.value);
          }} */}
      {/* /> */}
      {/* </View> */}

      {/* <View
        style={{
          marginVertical: 20,
        }}> */}
      {/* <BouncyCheckboxGroup
          data={staticData}
          onChange={(selectedItem: ICheckboxButton) => {
            console.log('SelectedItem: ', JSON.stringify(selectedItem));
          }} */}
      {/* /> */}
      {/* </View> */}

      <View style={styles.InnerContainer}>
        <View style={styles.Item}>
          <Pressable onPress={() => navigation.navigate('Chapter')}>
            <Text style={{color: theme.colors.primary}}>Chapters</Text>
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
          <Pressable onPress={() => navigation.navigate('Animated')}>
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
  dropDownStyle: {
    // borderWidth: 1,
    marginHorizontal: 20,
    padding: 5,
  },
});
export default Home;
