import {Box, Button, Stack, Switch, Text} from 'native-base';
import {useLayoutEffect, useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import TablePagination from '../components/TablePagination';
import ProductsHeader from '../components/ProductsHeader';
import setLoading from '../HOC/setLoading';
import NewProduct from './NewProduct';
import {RootDrawerParamList, typeProducts} from '../Types/Types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PlusIcon} from '../assets/Icons';

type OrdersProps = NativeStackScreenProps<RootDrawerParamList, 'Products'>;

const Products: React.FC<OrdersProps> = ({navigation}) => {
  const [tableData, setTableData] = useState<typeProducts[]>([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://vetrina-422be-default-rtdb.europe-west1.firebasedatabase.app/products.json',
      );
      const responseData = await response.json();

      setTableData(responseData);
    };

    fetchData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <ProductsHeader />;
      },
    });
  }, [navigation]);

  const addProduct = (product: typeProducts) => {
    product.key = Math.random().toString();
    setTableData(currentProducts => {
      return [product, ...currentProducts];
    });
    setModal(false);
  };

  return tableData.length === 0 ? null : (
    <>
      {!modal && (
        <View>
          <Box p="14px" bg="#F8F9FB">
            <Stack width="100%" direction="row">
              <Stack mr="auto">
                <Text mt="16px" fontSize="13px" color="#546679">
                  Products (24/100)
                </Text>
                <Text mt="16px" fontSize="13px" color="#546679">
                  Featured products (7/10)
                </Text>
                <Switch
                  offTrackColor="#B6BEC6"
                  alignSelf="baseline"
                  mt="16px"
                  size="md"
                  colorScheme="#B6BEC6"
                  mb="24px"
                />
              </Stack>
              <Stack alignSelf="center">
                <Button
                  shadow={5}
                  onPress={() => setModal(true)}
                  bgColor="blue.primary">
                  <PlusIcon />
                </Button>
              </Stack>
            </Stack>
            <Box width="100%" mb="24px" zIndex="100" style={styles.box}>
              <TablePagination tableData={tableData} />
            </Box>
          </Box>
        </View>
      )}
      {modal && <NewProduct setModal={setModal} addProduct={addProduct} />}
    </>
  );
};

export default setLoading(Products);

const styles = StyleSheet.create({
  box: {
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 10,
    zIndex: 10,
    elevation: 5,
  },
});
