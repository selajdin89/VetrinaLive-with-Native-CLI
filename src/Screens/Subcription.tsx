import {
  Badge,
  Box,
  FlatList,
  HStack,
  Stack,
  Switch,
  Text,
  ITextProps,
} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {subscription} from '../data/Subs';
import SubscriptionPlan from '../components/SubscriptionPlan';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootDrawerParamList} from '../Types/Types';
import {InterfaceTextProps} from 'native-base/lib/typescript/components/primitives/Text/types';

type SubscriptionProps = NativeStackScreenProps<
  RootDrawerParamList,
  'Subscription'
>;

const Subscription: React.FC<SubscriptionProps> = ({navigation}) => {
  return (
    <View>
      <Box paddingX="16px" paddingY="48px" bg="#F8F9FB">
        <FlatList
          keyExtractor={item => item.key}
          data={subscription}
          renderItem={({item}) => (
            <SubscriptionPlan
              key={item.key}
              platform={item.platform}
              amount={item.amount}
              price={item.price}
              discount={item.discount ? item.discount : ''}
            />
          )}
          ListHeaderComponent={() => (
            <Stack mb="24px" width="100%">
              <Text style={styles.title}>Choose your plan</Text>
              <HStack
                mr="8px"
                mt="24px"
                alignItems="center"
                justifyContent="flex-end">
                <Text style={styles.monthly}>Monthly</Text>
                <Switch
                  size="md"
                  onTrackColor="blue.primary"
                  offTrackColor="#B6BEC6"
                  isChecked
                />
                <HStack>
                  <Text style={styles.yearly}>Yearly</Text>
                  <Badge
                    ml="12px"
                    borderRadius="5px"
                    _text={styles.badge as InterfaceTextProps<ITextProps>}
                    bgColor="#00C48C">
                    Promo
                  </Badge>
                </HStack>
              </HStack>
            </Stack>
          )}
        />
      </Box>
    </View>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  badge: {
    fontSize: 12,
    color: 'white',
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 22,
    color: '#103B66',
  },
  monthly: {
    marginRight: 25,
    fontWeight: '600',
    fontSize: 17,
    color: '#7D8A99',
  },
  yearly: {
    marginLeft: 27,
    fontWeight: '600',
    fontSize: 17,
    color: '#103B66',
  },
});
