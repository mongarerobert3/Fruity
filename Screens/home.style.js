import { StyleSheet } from "react-native";
import { SIZES } from '../constants/index';

const styles = StyleSheet.create({
  appBarWrapper: {
		marginHorizontal: 22,
		marginTop: SIZES.small
	},
	appBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	avatar: {
		width: 70,
    height: 70,
    borderRadius: 25,
	},
	welcomeText: {
		fontFamily: "semibold",
		fontSize: SIZES.xLarge
	},
	nameText: {
		fontFamily: "bold",
		fontSize: SIZES.xLarge,
		marginTop: -35
	},
});

export default styles;
