import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constans';
import styles from './styles';
import InputBox from '../../components/InputBox';
import CheckBox from 'react-native-check-box';
import {Formik} from 'formik';
import * as yup from 'yup';
import ButtonCustom from '../../components/bttton';
const {height, width} = Dimensions.get('window');

const SignUp = ({navigation}) => {
  const [isSelected, setisSelected] = useState('false');

  const [postdata, setPostdata] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });
  useEffect(() => {
    setPostdata({
      name: '',
      email: '',
      mobile: '',
      password: '',
    });
  }, []);

  const LoginValidationSchema = yup.object().shape({
    email: yup.string().required('please enter email'),
    name: yup.string().required('please enter name'),
    mobile: yup.string().required('Phone number is Required'),
    password: yup.string().required('Password is Required'),
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <View style={styles.innercontainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <Text style={styles.heading}>Create Account</Text>
          <Text style={styles.subheading}>
            Please fill all the details to create your account.
          </Text>

          <Formik
            validationSchema={LoginValidationSchema}
            initialValues={postdata}
            
            onSubmit={values => {
              if (
                values.name &&
                values.email &&
                values.mobile &&
                values.password &&
                isSelected
              ) {
                navigation.navigate('mediacapture');
              } else {
                if (!isSelected) {
                  alert('Please agree to the Terms & Conditions');
                }
              }
            }}>
            {({
              setFieldValue,
              handleChange,
              handleBlur,
              handleSubmit,
              touched,
              values,
              errors,
            }) => {
              return (
                <>
                  <InputBox
                    nineone
                    placeholder={'name'}
                    onChangeText={handleChange('name')}
                    value={values?.name}
                    errors={touched?.name && errors?.name}
                    errorTextstyle={{
                      color: COLORS.white,
                      fontSize: SIZES.width * 0.035,
                    }}
                  />
                  <InputBox
                    nineone
                    placeholder={'Contact Number'}
                    keyboardType={'numeric'}
                    onChangeText={handleChange('mobile')}
                    value={values?.mobile}
                    maxLength={10}
                    errors={touched?.mobile && errors?.mobile}
                    errorTextstyle={{
                      color: COLORS.white,
                      fontSize: SIZES.width * 0.035,
                    }}
                  />
                  <InputBox
                    nineone
                    placeholder={'Email'}
                    keyboardType={'email-address'}
                    onChangeText={handleChange('email')}
                    value={values?.email}
                    errors={touched?.email && errors?.email}
                    errorTextstyle={{
                      color: COLORS.white,
                      fontSize: SIZES.width * 0.035,
                    }}
                  />
                  <InputBox
                    nineone
                    placeholder={'Password'}
                    onChangeText={handleChange('password')}
                    value={values?.password}
                    errors={touched?.password && errors?.password}
                    icon
                    secureTextEntry
                    errorTextstyle={{
                      color: COLORS.white,
                      fontSize: SIZES.width * 0.035,
                    }}
                  />
                  <CheckBox
                  
                    isChecked={isSelected}
                    onClick={() => setisSelected(!isSelected)}
                    checkedCheckBoxColor={COLORS.primary}
                    uncheckedCheckBoxColor={COLORS.primary}
                    rightTextView={
                      <View style={styles.row}>
                        <Text style={styles.checktext}> I agree with </Text>
                        <TouchableOpacity>
                          <Text style={styles.term}>Terms & Conditions.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('logIn')}>
                          <Text style={styles.loginbtn}>Login</Text>
                        </TouchableOpacity>
                      </View>
                    }
                    style={{marginLeft: width * 0.026}}
                  />
                  <ButtonCustom
                    children="VERIFY"
                    btnStyle={[styles.btn, {marginBottom: height * 0.06}]}
                    onPress={handleSubmit}
                   
                  />
                </>
              );
            }}
          </Formik>
        </ScrollView>
      </View>
    </View>
  );
};
export default SignUp;
