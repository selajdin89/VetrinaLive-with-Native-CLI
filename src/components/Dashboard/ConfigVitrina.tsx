import {Box, HStack, Stack, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ArrowRightBlueIcon, ToolIcon} from '../../assets/Icons';

const ConfigVitrina = () => {
  return (
    <Box mt="-100px" mb="24px" zIndex="100" style={styles.box}>
      <HStack alignItems="center">
        <ToolIcon />
        <Text ml="26px" fontSize="22px" fontWeight="600" color="#103B66">
          Configura la tua Vetrina
        </Text>
      </HStack>
      <Stack mt="24px" alignItems="center">
        <Text fontSize="34px" fontWeight="600" color="#f33451">
          0%
        </Text>
        <Text fontSize="34px" fontWeight="600" color="#f33451">
          completato
        </Text>
        <Text mt="24px" fontSize="20px" color="#7D8A99" textAlign="center">
          Completa tutti i step ricevere maggiore visibilita e una vetrina
          accativante
        </Text>
        <HStack width="100%" justifyContent="center" mt="26px">
          <Text
            mr="24px"
            textDecorationLine="underline"
            color="#21B8F9"
            fontSize="17px">
            Completa la configurazione!
          </Text>
          <ArrowRightBlueIcon />
        </HStack>
      </Stack>
    </Box>
  );
};

export default ConfigVitrina;

const styles = StyleSheet.create({
  box: {
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 10,
    zIndex: 10,
    elevation: 4,
    // transform: [{translateY: 50}],
  },
});
