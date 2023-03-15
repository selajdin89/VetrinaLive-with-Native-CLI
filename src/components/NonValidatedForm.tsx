import React from 'react';
import {Box, Input, Radio, Text} from 'native-base';
import Card from './Card';
import SelectComponent from './SelectComponent';
import {GramIcon, QuadradIcon} from '../assets/Icons';
import {StyleSheet} from 'react-native';

const NonValidatedForm = () => {
  const [radioValue, setRadioValue] = React.useState('one');
  return (
    <>
      <Card>
        <Text style={styles.title} fontWeight="600">
          Details
        </Text>
        <SelectComponent />
        <Text style={styles.specifications} fontWeight="600">
          Product code / SKU
        </Text>
        <Input
          color="#000"
          borderColor="#CED3D9"
          placeholder="Leave empty to automatically generate"
        />

        <Text style={styles.specifications} fontWeight="600">
          Weight
        </Text>
        <Input
          color="#000"
          borderColor="#CED3D9"
          InputLeftElement={
            <Box ml="12px">
              <GramIcon />
            </Box>
          }
          placeholder="0 g"
        />

        <Text style={styles.specifications} fontWeight="600">
          Availability
        </Text>
        <Input
          color="#000"
          borderColor="#CED3D9"
          InputLeftElement={
            <Box ml="12px">
              <QuadradIcon />
            </Box>
          }
          placeholder="Lorem ipsum"
        />
      </Card>
      <Card>
        <Text style={styles.title} fontWeight="600">
          Product type
        </Text>
        <Radio.Group
          direction="row"
          name="myRadioGroup"
          accessibilityLabel="favorite number"
          value={radioValue}
          onChange={nextValue => {
            setRadioValue(nextValue);
          }}>
          <Radio bgColor="#fff" shadow={2} value="one" my="1">
            <Text fontSize="17px" color="#103B66">
              Physical
            </Text>
          </Radio>
          <Radio ml="24px" bgColor="#fff" shadow={2} value="two" my="1">
            <Text fontSize="17px" color="#103B66">
              Digital
            </Text>
          </Radio>
        </Radio.Group>
      </Card>
    </>
  );
};

export default NonValidatedForm;

const styles = StyleSheet.create({
  title: {
    marginBottom: 24,
    color: '#103B66',
    fontSize: 20,
  },
  specifications: {
    marginBottom: 8,
    marginTop: 24,
    color: '#546679',
    fontSize: 15,
  },
});
