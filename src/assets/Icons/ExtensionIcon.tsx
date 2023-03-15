import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {ISvgProps} from './../../Types/Types';

const ExtensionIcon = (props: ISvgProps) => {
  return (
    <Svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.83333 3H3V8.83333H8.83333V3Z"
        stroke="#103B66"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 12.1665H12.1667V17.9998H18V12.1665Z"
        stroke="#103B66"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.83333 12.1665H3V17.9998H8.83333V12.1665Z"
        stroke="#103B66"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.0833 3.729V8.104"
        stroke="#103B66"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.8958 5.9165H17.2708"
        stroke="#103B66"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ExtensionIcon;
