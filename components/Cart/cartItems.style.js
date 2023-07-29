import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
	notFound: {
		marginHorizontal: 30,
		marginVertical: 30,
		alignItems: "center"
	},
	notFoundText: {
		fontFamily: "semibold",
		marginHorizontal:30,
		fontSize: SIZES.medium,
	},
	FruitsCatBtn: {
		width: 200,
		backgroundColor: "red",
		borderRadius: 50,
		padding: 5,
		alignItems: "center",
		alignSelf: "center",
		marginTop: 30
	},
	FruitsCatBtnTxt: {
		fontFamily: "semibold",
		marginHorizontal:30,
		fontSize: SIZES.medium,
	}
})

export default styles;