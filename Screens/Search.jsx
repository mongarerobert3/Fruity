import { TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons"

import styles from "./search.style"

const Search = () => {
	return (
		<SafeAreaView>
			<View style={styles.searchBarWrapper}>
				<View style={styles.SearchBar}>
					<TextInput
						placeholder='What are you looking for?' 
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
			
		</SafeAreaView>
	)
}

export default Search

