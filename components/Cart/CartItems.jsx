import { TouchableOpacity, FlatList, Text, Image, View } from 'react-native';
import React from 'react';
import SingleItem from './SingleItem';
import styles from './cartItems.style';

const CartItems = ({ newCart }) => {
	console.log("This are the items in the new CArt:", newCart)
  
  if (newCart) {
    return (
      <View>
        <Image
          source={require("../../assets/images/tomatos.jpg")}
          style={styles.notFound}
        />
        <Text style={styles.notFoundText}>Cart Empty! Please browse the Fruits catalogue</Text>
        <TouchableOpacity style={styles.FruitsCatBtn}>
          <Text style={styles.FruitsCatBtnTxt}>Fruit Catalogue</Text>
        </TouchableOpacity>
      </View>
    )
  } else {
    return (
      <FlatList
        data={newCart}
        renderItem={({ item }) => <SingleItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    )
  }
}

export default CartItems;
