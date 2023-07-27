import { FlatList, Text,Image, View } from 'react-native'
import React from 'react'
import styles from "./fruitsRow.style";

const FruitsRow = () => {
	return (
		<View style={styles.fruitsRowWrapper}>
			<View style={styles.likeIcon}>
				<Image/>
			</View>	
		</View>
	)
}

export default FruitsRow

