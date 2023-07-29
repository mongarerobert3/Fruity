import { FlatList,TouchableOpacity, Text, View, Image } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';

import styles from "./fruitsRow.style";

const FruitsRow = () => {
	const navigation = useNavigation();

	const fruits = [
		{ id: '1', category: 'Vegetable', name: 'Apple', price: '$1.99', image: require('../../assets/images/tomatos-bg.jpg')},
		{ id: '2', category: 'Vegetable', name: 'Banana', price: '$0.99', image: require('../../assets/images/brocbg.jpg')},
		{ id: '3', category: 'Vegetable', name: 'Banana', price: '$0.99', image: require('../../assets/images/brocbg.jpg')},
	]

	const renderItem = ({ item }) => {
		const handlePress = () => {
			navigation.navigate('FruitsPage', {selectedItem: item});
		}
		
		return(
			<View style={styles.container}>
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
			);
	}

	return (
		<View style={styles.fruitsRowWrapper}>
			<FlatList
				data={fruits}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				horizontal
				pagingEnabled
				snapToInterval={300}
				decelerationRate='fast'
				showsHorizontalScrollIndicator={false}
			/>
		</View>	
	)
}

export default FruitsRow

