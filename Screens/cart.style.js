import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

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
})

export default styles;