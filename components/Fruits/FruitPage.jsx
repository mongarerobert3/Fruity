import { TouchableOpacity, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { CartItems } from '../../components';


import styles from "./fruitPage.style";


const FruitPage = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { selectedItem } = route.params;
  const [heartPressed, setHeartPressed] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  console.log("this are the cartItems:", cartItems)

  const handlePress = () => {
    navigation.navigate('HomePage');
  }

  const handleHeartPress = () => {
    setHeartPressed(!heartPressed);
  }

  const handleAddToCart = () => {
    const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (!itemInCart) {
      setCartItems((prevCartItems) => [...prevCartItems, item]);
      alert('Item added Successfully!');
    } else {
      alert('Item already in the cart!');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.imageContainer}>
        <View>
          <Image
            source={selectedItem.image}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{selectedItem.name}</Text>
        <Text style={styles.category}>{selectedItem.category}</Text>
        <View style={styles.rating}>
          <Ionicons
            name='star-outline'
            size={24}
          />
        </View>
        <View>
          <Text style={styles.price}>Description</Text>
        </View>
        <View>
          <Text>
            L, consequatur explicabo obcaecati eius repellat vel temporibus a qui? Eos cumque beatae nobis in veritatis ratione eaque. Perferendis dolore modi sint dicta!
          </Text>
        </View>
      </View>
      <View style={styles.bottomFruitPage}>
        <Text style={styles.price}>{selectedItem.price}/kg</Text>
        <TouchableOpacity style={styles.addToCartBtn}>
          <View>
            <TouchableOpacity onPress={() => setCartItems([...cartItems, selectedItem])}>
              <Text style={styles.addToCartBtnTxt}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
      <CartItems newCart={cartItems}/>
    </SafeAreaView>
  )
}

export default FruitPage;
