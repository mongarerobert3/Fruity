import { BackHandler, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	fruitsRowWrapper: {
		marginHorizontal: 20,
		borderRadius: 50,
		width: "100%",
		height: 250
	},
	container: {
    width: 170,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageContainer: {
		borderRadius: 50,
    height: "65%",
		width: "85%"
  },
  contentContainer: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
})

export default styles