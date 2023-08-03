import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import BottomTabNavigation from './Navigation/BottomTabNavigation';
import { Cart, Favorites, LoginPage, Orders, SignUp } from './Screens';
import { FruitPage, FruitsRow } from './components';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  })

  const onLayoutRootView = useCallback(async() => {
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded){
    return null;
  }
  
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Bottom Navigation'
        component={BottomTabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Cart'
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='FruitsPage'
        component={FruitPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='FruitsRow'
        component={FruitsRow}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Login'
        component={LoginPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Orders'
        component={Orders}
        options={{headerShown: false}}
      />
    
      <Stack.Screen
        name='Favorites'
        component={Favorites}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name='SignUp'
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='HomePage'
        component={BottomTabNavigation}
        options={{
          headerShown: false,
          animation: 'slide_from_left',
        }}
      />
      
    </Stack.Navigator>
  </NavigationContainer>
  )
};
