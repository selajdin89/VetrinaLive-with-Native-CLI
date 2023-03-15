import {CheckIcon, Select, Text, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

const SelectComponent = () => {
  const [service, setService] = React.useState('');
  return (
    <View>
      <Text mb="8px" color="#546679" fontSize="15px" fontWeight="600">
        Category
      </Text>
      <Select
        bgColor="white"
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Select category"
        placeholder="Select category"
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        _light={{
          bg: 'coolGray.100',
        }}
        _dark={{
          bg: 'coolGray.800',
        }}
        onValueChange={itemValue => setService(itemValue)}>
        <Select.Item shadow={2} label="UX Research" value="ux" />
        <Select.Item shadow={2} label="Web Development" value="web" />
        <Select.Item
          shadow={2}
          label="Cross Platform Development"
          value="cross"
        />
        <Select.Item shadow={2} label="UI Designing" value="ui" />
        <Select.Item shadow={2} label="Backend Development" value="backend" />
      </Select>
    </View>
  );
};

export default SelectComponent;
