import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {COLORS} from '../../constans';
import styles from './styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import InputBox from '../../components/InputBox';
import ButtonCustom from '../../components/bttton';

const LogIn = ({navigation}) => {
  const [postdata, setPostdata] = useState({
    email: '',
    password: '',
  });
  const LoginValidationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const handle = () => {
    setPostdata({
      name: '',
      email: '',
      mobile: '',
      password: '',
    });
    navigation.navigate('mediacapture');
  };


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <View style={styles.innercontainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <Text style={styles.heading}>Login</Text>
          <Text style={styles.subheading}>
            Please enter your email id & password.
          </Text>
          <Formik
            validationSchema={LoginValidationSchema}
            initialValues={postdata}
            onSubmit={handle}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              touched,
              values,
              errors,
              isValid,
            }) => (
              <>
                <InputBox
                  nineone
                  placeholder={'Email'}
                  keyboardType={'email-address'}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  errors={touched.email && errors.email}
                />
                <InputBox
                  placeholder={'Password'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  errors={touched.password && errors.password}
                  icon
                  secureTextEntry
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgetPassword')}
                  style={{alignSelf: 'flex-end'}}>
                  <Text style={styles.forget}>Forgot ?</Text>
                </TouchableOpacity>
                <ButtonCustom
                  onPress={handleSubmit}
                  children="LOGIN"
                  btnStyle={styles.btn}
                />
                <View style={styles.row}>
                  <Text style={styles.donthaveaccount}>
                    Don’t have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('signUp')}>
                    <Text style={styles.createone}>Create One</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </ScrollView>
      </View>
    </View>
  );
};

export default LogIn;
