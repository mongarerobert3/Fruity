import { 
	TextInput, 
	TouchableOpacity, 
	View 
} from 'react-native'
import React from 'react'
import styles from './searchBar.style'
import { Ionicons } from "@expo/vector-icons"

const SearchBar = () => {

	return (
		<View style={styles.searchBarWrapper}>
			<View style={styles.SearchBar}>
				<TextInput
					placeholder='Seach Fruit' 
					style={styles.searchInput}
				/>
				<TouchableOpacity style={styles.searchIcon}>
					<Ionicons
						name='search-outline'
						color="black"
						size={30}
					/>
				</TouchableOpacity>
				
			</View>
		</View>
		
		
	)
}

export default SearchBar

