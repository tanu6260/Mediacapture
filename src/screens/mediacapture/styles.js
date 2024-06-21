
import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constans';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  leftText: {
    fontSize: SIZES.width * 0.042,
    ...FONTS.sixHundred,
    color: COLORS.black,
  },

  innercontainer: {
    width: width * 0.94,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    marginVertical: height * 0.05,
  },
  photobox: {
    width: SIZES.width * 0.28,
    height: SIZES.height * 0.11,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 12,
    borderColor: COLORS.gray10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.height * 0.01,
    // overflow: 'hidden',
  },
  cameratext: {
    ...FONTS.sixHundred,
    fontSize: SIZES.width * 0.028,
    color: COLORS.primary,
    marginBottom: -2,
  },
  photo: {
    width: SIZES.width * 0.26,
    height: SIZES.height * 0.13,
    borderRadius: 12,
    resizeMode: 'contain',
    // overflow: 'hidden',
    borderWidth:1,
    borderColor:COLORS.gray10
  },
  crossMainContaint: {
    position: 'absolute',
    top: SIZES.height * -0.02,
    right: SIZES.width * -0.011,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.width * 0.05,
    elevation: 5,
    padding: 2,
  },
  rowwrap: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    columnGap: SIZES.width * 0.03,
  },

  //..............modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
  backgroundVideo: {
    width: SIZES.width,
    height: SIZES.height
    // alignItems: 'center',
  },
  videoIconContainer: {
    position: 'absolute',
    top: SIZES.width * 0.46,
    right: SIZES.width * 0.44,

  },

  crossMainContaint: {
    position: 'absolute',
    top: SIZES.height * -0.015,
    right: SIZES.width * -0.011,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.width * 0.05,
    elevation: 5,
    padding: 2,
  },
  iconstyle: {
    fontSize: SIZES.width * 0.09,
    tintColor: COLORS.white,
  },
  // .............
  collapstitle: {
    ...FONTS.fiveHundred,
    color: COLORS.white,
    fontSize: width * 0.034,
    marginBottom: -4,
  },
  rowbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: height * 0.02,
  },
  bottomcross: {
    alignSelf: 'flex-end',
    marginRight: width * 0.02,
    // marginBottom: height * 0.01,
    tintColor: COLORS.primary,
  },
});







//   border: {
//     borderTopWidth: 1,
//     borderColor: COLORS.lightblue,
//     marginVertical: SIZES.height * 0.012,
//   },
 
//   restinfotext: {
//     color: COLORS.black,
//     fontSize: SIZES.width * 0.032,
//     ...FONTS.fourHundred,
//     marginBottom: -3,
//   },
//   reviewbox: {
//     borderWidth: 1,
//     borderColor: COLORS.lightblue,
//     borderRadius: 10,
//     alignSelf: 'center',
//     paddingVertical: SIZES.height * 0.02,
//     marginVertical: SIZES.height * 0.01,
//     width: SIZES.width * 0.93,
//   },

//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: COLORS.black,
//   },
//   // modalView: {
//   //   width: SIZES.width,
//   //   height: SIZES.height,
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   // elevation: 5,
//   // },
//   backgroundVideo: {
//     width: SIZES.width,
//     height: SIZES.height,
//     // alignItems: 'center',
//   },

//   crossMainContaint: {
//     position: 'absolute',
//     top: SIZES.height * -0.015,
//     right: SIZES.width * -0.011,
//     backgroundColor: COLORS.white,
//     borderRadius: SIZES.width * 0.05,
//     elevation: 5,
//     padding: 2,
//   },
//   cross: {
//     height: SIZES.width * 0.05,
//     width: SIZES.width * 0.05,
//     // marginRight:- SIZES.width * 0.03,
//     tintColor: COLORS.gray80,
//   },

//   playBtn: {
//     fontSize: SIZES.width * 0.05,
//     color: COLORS.white,
//     backgroundColor: COLORS.primary2,
//   },
//   videoIconContainer: {
//     position: 'absolute',
//     top: SIZES.height * 0.5,
//     right: SIZES.width * 0.5,
//     // padding: 7,
//     // backgroundColor: 'rgba(244,244,244, 0.4)',
//     // borderRadius: SIZES.width * 0.01,
//   },
//   iconstyle: {
//     fontSize: SIZES.width * 0.09,
//     tintColor: COLORS.white,
//   },
//   imgbox: {
//     marginRight: SIZES.width * 0.05,
//     borderWidth: 1,
//     borderColor: COLORS.gray10,
//   },
//   videoImg: {
//     width: SIZES.width * 0.45,
//     height: SIZES.width * 0.45,
//     borderWidth: 1,
//   },

//   selectedTextStyle:{
//     color:COLORS.black,
//     fontSize:SIZES.width*0.035,
//     fontFamily:FONTS.medium,
//     width:SIZES.width*0.6,
//     borderWidth:1,
//     // margin:0,
//     // backgroundColor:'red'
//   },
//   editbtn: {
//     width: SIZES.width * .1,
//     height: SIZES.width * .1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginLeft: SIZES.width * .01,
//     position: 'absolute',
//     top: 0,
//     right: 0,
//   }
// });
