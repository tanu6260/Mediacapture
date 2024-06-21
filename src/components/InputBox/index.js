import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
// import {COLORS, FONTS, SIZES, icons} from '../../constants';
import {COLORS, FONTS, SIZES} from '../../constans';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InputBox = ({
  placeholder,
  search,
  maxLength,
  keyboardType,
  label,
  onChangeText,
  value,
  editable,
  icon,
  multiline,
  textAlignVertical,
  numberOfLines,
  labelStyle,
  inputboxstyle,
  errors,
  errorstyle,
  secureTextEntry,
  img,
  iconStyle,

  borderbox,
  rightimgstyle,
  placeholderstyle,
  placeholderTextColor,
}) => {
  const [visible, setVisible] = useState(true);
  const [show, setshow] = useState(false);

  return (
    <View>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View
        style={[
          styles.box1,
          borderbox && styles.inputborderbox,
          inputboxstyle,
        ]}>
        <TextInput
          placeholder={placeholder}
          style={[
            styles.placeholdera,
            icon && {width: SIZES.width * 0.8},
            placeholderstyle,
          ]}
          maxLength={maxLength}
          editable={editable}
          keyboardType={keyboardType}
          placeholderTextColor={placeholderTextColor || COLORS.gray50}
          onChangeText={onChangeText}
          value={value}
          multiline={multiline}
          numberOfLines={numberOfLines}
          // textAlignVertical='top'

          textAlignVertical={textAlignVertical}
          secureTextEntry={secureTextEntry && visible}
        />

        {img && <Image source={img} style={[styles.image, rightimgstyle]} />}

        {icon && (
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible), setshow(!show);
            }}
            style={[iconStyle]}>
            <Ionicons
              name={show ? 'eye' : 'eye-off'}
              size={20}
              color={COLORS.gray70}
              style={{}}
            />
          </TouchableOpacity>
        )}
      </View>
      {errors ? (
        <Text
          style={[
            styles.error,
            borderbox && {marginLeft: SIZES.width * 0.02},
            errorstyle,
          ]}>
          {errors}
        </Text>
      ) : null}
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  box1: {
    width: SIZES.width * 0.88,
    elevation: 4,
    borderColor: COLORS.gray20,
    borderRadius: 14,
    alignSelf: 'center',
    marginBottom: SIZES.height * 0.012,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  placeholdera: {
    ...FONTS.fourHundred,
    fontSize: SIZES.width * 0.032,
    color: COLORS.black,
    paddingLeft: SIZES.width * 0.03,
    marginBottom: -3,
    width: SIZES.width * 0.78,
  },
  label: {
    fontSize: 14,
    ...FONTS.fiveHundred,
    color: COLORS.gray40,
    marginLeft: SIZES.width * 0.02,
    width: SIZES.width * 0.88,
  },

  icon: {
    width: SIZES.width * 0.06,
    height: SIZES.height * 0.025,
    resizeMode: 'contain',
    tintColor: COLORS.gray60,
  },
  error: {
    color: 'red',
    fontSize: 12,
    ...FONTS.fourHundred,
    marginLeft: SIZES.width * 0.042,
    marginTop: SIZES.height * -0.012,
    marginBottom: SIZES.height * 0.02,
  },
  image: {
    width: SIZES.width * 0.05,
    height: SIZES.height * 0.023,
    resizeMode: 'contain',
    tintColor: COLORS.primary,
  },
  // -----------inputborderbox
  inputborderbox: {
    marginVertical: SIZES.height * 0.01,
    borderWidth: 1,
    borderColor: COLORS.lightblue,
    elevation: 0,
    width: SIZES.width * 0.93,
  },
});
