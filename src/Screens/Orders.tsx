import {Box, Button, Stack, Text} from 'native-base';
import React, {useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import ProductsHeader from '../components/ProductsHeader';
import OrdersTable from '../components/OrdersTable';
import setLoading from '../HOC/setLoading';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootDrawerParamList} from '../Types/Types';
import {ExternalGreyIcon} from '../assets/Icons';

type OrdersProps = NativeStackScreenProps<RootDrawerParamList, 'Orders'>;

const Orders: React.FC<OrdersProps> = ({route, navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <ProductsHeader />;
      },
    });
  }, [navigation]);
  return (
    <View>
      <Box paddingY="24px" paddingX="14px" bg="#F8F9FB">
        <Stack alignItems="baseline" width="100%" direction="row">
          <Stack mr="auto">
            <Text mt="16px" fontSize="17px" color="text.primary">
              Orders: <Text bold>24</Text>
            </Text>
          </Stack>

          <Button
            size="lg"
            bgColor="#E7E9EC"
            _text={{color: '#B6BEC6', fontWeight: '600'}}
            rightIcon={<ExternalGreyIcon />}>
            Ship order
          </Button>
        </Stack>
        <Box mb="24px" mt="24px" zIndex="100" style={styles.box}>
          <OrdersTable navigation={navigation} route={route} />
        </Box>
      </Box>
    </View>
  );
};

export default setLoading(Orders);

const styles = StyleSheet.create({
  box: {
    overflow: 'hidden',
    backgroundColor: 'white',
    zIndex: 10,
  },
});
