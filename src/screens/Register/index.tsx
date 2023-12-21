// import React, {useState} from 'react';
// import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

// function Register({navigation}: any): React.JSX.Element {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={styles.login_wrapper}>
//       <View style={styles.form}>
//         <Text style={styles.title}>Create Account</Text>
//         <TextInput
//           style={styles.inputField}
//           value={username}
//           placeholder={'Username'}
//           onChangeText={text => setUsername(text)}
//           autoCapitalize={'none'}
//           keyboardType={'email-address'}
//         />
//         <TextInput
//           style={styles.inputField}
//           value={email}
//           placeholder={'Email'}
//           onChangeText={email => setEmail(email)}
//           autoCapitalize={'none'}
//           keyboardType={'email-address'}
//         />
//         <TextInput
//           style={styles.inputField}
//           value={password}
//           placeholder={'Password'}
//           secureTextEntry
//           onChangeText={text => setPassword(text)}
//         />
//         <Pressable style={styles.button} onPress={() => {}}>
//           <View>
//             <Text style={styles.buttonText}>Register</Text>
//           </View>
//         </Pressable>
//         <Text style={{marginTop: 20}}>
//           Already have account?
//           <Text
//             onPress={() => navigation.navigate('Login')}
//             style={{fontWeight: 'bold'}}>
//             {' '}
//             Login
//           </Text>
//         </Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   login_wrapper: {
//     flex: 1,
//     borderWidth: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   form: {
//     borderWidth: 1,
//     padding: 20,
//     borderRadius: 5,
//     width: '70%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   inputField: {
//     borderWidth: 1,
//     width: '100%',
//     marginBottom: 20,
//     padding: 5,
//     borderRadius: 5,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 40,
//   },
//   button: {
//     backgroundColor: '#298AEC',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default Register;
import React, {FC, ReactElement, useState} from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import Parse from 'parse/react-native';
import {useNavigation} from '@react-navigation/native';
import Styles from '../../../Styles';
import {appIcons} from '../../utilities/assets';
import auth from '@react-native-firebase/auth';

function Register(): React.JSX.Element {
  const navigation = useNavigation<any>();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const SignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Success!', 'account created');
        navigation.navigate('Login');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error!', 'That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('Error!', 'That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View style={Styles.login_wrapper}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 40,
          color: '#208AEC',
        }}>
        Create Account
      </Text>
      <View style={Styles.form}>
        <TextInput
          style={Styles.form_input}
          value={username}
          placeholder={'Username'}
          onChangeText={text => setUsername(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TextInput
          style={Styles.form_input}
          value={email}
          placeholder={'Email'}
          onChangeText={mail => setEmail(mail)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TextInput
          style={Styles.form_input}
          value={password}
          placeholder={'Password'}
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity onPress={SignUp}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Sign Up'}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={Styles.login_social}>
        <View style={Styles.login_social_separator}>
          <View style={Styles.login_social_separator_line} />
          <Text style={Styles.login_social_separator_text}>{'or'}</Text>
          <View style={Styles.login_social_separator_line} />
        </View>
        <View style={Styles.login_social_buttons}>
          <TouchableOpacity>
            <View
              style={[
                Styles.login_social_button,
                Styles.login_social_facebook,
              ]}>
              <Image
                style={Styles.login_social_icon}
                source={appIcons.fbIcon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.login_social_button}>
              <Image
                style={Styles.login_social_icon}
                source={appIcons.googleIcon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.login_social_button}>
              <Image
                style={Styles.login_social_icon}
                source={appIcons.appleIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={Styles.login_footer_text}>
            {'Already have an account? '}
            <Text style={Styles.login_footer_link}>{'Login'}</Text>
          </Text>
        </TouchableOpacity>
      </>
    </View>
  );
}

export default Register;
