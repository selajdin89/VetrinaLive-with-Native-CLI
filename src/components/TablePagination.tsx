import {FlatList, HStack, Text} from 'native-base';
import * as React from 'react';
import {DataTable} from 'react-native-paper';
import {SupportIcon, ThreeDotsIcon} from '../assets/Icons';
import {productsStyles} from '../Themes/globalStyles';
import {typeProducts} from '../Types/Types';

const optionsPerPage = [3, 4, 5];

type Props = {
  tableData: typeProducts[];
};

const TablePagination: React.FC<Props> = ({tableData}) => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(7);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, tableData.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return tableData.length === 0 ? null : (
    <DataTable style={productsStyles.container}>
      <DataTable.Header style={productsStyles.row}>
        <DataTable.Title style={productsStyles.products}>
          <Text fontSize="17px" fontWeight="600" color="#233B53">
            Product name
          </Text>
        </DataTable.Title>
        <DataTable.Title style={productsStyles.price} numeric>
          <Text fontSize="17px" fontWeight="600" color="#233B53">
            Price
          </Text>
        </DataTable.Title>
        <DataTable.Title style={productsStyles.cell} numeric>
          <ThreeDotsIcon />
        </DataTable.Title>
      </DataTable.Header>

      <FlatList
        data={
          page === 0
            ? tableData.slice(0, itemsPerPage)
            : tableData.slice(
                page * itemsPerPage,
                page * itemsPerPage + itemsPerPage,
              )
        }
        renderItem={({item}) => (
          <DataTable.Row style={productsStyles.row}>
            <DataTable.Cell style={productsStyles.products}>
              <HStack alignItems="center">
                <SupportIcon />
                <Text ml="10px" fontSize="14px" color="#103B66">
                  {item.name}
                </Text>
              </HStack>
            </DataTable.Cell>
            <DataTable.Cell style={productsStyles.price} numeric>
              <Text color="#103B66">{item.price}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={productsStyles.cell} numeric>
              <ThreeDotsIcon />
            </DataTable.Cell>
          </DataTable.Row>
        )}
      />

      <DataTable.Pagination
        style={productsStyles.rowPagination}
        page={page}
        numberOfPages={Math.ceil(tableData.length / itemsPerPage)}
        onPageChange={page => setPage(page)}
        label={`${from + 1}-${to} of ${tableData.length}`}
        showFastPaginationControls={false}
        numberOfItemsPerPageList={optionsPerPage}
        // numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={setItemsPerPage}
        selectPageDropdownLabel={'P'}
      />

      {/* <DataTable.Pagination
        style={productsStyles.rowPagination}
        page={page}
        numberOfPages={Math.ceil(tableData.length / itemsPerPage)}
        onPageChange={page => setPage(page)}
        label={`${from + 1}-${to} of ${tableData.length}`}
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      /> */}
    </DataTable>
  );
};

export default TablePagination;
