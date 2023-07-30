import { TouchableOpacity, Text, FlatList, View } from 'react-native';
import React, {useState} from 'react';
import styles from "./categories.styles";

const Categories = () => {
	//const [selectedCat, setSelectedCat] = useState(null)

  const categories = [
    {id: '1', name: 'All'},
    {id: '2', name: 'Fruits'},
    {id: '3', name: 'Vegetables'},
    {id: '4', name: 'Farms'},
  ];

	
  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={categories}
        renderItem={({item}) => (
					<TouchableOpacity>
						<View style={styles.categoryItem}>
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
					</TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
				numColumns={4}
      />
    </View>
  )
}

export default Categories;
