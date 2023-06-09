import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {ISvgProps} from './../../Types/Types';

const FilterIcon = (props: ISvgProps) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
        stroke="#103B66"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default FilterIcon;
