import {StyleSheet, Dimensions} from 'react-native';
import { COLORS , FONTS } from '../../constans';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  innercontainer: {
    width: width * 0.94,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    marginTop: height * 0.14,
    marginBottom: height * 0.03,
    borderRadius: 20,
    overflow: 'hidden',
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.044,
    ...FONTS.sixHundred,
    alignSelf: 'center',
    marginTop: height * 0.025,
  },
  subheading: {
    color: COLORS.black,
    fontSize: width * 0.034,
    ...FONTS.fiveHundred,
    alignSelf: 'center',
    marginBottom: height * 0.03,
  },
  btn: {
    marginTop: height * 0.04,
    alignSelf: 'center',
    width: width * 0.87,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  donthaveaccount: {
    color: COLORS.black,
    fontSize: width * 0.031,
    ...FONTS.fiveHundred,
    alignSelf: 'center',
    marginTop: height * 0.01,
  },
  createone: {
    color: COLORS.primary,
    fontSize: width * 0.032,
    ...FONTS.sixHundred,
    alignSelf: 'center',
    marginTop: height * 0.01,
  },
  forget: {
    color: COLORS.primary,
    fontSize: width * 0.032,
    ...FONTS.fiveHundred,
    marginRight: width * 0.03,
  },
});
