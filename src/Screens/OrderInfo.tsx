import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Button,
  HStack,
  ITextProps,
  ScrollView,
  Stack,
  Text,
  View,
  ChevronDownIcon as ChewronBase,
} from 'native-base';
import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {RootDrawerParamList, tableOrdersType} from '../Types/Types';
import {
  ChevronDownIcon,
  InfoIcon,
  StarIcon,
  TelegramIcon,
  WhatsappIcon,
} from '../assets/Icons';
import CloseIcon from '../assets/Icons/CloseIcon';

type OrdersProps = NativeStackScreenProps<RootDrawerParamList, 'OrderInfo'>;

const OrderInfo: React.FC<OrdersProps> = ({route, navigation}) => {
  const item = route.params;
  const isCancelled = item.status === 'Cancelled';
  const isNew = item.status === 'New';
  const isInProgress = item.status === 'In progress';
  return (
    <ScrollView>
      <View padding="24px" bgColor="#fff">
        <HStack
          py="25px"
          borderBottomColor="#E7E9EC"
          borderBottomWidth="1"
          justifyContent="space-between"
          alignItems="center">
          <Text fontSize="17px" color="text.primary">
            Orders: #1292
          </Text>
          <HStack>
            <StarIcon />
            <Text ml="10px" mr="29px" fontSize="15px" color="blue.primary">
              Stampa ordine
            </Text>
            <CloseIcon onPress={() => navigation.navigate('Orders')} />
          </HStack>
        </HStack>
        <HStack mt="12px" justifyContent="space-between">
          <Text
            style={styles.tabs}
            borderBottomWidth="3"
            borderBottomColor="blue.primary"
            fontWeight="600"
            color="blue.primary">
            Info orders
          </Text>
          <Text style={styles.tabs} fontWeight="600" color="text.primary">
            Products
          </Text>
          <Text style={styles.tabs} fontWeight="600" color="text.primary">
            Shipping
          </Text>
        </HStack>
        <Stack
          borderBottomWidth="1"
          borderBottomColor="#E7E9EC"
          pb="28px"
          space={4}
          mt="24px">
          <Text color="#546679">29/05/2020 18:54</Text>
          <Text fontSize="17px" color="#546679">
            Cliente
          </Text>
          <Text fontSize="15px" color="text.primary">
            {item.name + ' ' + item.surname}
          </Text>
          <Text fontSize="15px" color="blue.primary">
            {item.email}
          </Text>
          <Text fontSize="15px" color="text.primary">
            Telefono:{' '}
            <Text fontSize="15px" color="blue.primary">
              {item.telNumber}
            </Text>
          </Text>
          <Text color="text.primary" fontSize="12px">
            Codice Fiscale: RSSMAR22T33M123K
          </Text>
          <HStack>
            <WhatsappIcon />
            <Text ml="16px" fontSize="15px" color="#00C48C">
              Contatta so Whatsapp
            </Text>
          </HStack>
          <HStack>
            <TelegramIcon />
            <Text ml="16px" fontSize="15px" color="blue.primary">
              Contatta so Telegram
            </Text>
          </HStack>
        </Stack>
        <Stack
          pb="16px"
          borderBottomWidth="1"
          borderBottomColor="#E7E9EC"
          space={4}
          mt="24px">
          <Text fontWeight="500" fontSize="18px" color="#546679">
            Shipping Adress
          </Text>
          <Text color="text.primary">{item.shippingAdress}</Text>
        </Stack>
        <Stack space={4} mt="24px">
          <Text fontWeight="600" fontSize="17px" color="#546679">
            Shipping Info
          </Text>
          <Text fontSize="15px" color="text.primary">
            Nome corriere: {item.postName}
          </Text>
          <Text fontSize="15px" color="text.primary">
            Numero/Link ordine: {item.orderNumber}
          </Text>
          <HStack alignItems="center" mt="14px">
            <InfoIcon />
            <Text marginX="14px" fontSize="15px" color="text.primary">
              Spedizione Corriere
            </Text>
            <ChevronDownIcon />
          </HStack>
          <Text fontSize="13px" color="#7D8A99">
            Se cambi la modalita e i costi di consegna. ricordati..
          </Text>
        </Stack>
        <Stack space={5} mt="24px" pt="71px" pb="10px">
          <HStack justifyContent="space-between">
            <Text fontSize="17px" color="text.primary">
              Subtotal
            </Text>
            <Text fontSize="17px" color="text.primary">
              € {item.subTotal},00
            </Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontSize="17px" color="text.primary">
              Courier Shipping
            </Text>
            <HStack alignItems="center">
              <Text fontSize="17px" color="text.primary">
                € {item.shippingCost},00{' '}
              </Text>
              <ChevronDownIcon />
            </HStack>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontWeight="600" fontSize="17px" color="text.primary">
              Total
            </Text>
            <Text fontWeight="600" fontSize="17px" color="text.primary">
              € {item.subTotal + item.shippingCost},00
            </Text>
          </HStack>
          <Button
            p="24px"
            mt="14px"
            _text={styles.button as Partial<ITextProps>}
            rightIcon={<ChewronBase />}
            size="lg"
            bgColor={
              isCancelled
                ? '#F33451'
                : isInProgress
                ? '#FFA26B'
                : isNew
                ? '#21B8F9'
                : '#6979F8'
            }>
            {item.status}
          </Button>
        </Stack>
      </View>
    </ScrollView>
  );
};

export default OrderInfo;

const styles = StyleSheet.create({
  button: {
    fontSize: 18,
  },
  tabs: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 32,
    fontSize: 12,
  },
});
