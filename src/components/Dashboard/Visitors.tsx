import {Stack, Text, HStack} from 'native-base';
import React from 'react';
import Card from '../Card';
import ArrowRightBlueIcon from './../../assets/Icons/ArrowRightBlueIcon';
import {EyeIcon} from '../../assets/Icons';

const Visitors = () => {
  return (
    <Card>
      <Stack alignItems="center" direction="row">
        <EyeIcon />
        <Text ml="26px" fontSize="22px" fontWeight="600" color="#103B66">
          Visitors
        </Text>
      </Stack>
      <Stack mt="24px" alignItems="center">
        <Text fontSize="34px" fontWeight="600" color="#103B66">
          0
        </Text>
        <HStack
          width="100%"
          justifyContent="center"
          alignItems="center"
          mt="26px">
          <Text
            mr="16px"
            textDecorationLine="underline"
            color="#21B8F9"
            fontSize="17px">
            Vuoi ricevere piu visite? Contattaci!
          </Text>
          <ArrowRightBlueIcon />
        </HStack>
      </Stack>
    </Card>
  );
};

export default Visitors;
