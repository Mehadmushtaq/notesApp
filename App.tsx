import React from 'react';
import Home from './src/screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './src/screens/Welcome';
import Chapter from './src/screens/Chapter';
import Note from './src/screens/Note';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
// import Note from './src/screens/Note';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chapter" component={Chapter} />
        <Stack.Screen name="Note" component={Note} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
