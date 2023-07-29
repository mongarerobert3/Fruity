import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const SingleItem = ({ item }) => {
  return (
    <View>
      <Image source={item.image} style={{ width: 50, height: 50 }} />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <TouchableOpacity>
        <Ionicons name="remove-circle-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default SingleItem;
