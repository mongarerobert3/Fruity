import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import {CartItems} from '../components/';

import styles from './cart.style';

const Cart = () => {
  const navigation = useNavigation();
  const [heartPressed, setHeartPressed] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handlePress = () => {
    navigation.navigate('HomePage');
  }

  const handleHeartPress = () => {
    setHeartPressed(!heartPressed);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.Navigation}>
          <View>
            <TouchableOpacity 
              style={styles.iconWrapper}
              onPress={handlePress}
            >
              <Ionicons 
                name='chevron-back-outline'
                size={24}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.heartWrapper}>
            <TouchableOpacity 
              style={styles.iconWrapper}
              onPress={handleHeartPress}
            >
              <Ionicons 
              name={heartPressed ? 'heart' : 'heart-outline'}
              size={24}
              color={heartPressed ? 'red' : 'black'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <CartItems cartItems={cartItems}/>
    </SafeAreaView>
  )
}

export default Cart;
