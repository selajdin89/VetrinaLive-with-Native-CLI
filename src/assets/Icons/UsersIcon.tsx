import React from 'react';
import {Svg, Path, Defs, G, ClipPath, Rect} from 'react-native-svg';
import {ISvgProps} from './../../Types/Types';

const UsersIcon = (props: ISvgProps) => {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_36_1085)">
        <Path
          d="M17.5 21.8569V19.8569C17.5 18.7961 17.0786 17.7787 16.3284 17.0285C15.5783 16.2784 14.5609 15.8569 13.5 15.8569H5.5C4.43913 15.8569 3.42172 16.2784 2.67157 17.0285C1.92143 17.7787 1.5 18.7961 1.5 19.8569V21.8569"
          stroke="#103B66"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.5 11.8569C11.7091 11.8569 13.5 10.0661 13.5 7.85693C13.5 5.64779 11.7091 3.85693 9.5 3.85693C7.29086 3.85693 5.5 5.64779 5.5 7.85693C5.5 10.0661 7.29086 11.8569 9.5 11.8569Z"
          stroke="#103B66"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M23.5 21.8568V19.8568C23.4993 18.9705 23.2044 18.1096 22.6614 17.4091C22.1184 16.7087 21.3581 16.2084 20.5 15.9868"
          stroke="#103B66"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.5 3.98682C17.3604 4.20712 18.123 4.70752 18.6676 5.40913C19.2122 6.11074 19.5078 6.97365 19.5078 7.86182C19.5078 8.74999 19.2122 9.6129 18.6676 10.3145C18.123 11.0161 17.3604 11.5165 16.5 11.7368"
          stroke="#103B66"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_36_1085">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5 0.856934)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default UsersIcon;
