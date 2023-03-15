import {Button, Input, ScrollView, Stack} from 'native-base';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Text as TextNative} from 'native-base';
import {globalStyles} from '../Themes/globalStyles';
import {Formik} from 'formik';
import * as yup from 'yup';
import setLoading from '../HOC/setLoading';
import {FacebookIcon, GoogleIcon, Logo, SupportIcon} from '../assets/Icons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {isAuthProps, RootStackParamList} from '../Types/Types';

const ReviewSchema = yup.object({
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup.string().required().min(7, 'Pasword is incorrect'),
});

const initialValues = {
  email: '',
  password: '',
};

type SingInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
type Props = isAuthProps & SingInProps;

const SignIn: React.FC<Props> = ({setIsAuth, navigation}) => {
  console.log(setIsAuth);
  const pressHandler = () => {
    setIsAuth(true);
  };
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <View style={{alignItems: 'center'}}>
          <Logo />
          <Text style={globalStyles.title}>Welcome</Text>
          <Text style={globalStyles.text}>
            Enter your email and password to access your account
          </Text>
        </View>

        <View style={globalStyles.formContainer}>
          <Formik
            initialValues={initialValues}
            validationSchema={ReviewSchema}
            onSubmit={(values, actions) => {
              pressHandler();
              actions.resetForm();
            }}>
            {props => (
              <>
                {/* Email */}
                <Input
                  style={globalStyles.input}
                  color="black"
                  value={props.values.email}
                  onChangeText={props.handleChange('email')}
                  borderColor="rgba(10, 37, 64, 0.32)"
                  size="sm"
                  placeholder="Email"
                  type="text"
                  onBlur={props.handleBlur('email')}
                />
                {props.touched.email && props.errors.email ? (
                  <Text style={globalStyles.textError}>
                    {props.errors.email}
                  </Text>
                ) : (
                  ''
                )}
                {/* Password */}
                <Input
                  mt="16px"
                  style={globalStyles.input}
                  color="black"
                  value={props.values.password}
                  onChangeText={props.handleChange('password')}
                  borderColor="rgba(10, 37, 64, 0.32)"
                  size="sm"
                  placeholder="Password"
                  onBlur={props.handleBlur('password')}
                  type="password"
                />
                {props.touched.password && props.errors.password ? (
                  <Text style={globalStyles.textError}>
                    {props.errors.password}
                  </Text>
                ) : (
                  ''
                )}

                <Button
                  shadow={3}
                  style={globalStyles.button}
                  _text={globalStyles.textButton}
                  onPress={
                    props.errors.email || props.errors.password
                      ? undefined
                      : props.handleSubmit
                  }>
                  Login
                </Button>
              </>
            )}
          </Formik>

          <View style={globalStyles.rule}>
            <View style={globalStyles.ruleLine} />
            <Text style={globalStyles.textOr}>OR</Text>
            <View style={globalStyles.ruleLine} />
          </View>
          <Button
            marginTop="3"
            borderColor="primary.400"
            variant="outline"
            leftIcon={<FacebookIcon />}>
            Sign up with Facebook
          </Button>
          <Button
            borderColor="primary.400"
            marginTop="12px"
            variant="outline"
            leftIcon={<GoogleIcon />}>
            Sign up with Google
          </Button>
          <Stack marginTop="32px" alignItems="center">
            <TouchableOpacity
              onPress={() => navigation.navigate('ResetPassword')}>
              <Text>Do you forget your password? </Text>
            </TouchableOpacity>
          </Stack>
          <Stack direction="row" marginTop="32px" justifyContent="center">
            <Text>Do not have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <TextNative color="#47A9DA">Register now</TextNative>
            </TouchableOpacity>
          </Stack>
          <Button
            _text={globalStyles.supportButtText}
            style={globalStyles.supportButton}
            variant="outline"
            leftIcon={<SupportIcon />}>
            Support
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default setLoading(SignIn);
