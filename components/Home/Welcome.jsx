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
			<View style={styles.wordings} >
				<Text style={styles.welcomeTxt}>
					Discount
				</Text>
				<Text style={styles.welcTxtPercent}>
					20%
				</Text>
			</View>	
			<Text style={styles.welcomeTxtSlug}>
				On the first Order
			</Text>
		</View>
	)
}

export default Welcome
