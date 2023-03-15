import {Avatar, Button, Stack, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SupportIcon} from '../../assets/Icons';
import Card from '../Card';

const Customer = () => {
  return (
    <Card>
      <Stack alignItems="center" direction="row">
        <SupportIcon />
        <Text ml="26px" fontSize="22px" fontWeight="600" color="#103B66">
          Customer support
        </Text>
      </Stack>
      <Stack mt="24px" alignItems="center" direction="row">
        <Avatar
          style={styles.avatar}
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}>
          AJ
        </Avatar>
        <Text fontSize="20px" color="#103B66">
          Simona is here to help you
        </Text>
      </Stack>
      <Button
        _text={styles.buttonText}
        style={styles.button}
        size="lg"
        shadow={3}>
        Contact us
      </Button>
    </Card>
  );
};

export default Customer;

const styles = StyleSheet.create({
  buttonText: {fontWeight: '600', lineHeight: 22},
  button: {
    paddingLeft: 16,
    paddingRight: 16,
    alignSelf: 'center',
    backgroundColor: '#21B8F9',
    marginTop: 24,
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
});
