import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Styles} from './components';

const Stack = createStackNavigator();

function FruityApp () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Fruity" style={Styles.fruityTitle} component={Home}  />
    </Stack.Navigator>
  )
}

function RootNavigator () {
  return (
    <NavigationContainer>
      <FruityApp />
    </NavigationContainer>
  )
}

export default function App() {
  return <RootNavigator/>
}
