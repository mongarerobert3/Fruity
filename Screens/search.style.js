import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
	searchBarWrapper: {
		marginTop: 50,
		borderRadius: 50,
		borderColor: COLORS.gray,
		marginLeft: -5
	},
	SearchBar: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 30,
		marginTop: 10,
		borderRadius: 8,
		backgroundColor: "red",
	},
	searchInput: {
		fontFamily: "semibold",
		fontSize: SIZES.medium,
		flex: 1,
		paddingVertical: 10,
		marginHorizontal: 10
	},
	searchIcon: {
		padding: 10,
	}
})

export default styles