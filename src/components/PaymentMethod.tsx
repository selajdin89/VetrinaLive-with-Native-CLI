import {Badge, HStack, Text, ITextProps} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {typePayments} from '../Types/Types';
import Card from './Card';
import {InterfaceTextProps} from 'native-base/lib/typescript/components/primitives/Text/types';

const PaymentMethod: React.FC<typePayments> = props => {
  const {icon, status, method} = props;
  const disabledStatus = status === 'Disabled';
  const isComingSoon = status === 'Coming Soon';
  return (
    <Card>
      <HStack justifyContent="space-between">
        {icon}
        <Badge
          padding="8px"
          paddingRight="18px"
          paddingLeft="18px"
          alignSelf="flex-start"
          bgColor={
            disabledStatus ? '#E7E9EC' : isComingSoon ? '#F0F2FE' : '#E0FFF6'
          }
          _text={
            disabledStatus
              ? (styles.disabledTextBadge as InterfaceTextProps<ITextProps>)
              : isComingSoon
              ? (styles.comingSoonBadge as InterfaceTextProps<ITextProps>)
              : (styles.textBadge as InterfaceTextProps<ITextProps>)
          }>
          {status}
        </Badge>
      </HStack>
      <Text fontWeight="600" fontSize="17px" color="text.primary" mt="47px">
        {method}
      </Text>
    </Card>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  textBadge: {
    color: '#00C48C',

    fontSize: 14,
  },
  disabledTextBadge: {
    color: '#7D8A99',
    fontSize: 14,
  },
  comingSoonBadge: {
    color: '#6979F8',
    fontSize: 14,
  },
});
