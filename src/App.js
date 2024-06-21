import {View, Text, Button} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './navigation/StackNav';
const App = () => {
  return (
    <>
     <NavigationContainer>
     <StackNav />
     </NavigationContainer>
   
    </>
  );
};

export default App;
