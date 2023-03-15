import {Button, Input, ScrollView, Stack} from 'native-base';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Text as TextNative} from 'native-base';
import {globalStyles} from '../Themes/globalStyles';
import {Formik} from 'formik';
import * as yup from 'yup';
import setLoading from '../HOC/setLoading';
import {Logo, SupportIcon} from '../assets/Icons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Types/Types';

const ReviewSchema = yup.object({
  email: yup.string().required('Email is required').email('Invalid email'),
});

const initialValues = {
  email: '',
};

type passProps = NativeStackScreenProps<RootStackParamList, 'ResetPassword'>;
const ResetPassword: React.FC<passProps> = ({navigation}) => {
  const title = 'Login';

  const pressHandler = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <View style={{alignItems: 'center'}}>
          <Logo />
          <Text style={globalStyles.title}>Forgot Password</Text>
          <Text style={globalStyles.text}>
            Enter your email and you'll receive an email to recover your
            password
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
                {props.touched.email && props.errors.email && (
                  <Text style={globalStyles.textError}>
                    {props.errors.email}
                  </Text>
                )}

                <Button
                  shadow={3}
                  style={globalStyles.button}
                  _text={globalStyles.textButton}
                  onPress={props.errors.email ? null : props.handleSubmit}>
                  Login
                </Button>
              </>
            )}
          </Formik>

          <Stack direction="row" marginTop="32px" justifyContent="center">
            <Text>Do you have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <TextNative color="primary.400">Sign in now</TextNative>
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

export default setLoading(ResetPassword);

const styles = StyleSheet.create({
  supportButtText: {
    color: 'text.primary',
  },
  supportButton: {
    paddingTop: 11,
    paddingBottom: 11,
    marginTop: 32,
    alignSelf: 'center',
    borderColor: '#00C48C',
    borderRadius: 30,
    width: 128,
  },
});
