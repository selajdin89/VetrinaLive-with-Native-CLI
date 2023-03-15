import {Formik} from 'formik';
import React from 'react';
import {
  Text,
  TextInput,
  Button as ButtonNative,
  StyleSheet,
} from 'react-native';
import {
  Box,
  Button,
  Checkbox,
  HStack,
  Input,
  ScrollView,
  Text as TextBase,
  View,
} from 'native-base';
import Card from '../components/Card';
import {globalStyles} from '../Themes/globalStyles';
import * as yup from 'yup';
// import TextArea from '../../components/TextArea';
import Entypo from 'react-native-vector-icons/Entypo';
import setLoading from '../HOC/setLoading';
import NonValidatedForm from '../components/NonValidatedForm';
import {ChewronLeftIcon, EuroIcon} from '../assets/Icons';
import TextArea from '../components/TextArea';

const ReviewSchema = yup.object({
  name: yup.string().required().min(4),
  price: yup.string().required(),
});

type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  addProduct: (values: any) => void;
};

const NewProduct: React.FC<Props> = ({setModal, addProduct}) => {
  return (
    <ScrollView>
      <Box p="15px" bgColor="#F8F9FB">
        <Box>
          <Button
            onPress={() => setModal(false)}
            style={styles.allProducts}
            shadow={9}
            colorScheme="#103B66"
            leftIcon={<ChewronLeftIcon />}
            variant="outline">
            <TextBase fontWeight="600" color="#103B66">
              All products
            </TextBase>
          </Button>
          <TextBase fontWeight="600" fontSize="28px" color="#103B66" mt="24px">
            New product
          </TextBase>
          <HStack mt="24px" mb="24px">
            <TextBase
              style={styles.tabs}
              fontWeight="600"
              color="#21B8F9"
              borderBottomColor="#21B8F9"
              borderBottomWidth="3">
              info
            </TextBase>
            <TextBase style={styles.tabs} fontWeight="600" color="#3B5166">
              variants
            </TextBase>
          </HStack>
        </Box>
        <Formik
          initialValues={{name: '', price: ''}}
          validationSchema={ReviewSchema}
          onSubmit={(values, actions) => {
            addProduct(values);
            actions.resetForm();
            console.log(values);
          }}>
          {props => (
            <View bgColor="#F8F9FB">
              <Card>
                <TextBase
                  mb="24px"
                  color="#103B66"
                  fontSize="20px"
                  fontWeight="600">
                  General Information
                </TextBase>
                <TextBase
                  mb="8px"
                  color="#546679"
                  fontSize="15px"
                  fontWeight="600">
                  Product name
                </TextBase>
                <TextInput
                  style={globalStyles.input}
                  placeholder="Lorem ipsum"
                  onChangeText={props.handleChange('name')}
                  value={props.values.name}
                  onBlur={props.handleBlur('name')}
                />
                <Text style={globalStyles.textError}>
                  {props.touched.name && props.errors.name}
                </Text>
                <TextBase
                  mb="8px"
                  color="#546679"
                  fontSize="15px"
                  fontWeight="600">
                  Description
                </TextBase>
                <TextArea />
              </Card>
              <Card>
                <TextBase
                  mb="24px"
                  color="#103B66"
                  fontSize="20px"
                  fontWeight="600">
                  Price
                </TextBase>
                <TextBase
                  mb="8px"
                  color="#546679"
                  fontSize="15px"
                  fontWeight="600">
                  Original price
                </TextBase>
                <Input
                  color="#000"
                  borderColor="#CED3D9"
                  InputLeftElement={
                    <Box ml="13px">
                      <EuroIcon />
                    </Box>
                  }
                  placeholder="0"
                  onChangeText={props.handleChange('price')}
                  value={props.values.price}
                  onBlur={props.handleBlur('price')}
                />
                <Text style={globalStyles.textError}>
                  {props.touched.price && props.errors.price}
                </Text>
                <TextBase
                  mb="8px"
                  color="#546679"
                  fontSize="15px"
                  fontWeight="600">
                  Discount price
                </TextBase>
                <Input
                  color="#000"
                  _disabled={styles.disabled}
                  isDisabled
                  borderColor="#CED3D9"
                  InputLeftElement={
                    <Box ml="13px">
                      <EuroIcon />
                    </Box>
                  }
                  placeholder="Lorem ipsum"
                />
                <HStack mt="24px" space={6}>
                  <Checkbox
                    borderColor="rgba(10, 37, 64, 0.15)"
                    width="24px"
                    height="24px"
                    bgColor="white"
                    value="test"
                    accessibilityLabel="This is a dummy checkbox"
                  />
                  <TextBase fontSize="16px" color="#103B66">
                    Activate discounted price
                  </TextBase>
                </HStack>
              </Card>
              <NonValidatedForm />
              <Card>
                <ButtonNative title="Submit" onPress={props.handleSubmit} />
              </Card>
            </View>
          )}
        </Formik>
      </Box>
    </ScrollView>
  );
};

export default setLoading(NewProduct);

const styles = StyleSheet.create({
  allProducts: {
    backgroundColor: '#fff',
    maxWidth: 147,
    borderRadius: 105,
    borderColor: '#21B8F9',
  },
  tabs: {
    fontSize: 12,
    paddingVertical: 10,
    paddingHorizontal: 55,
  },
  disabled: {backgroundColor: '#E7E9EC'},
});
