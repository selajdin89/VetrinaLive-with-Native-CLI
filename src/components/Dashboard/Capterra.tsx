import {Box, HStack, Stack, Text} from 'native-base';
import React from 'react';
import {ArrowRightIcon, CapterraIcon, TrustpilotIcon} from '../../assets/Icons';
import {capterraStyles} from '../../Themes/globalStyles';

const Capterra = () => {
  return (
    <Box mb="24px" zIndex="100" style={capterraStyles.box}>
      <CapterraIcon />
      <Stack
        borderBottomColor="#ffffff"
        borderBottomWidth="1px"
        paddingY="24px"
        alignItems="center">
        <Text fontSize="18px">
          Write a{' '}
          <Text color="#00C48C" bold>
            positive
          </Text>{' '}
          review on Capterra and receive the extension with{' '}
          <Text bold>50 additional products</Text>
        </Text>
        <HStack width="100%" alignItems="center" mt="26px">
          <Text
            textDecorationLine="underline"
            color="#00C48C"
            fontSize="17px"
            mr="12px">
            10 free tips to increase your sales
          </Text>
          <ArrowRightIcon />
        </HStack>
      </Stack>
      <Stack mt="24px">
        <TrustpilotIcon />
        <Text mt="24px" fontSize="18px">
          Show us your love by leaving a{' '}
          <Text color="#00C48C" bold>
            positive
          </Text>{' '}
          review on Truspilot and receive an extension with{' '}
          <Text bold>50 additional products</Text>
        </Text>
        <HStack width="100%" alignItems="center" mt="26px">
          <Text
            textDecorationLine="underline"
            color="#00C48C"
            fontSize="17px"
            mr="12px">
            10 free tips to increase your sales
          </Text>
          <ArrowRightIcon />
        </HStack>
        <Text width="100%" fontSize="12px" mt="24px">
          *The two promotions are cumulative
        </Text>
      </Stack>
    </Box>
  );
};

export default Capterra;
