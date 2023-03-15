import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {ISvgProps} from './../../Types/Types';

const ArrowRightBlueIcon = (props: ISvgProps) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.66667 10.8569H16.3333"
        stroke="#21B8F9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 5.02344L16.3333 10.8568L10.5 16.6901"
        stroke="#21B8F9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowRightBlueIcon;
