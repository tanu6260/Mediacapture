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
    borderRadius: 20,
    marginTop: height * 0.14,
    marginBottom: height * 0.02,
    overflow: 'hidden',
    height: height * 0.7
  },
  heading: {
    color: COLORS.black,
    fontSize: width * 0.042,
    ...FONTS.sixHundred,
    alignSelf: 'center',
    marginTop: height * 0.025,
  },
  subheading: {
    color: COLORS.black,
    fontSize: width * 0.032,
    ...FONTS.fiveHundred,
    alignSelf: 'center',
    marginBottom: height * 0.03,
  },
  btn: {
    marginTop: height * 0.04,
    alignSelf: 'center',
    width: width * 0.87,
  },
});
