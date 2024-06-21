import React, {useState} from 'react';
import {Text, View, Dimensions, StatusBar, ScrollView} from 'react-native';
import {COLORS} from '../../constans';
import styles from './styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import InputBox from '../../components/InputBox';
import ButtonCustom from '../../components/bttton';

const {height, width} = Dimensions.get('window');

const ForgetPassword = ({navigation}) => {
  const [postdata, setPostdata] = useState({
    Password: null,
    re_Password: null,
  });

  const LoginValidationSchema = yup.object().shape({
    Password: yup.string().required('Password is Required'),
    re_Password: yup.string().required('Please Re-enter Password '),
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <View style={styles.innercontainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <Text style={styles.heading}>Set New Password</Text>
          <Text style={styles.subheading}>
            Please create your new password.{' '}
          </Text>
          <Formik
            validationSchema={LoginValidationSchema}
            initialValues={postdata}
            onSubmit={values => {
              if (values.Password === values.re_Password) {
                navigation.navigate('mediacapture');
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
              isValid,
            }) => {
              return (
                <>
                  <InputBox
                    nineone
                    placeholder={'Password'}
                    value={values.Password}
                    onChangeText={handleChange('Password')}
                    errors={touched?.Password && errors?.Password}
                    icon
                    secureTextEntry
                  />
                  <InputBox
                    nineone
                    placeholder={'Re- enter Password'}
                    value={values.re_Password}
                    onChangeText={handleChange('re_Password')}
                    errors={touched?.re_Password && errors?.re_Password}
                    icon
                    secureTextEntry
                  />

                  <ButtonCustom
                    children="CONFIRM"
                    btnStyle={[styles.btn, {marginBottom: height * 0.1}]}
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

export default ForgetPassword;
