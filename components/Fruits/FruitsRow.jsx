import { FlatList,TouchableOpacity, ScrollView, Text, View, Image } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons"
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from "./fruitsRow.style";

const FruitsRow = () => {
	const navigation = useNavigation();
	const fruits = [
		{ id: '1', category: 'Vegetable', name: 'Apple', price: '$1.99', image: require('../../assets/images/tomatos-bg.jpg')},
		{ id: '2', category: 'Vegetable', name: 'Banana', price: '$0.99', image: require('../../assets/images/brocbg.jpg')},
		{ id: '3', category: 'Vegetable', name: 'Banana', price: '$0.99', image: require('../../assets/images/brocbg.jpg')},
		{ id: '4', category: 'Vegetable', name: 'Banana', price: '$0.99', image: require('../../assets/images/brocbg.jpg')},
		{ id: '5', category: 'Vegetable', name: 'Banana', price: '$0.99', image: require('../../assets/images/brocbg.jpg')},
		{ id: '6', category: 'Vegetable', name: 'Banana', price: '$0.99', image: require('../../assets/images/brocbg.jpg')},
		{ id: '7', category: 'Vegetable', name: 'Banana', price: '$0.99', image: require('../../assets/images/brocbg.jpg')},
	]
	
	//const filteredFruits = fruits.filter((fruit) => fruit.category === selectedCategory)

	const renderItem = ({ item }) => {
		const handlePress = () => {
			navigation.navigate('FruitsPage', {selectedItem: item});
		}
		
		return(
			<View style={styles.fruitsRowWrapper}>
				<View style={styles.containers}>
					<View style={styles.containerItems}>
						<TouchableOpacity onPress={handlePress}>
							<Image 
									source={item.image} 
									style={styles.imageContainer}
								/>
							<View style={styles.contentContainer}>
								<Text style={styles.name}>{item.name}</Text>
								<Text style={styles.price}>Price: {item.price}</Text>
							</View>
							<TouchableOpacity style={styles.likeButton}>
								<Ionicons name="heart-outline" size={24} color="black" />
							</TouchableOpacity>
						</TouchableOpacity>	
					</View>		
				</View>	
			</View>	
			);
	}

	return (
			<FlatList
				data={fruits}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				numColumns={2}
				contentContainerStyle={styles.containerStyle}
			/>

	)
}

export default FruitsRow

