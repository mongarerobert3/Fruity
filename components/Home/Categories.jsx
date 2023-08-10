import { TouchableOpacity, Text, FlatList, View } from 'react-native';
import React, {useState} from 'react';
import styles from "./categories.styles";
import { useNavigation } from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();

	//const [selectedCat, setSelectedCat] = useState(null)

  const categories = [
    {id: '1', name: 'Fruits'},
    {id: '2', name: 'Vegetables'},
    {id: '3', name: 'Suppliers'},
    {id: '4', name: 'Farms'},
  ];

  const handlePress = (item) => {
    if (item.id === '1'){
      navigation.navigate('FruitsShop', { selectedCategory: item.name })
    } else if (item.id === '2'){
      navigation.navigate('vegShop', { selectedCategory: item.name })
    } else if (item.id === '3'){
      navigation.navigate('FruitsRow', { selectedCategory: item.name })
    } else {
      navigation.navigate('FruitsRow', { selectedCategory: item.name })
    }
  }
  
  return (
    <FlatList
      data={categories}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => handlePress(item)}>
          <Text style={styles.categoryText}>{item.name}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
      numColumns={4}
    />
  )

}

export default Categories;
