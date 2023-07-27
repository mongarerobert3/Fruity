import { Image, Text, View } from 'react-native';
import React from 'react';

import styles from './welcome.style';

const Welcome = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/images/welcome.jpg")}
				style={styles.welcomeImage}
			/>
		</View>
	)
}

export default Welcome

