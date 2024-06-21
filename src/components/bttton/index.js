import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
// import {COLORS, FONTS, SIZES, icons, images} from './../../constants';
import {COLORS, FONTS, SIZES} from '../../constans';
const {height, width} = Dimensions.get('window');

const ButtonCustom = ({
  onPress,
  children,
  iconbtns,
  btnStyle,
  btntextStyle,
  load,
  disabled,
  loadingIndicator,
  loadcolor,
  loadsize,
  borderbtn,
  iconMdmBtn,
  iconMdm,
  mdmiconstyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      disabled={disabled}
      style={[
        styles.longButton,
        borderbtn && {
          backgroundColor: COLORS.white,
          borderColor: COLORS.primary,
          borderWidth: 1,
        },
        iconMdmBtn && styles.iconMdmBtn,
        btnStyle,
      ]}>
      {loadingIndicator && (
        <ActivityIndicator
          size={loadsize}
          color={loadcolor}
          style={{marginRight: SIZES.width * 0.03}}
        />
      )}
      {iconMdm &&
        {
          /* <Image source={iconMdm} style={[styles.mdmicon, mdmiconstyle]} /> */
        }}

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {iconbtns && (
          <View style={styles.iconbtnbox}>
            {/* <Image source={icons.bag} style={styles.iconbtn} /> */}
          </View>
        )}
        {load && (
          <View style={styles.indBox}>
            <ActivityIndicator size={width * 0.065} color={COLORS.white} />
          </View>
        )}
        <Text
          style={[
            styles.buttonText,
            borderbtn && {color: COLORS.primary},
            btntextStyle,
          ]}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  longButton: {
    width: width * 0.92,
    height: height * 0.06,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.primary,
    elevation: 4,
    shadowOffset: {width: width * 0.15, height: height * 0.15},
    shadowOpacity: 6,
    shadowRadius: 10,
  },
  icon: {
    width: width * 0.05,
    height: height * 0.04,
    resizeMode: 'contain',
    marginRight: width * 0.02,
    tintColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    ...FONTS.fiveHundred,
    fontSize: width * 0.036,
    marginBottom: -3,
  },
  indBox: {marginLeft: width * -0.03, marginRight: width * 0.02},
  iconbtnbox: {
    width: width * 0.114,
    height: width * 0.11,
    borderRadius: 30,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: width * 0.02,
    marginLeft: width * -0.01,
  },
  iconbtn: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
  },
  mdmicon: {
    width: width * 0.035,
    height: width * 0.035,
    resizeMode: 'contain',
    marginRight: width * 0.02,
    tintColor: COLORS.primary,
  },
  iconMdmBtn: {
    width: width * 0.43,
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 0.054,
  },
  
});
export default ButtonCustom;
