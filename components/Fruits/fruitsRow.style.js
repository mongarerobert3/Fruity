import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	fruitsRowWrapper: {
		marginHorizontal: 10,
		flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
	},
	containers: {
    marginHorizontal: 5,
    width: "100%",
    height: 200,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  containerStyle: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  containerItems: {
    width: "100%"
  },
  imageContainer: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    height: "65%",
		width: "100%",
    marginTop: 3
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