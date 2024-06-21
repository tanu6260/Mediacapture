import {View, Text} from 'react-native';
import React from 'react';
import LogIn from '../../screens/logIn';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../../screens/signUp';
import ForgetPassword from '../../screens/forgetPassword';
import Mediacapture from '../../screens/mediacapture';

const Stack = createStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="signUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="logIn"
        component={LogIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="mediacapture"
        component={Mediacapture}
        options={{
          title: 'Media capture',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
