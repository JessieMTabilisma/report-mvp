import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import MicroAppLauncher from './components/MicroAppLauncher/MicroAppLauncher';
import Ricemill from './screens/RiceMill';
import InnRicemill from './components/InnRicemill/InnRicemill';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

declare const global: {HermesInternal: null | {}};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Reporting System" component={MicroAppLauncher} />
        <Stack.Screen name="Ricemill" component={Ricemill} />
        <Stack.Screen name="In - Ricemill" component={InnRicemill} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
