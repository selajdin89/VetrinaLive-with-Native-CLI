import {Box, Center, HStack, Stack, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  ArrowRightBlueIcon,
  ExtensionIcon,
  ProductsIcon,
  WorldIcon,
} from '../../assets/Icons';
import {globalStyles} from '../../Themes/globalStyles';

const Extensions = () => {
  return (
    <Box mb="24px" zIndex="100" style={styles.box}>
      <Stack alignItems="center" direction="row">
        <ExtensionIcon />
        <Text ml="26px" fontSize="22px" fontWeight="600" color="#103B66">
          Extensions Marketplace
        </Text>
      </Stack>
      <Stack mt="24px" alignItems="center">
        <Stack overflow="hidden" width="100%" maxWidth="100%" direction="row">
          <Stack>
            <Center mr="24px" p="52px" bgColor="#FFA26B" borderRadius="10px">
              <WorldIcon />
            </Center>
            <Text mt="12.5px" fontSize="16px" color="#103B66">
              Custom Domain
            </Text>
          </Stack>
          <Stack>
            <Center p="52px" bgColor="#00C48C" borderRadius="10px">
              <ProductsIcon />
            </Center>
            <Text mt="12.5px" fontSize="16px" color="#103B66">
              + 50 Products
            </Text>
          </Stack>
        </Stack>
        <Stack width="100%" direction="row">
          <HStack justifyContent="space-between" width="100%" mt="26px">
            <Text style={globalStyles.link}>Discover all extensions</Text>
            <Box mr="28px">
              <ArrowRightBlueIcon />
            </Box>
          </HStack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Extensions;

const styles = StyleSheet.create({
  box: {
    paddingVertical: 24,
    paddingLeft: 24,
    backgroundColor: 'white',
    borderRadius: 10,
    zIndex: 10,
    elevation: 4,
  },
});
