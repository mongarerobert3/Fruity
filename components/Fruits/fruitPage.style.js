import { StyleSheet } from "react-native";
import {COLORS, SIZES} from "../../constants/index";

const styles = StyleSheet.create({
	container: {
		height: 500,
		width: "90%",
		marginHorizontal: 30,
	},
	Navigation: {
		flexDirection: "row",
		marginTop: 80

	},
	iconWrapper: {
		backgroundColor: COLORS.gray2,
		padding: 15,
		borderRadius: 15
	},
	heartWrapper: {
		left: 10,
		marginLeft: 200
	},
	content: {
		marginTop: -40
	},
	imageContainer: {
		marginTop: 50,
		resizeMode: "cover",
		aspectRatio: 1,
		marginLeft: 30,
	},
	name: {
		fontFamily: "bold",
		fontSize: SIZES.xxLarge
	},
	price: {
		fontFamily: "semibold",
		fontSize: SIZES.xLarge,
	},
	category: {
		fontFamily: "regular",
		fontSize: SIZES.medium,
		marginBottom: 8,
		marginTop: -10
	},
	rating: {
		paddingVertical: 8
	},
	bottomFruitPage: {
		flexDirection: "row",
		paddingVertical: 10,
		marginTop: 100,
		width: "100%",
	},
	addToCartBtn: {
		flex: 1,
		borderRadius: 50,
		justifyContent: "flex-end",
		alignItems: "center",
		backgroundColor: "red",
		justifyContent: "center",
		marginLeft: 60
	},

	addToCartBtnTxt: {
		fontFamily: "semibold",
		fontSize: SIZES.large
	}
})

export default styles