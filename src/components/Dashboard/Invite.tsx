import {Box, HStack, Stack, Text} from 'native-base';
import React from 'react';
import {ArrowRightBlueIcon, UsersIcon} from '../../assets/Icons';
import Card from '../Card';

const Invite = () => {
  return (
    <Card>
      <Stack alignItems="center" direction="row">
        <UsersIcon />
        <Text ml="26px" fontSize="22px" fontWeight="600" color="#103B66">
          Invite a friend
        </Text>
      </Stack>
      <Stack width="100%" paddingY="24px" alignItems="center">
        <Text color="#103B66" fontSize="18px">
          <Text color="#00C48C" bold>
            Receive 50 products
          </Text>{' '}
          by inviting friend who subscribes to a plan. Your friend will receive
          a 30% dicount coupon valid for any plan.{' '}
        </Text>
        <HStack width="100%" justifyContent="space-between" mt="26px">
          <Text
            mr="auto"
            textDecorationLine="underline"
            color="#21B8F9"
            fontSize="17px">
            Start inviting friends!
          </Text>
          <ArrowRightBlueIcon />
        </HStack>
      </Stack>
    </Card>
  );
};

export default Invite;
