import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const Button = ({ title, onPress}) => {
	return (
		<TouchableOpacity 
			onPress={() => {}}
			style={styles.btnStyle}
		>
			<Text style={styles.btnTxt}>{title}</Text>
		</TouchableOpacity>
	)
}

export default Button

const styles = StyleSheet.create({
	btnTxt: {
		fontFamily: "bold",
		color: COLORS.lightWhite,
		fontSize: 18
	},
	btnStyle: {
		height: 50,
		width: "100%",
		marginVertical: 20,
		backgroundColor: COLORS.primary,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12
	}
})