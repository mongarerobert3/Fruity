import { StyleSheet } from 'react-native';
import { SIZES } from "../../constants"

const Styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    width: "100%",
    //alignItems: "center",
    //justifyContent: "center",
  },
  welcomeImage: {
    borderRadius: 50,
    width: "90%",
    height: 180,
    paddingHorizontal: 20,
    marginLeft: 20,
    resizeMode: "contain"
  },
  wordings: {
    flexDirection: "row",
    marginHorizontal: 60,
    marginTop: -130,
  },
  welcomeTxt: {
    fontFamily: "bold",
    fontSize: SIZES.xLarge,
    paddingTop: 10
  },
  welcomeTxtSlug: {
    fontFamily: "bold",
    fontSize: SIZES.small,
    marginTop: -35,
    marginHorizontal: 60,
    marginBottom: 30

  },
  welcTxtPercent: {
    fontFamily: "bold",
    fontSize: SIZES.xxLarge,
    paddingHorizontal: 20
  },
  percentagePart: {
    //alignItems: "right"
  }
});

export default Styles;