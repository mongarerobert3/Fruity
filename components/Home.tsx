import React from 'react';
import { View, TextInput, Image, TouchableOpacity, ScrollView, Text, FlatList } from 'react-native';
import Styles from '../styles/Styles';
import icons from '../assets/icons';

const Home = () => {
  const fruits = [
    {
      coverImage: require('../assets/ova1.jpeg'),
      images: [require('../assets/ova1.jpeg'), require('../assets/ova1.jpeg')],
      description: 'A beautiful fruit from the alps mountains of southern carolina',
      name: 'Apple',
      variety: 'Red Delicious',
      price: 1.99,
      isOrganic: true,
      nutrients: {
        vitaminC: 'high',
        fiber: 'moderate',
      },
    },
		{
      coverImage: require('../assets/ova1.jpeg'),
      images: [require('../assets/ova1.jpeg'), require('../assets/ova1.jpeg')],
      description: 'A beautiful fruit from the alps mountains of southern carolina',
      name: 'Birigori',
      variety: 'Red Delicious',
      price: 1.99,
      isOrganic: true,
      nutrients: {
        vitaminC: 'high',
        fiber: 'moderate',
      },
    },
		{
      coverImage: require('../assets/ova1.jpeg'),
      images: [require('../assets/ova1.jpeg'), require('../assets/ova1.jpeg')],
      description: 'A beautiful fruit from the alps mountains of southern carolina',
      name: 'Mango',
      variety: 'Red Delicious',
      price: 1.99,
      isOrganic: true,
      nutrients: {
        vitaminC: 'high',
        fiber: 'moderate',
      },
    },
    {
      coverImage: require('../assets/ova1.jpeg'),
      images: [require('../assets/ova1.jpeg'), require('../assets/ova1.jpeg')],
      description: 'A beautiful fruit from the alps mountains of southern carolina',
      name: 'Banana',
      variety: 'Cavendish',
      price: 0.99,
      isOrganic: true,
      nutrients: {
        vitaminC: 'high',
        fiber: 'moderate',
      },
			
    },
  ];

	const renderItem = ({ item }) => (
    <View style={Styles.homeFruitContainer}>
      <Image source={item.coverImage} style={Styles.fruitImage} resizeMode="cover" />
      <Text style={Styles.fruitName}>{item.name}</Text>
    </View>
  );
	
  return (
    <>
      <View style={Styles.searchContainer}>
        <View style={Styles.searchWrapper}>
          <TextInput
            style={Styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="Search for a fruit"
          />
        </View>
        <TouchableOpacity style={Styles.searchBtn} onPress={() => {}}>
          <Image source={icons.search} resizeMode="contain" style={Styles.searchBtnImage} />
        </TouchableOpacity>
      </View>
			<View>
        <FlatList
          data={fruits}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
			</View>
			
    </>
  );
};

export default Home;
