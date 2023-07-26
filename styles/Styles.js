import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from "../constants/theme";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  fruityTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    fontWeight: FONT.weight
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
    borderColor: 'grey',
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  homeFruitContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%', 
    height: '600%',
    backgroundColor: 'red',
  },
  fruitImage: {
    width: '100%',
    height:'100%',
    marginRight: 10,
    borderRadius: 25,
  },
  fruitName:{
    fontSize: 14,
    fontWeight: 'bold'
  },
});

export default Styles;