import {Box, HStack, Stack, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import Card from '../Card';
import {
  ArrowRightBlueIcon,
  ChevronDownIcon,
  ListIcon,
} from '../../assets/Icons';

const OrderBox = () => {
  return (
    <Card>
      <Stack justifyContent="space-between" alignItems="center" direction="row">
        <HStack alignItems="center">
          <ListIcon />
          <Text ml="26px" fontSize="22px" fontWeight="600" color="#103B66">
            Orders
          </Text>
        </HStack>
        <HStack alignItems="center">
          <Text mr="12px" color="#6C7C8C">
            This month
          </Text>
          <ChevronDownIcon />
        </HStack>
      </Stack>
      <Stack mt="24px" alignItems="center">
        <Stack width="100%" direction="row">
          <Text mr="auto" fontSize="20px" color="#7D8A99">
            Orders received:
          </Text>
          <Text fontSize="22px" fontWeight="600" color="#103B66">
            0
          </Text>
        </Stack>
        <Stack width="100%" direction="row">
          <Text mr="auto" fontSize="20px" color="#7D8A99">
            Earnings:
          </Text>
          <Text fontSize="22px" fontWeight="600" color="#103B66">
            $0,00
          </Text>
        </Stack>
        <Stack
          alignItems="center"
          width="100%"
          justifyContent="space-between"
          mt="26px"
          direction="row">
          <Text color="#21B8F9" fontSize="17px">
            10 free tips to increase your sales
          </Text>
          <ArrowRightBlueIcon />
        </Stack>
      </Stack>
    </Card>
  );
};

export default OrderBox;

const styles = StyleSheet.create({
  box: {
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 10,
    zIndex: 10,
    elevation: 4,
  },
  shadowProp: {
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
