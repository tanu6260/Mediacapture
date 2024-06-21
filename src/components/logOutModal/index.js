import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {COLORS, FONTS, SIZES} from '../../constans';
import {useNavigation} from '@react-navigation/native';

const LogoutModal = ({visible, onChangeVisible}) => {
  const navigation = useNavigation();

  return (
    <Modal isVisible={visible}>
      <View style={styles.modalbox}>
        <Text style={styles.headingTxt}>
          Are You Sure You Want To Logout 
        </Text>

        <View style={styles.btnrowBox}>
          <TouchableOpacity
            style={styles.btntextStyle}
            onPress={() => onChangeVisible(false)}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.width * 0.045,
                textAlign: 'center',
                textAlignVertical: 'center',
                marginTop: SIZES.height * 0.01,
              }}>
              {'No'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btntextStyle}
            onPress={() => navigation.navigate('logIn')}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.width * 0.045,
                textAlign: 'center',
                textAlignVertical: 'center',
                marginTop: SIZES.height * 0.01,
              }}>
              {'Yes'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  // ----------------------------------
  headingTxt: {
    fontSize: SIZES.width * 0.037,
    color: COLORS.black,
    fontFamily: FONTS.semiBold,
    marginBottom: -3,
    textAlign: 'center',
    // marginTop: SIZES.height * 0.015,
  },
  modalbox: {
    width: SIZES.width * 0.92,
    padding: SIZES.width * 0.07,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  btnrowBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SIZES.width * 0.04,
    marginTop: SIZES.width * 0.02,
    // alignItems:'center',
    // justifyContent:'center'
  },
  btntextStyle: {
    width: SIZES.width * 0.34,
    height: SIZES.height * 0.05,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    // borderColor: COLORS.red,
    // borderWidth: 1,
  },
  //   yesbtnBox: {
  //     width: SIZES.width * 0.25,
  //   },
});
