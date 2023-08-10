import { Text, View } from 'react-native';
import React from 'react';
import {BackBtn, FruitsRow} from '../../components';
import { useNavigation } from '@react-navigation/native';

import styles from './cat.styles';

const FruitsShop = () => {
	const navigation = useNavigation();

	const handlePress = () => {
		navigation.navigate('HomePage');
	}

  return (
	<View>
		<View style={styles.backbtn}>
			<BackBtn onPress={handlePress}/>
		</View>
		<View style={styles.fruitsContainer}>
			<FruitsRow />
		</View>
	</View>
  )
}

export default FruitsShop

