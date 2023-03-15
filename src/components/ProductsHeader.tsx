import {Box, Stack} from 'native-base';
import React from 'react';
import {FilterIcon, SearchIcon} from '../assets/Icons';

const ProductsHeader = () => {
  return (
    <Stack direction="row" mr="21">
      <Box mr="34px">
        <SearchIcon />
      </Box>
      <FilterIcon />
    </Stack>
  );
};

export default ProductsHeader;
