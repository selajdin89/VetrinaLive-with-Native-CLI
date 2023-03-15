import {Button, Input, ScrollView, Stack} from 'native-base';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Text as TextNative} from 'native-base';
import {globalStyles} from '../Themes/globalStyles';
import * as yup from 'yup';
import {Formik} from 'formik';
import setLoading from '../HOC/setLoading';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Types/Types';
import {FacebookIcon, GoogleIcon, Logo, SupportIcon} from '../assets/Icons';

const ReviewSchema = yup.object({
  name: yup.string().required().min(4),
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup
    .string()
    .required()
    .min(7, 'Pasword must be longer then 7 chars'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp: React.FC<SignUpProps> = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <View style={{alignItems: 'center'}}>
          <Logo />
          <Text style={globalStyles.title}>Create your e-commerce</Text>
          <Text style={globalStyles.text}>
            Prova Vetrina Live gratuitamente per 7 giorni e apri il tuo negozio
            online in pochi minuti. Nessuna carta di credito richiesta.
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
                {/* Nam and Surname */}
                <Input
                  style={globalStyles.input}
                  color="black"
                  value={props.values.name}
                  onChangeText={props.handleChange('name')}
                  borderColor="rgba(10, 37, 64, 0.32)"
                  size="sm"
                  placeholder="Name and Surname"
                  onBlur={props.handleBlur('name')}
                />
                {props.touched.name && props.errors.name && (
                  <Text style={globalStyles.textError}>
                    {props.errors.name}
                  </Text>
                )}

                {/* Email */}
                <Input
                  mt="16px"
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
                {/* Password */}
                <Input
                  mt="16px"
                  style={globalStyles.input}
                  value={props.values.password}
                  onChangeText={props.handleChange('password')}
                  borderColor="rgba(10, 37, 64, 0.32)"
                  size="sm"
                  placeholder="Password"
                  onBlur={props.handleBlur('password')}
                  type="password"
                />
                {props.touched.password && props.errors.password && (
                  <Text style={globalStyles.textError}>
                    {props.errors.password}
                  </Text>
                )}
                <Button
                  shadow={3}
                  style={globalStyles.button}
                  _text={globalStyles.textButton}
                  onPress={
                    props.errors.name ||
                    props.errors.email ||
                    props.errors.password
                      ? null
                      : props.handleSubmit
                  }>
                  Create your shop
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
            marginTop="12px"
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
          <Stack direction="row" marginTop="32px" justifyContent="center">
            <Text>Do you have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <TextNative color="primary.400">Sign it now</TextNative>
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

export default setLoading(SignUp);

const styles = StyleSheet.create({
  button: {
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 16,
    backgroundColor: 'blue.primary',
  },
  textButton: {
    fontSize: 14,
    fontWeight: '600',
  },
});
