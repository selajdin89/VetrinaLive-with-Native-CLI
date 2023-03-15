import React from 'react';
import {Svg, Path, G, Defs, ClipPath, Rect} from 'react-native-svg';
import {ISvgProps} from './../../Types/Types';

const EyeIcon = (props: ISvgProps) => {
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_36_970)">
        <Path
          d="M1.5 12C1.5 12 5.5 4 12.5 4C19.5 4 23.5 12 23.5 12C23.5 12 19.5 20 12.5 20C5.5 20 1.5 12 1.5 12Z"
          stroke="#103B66"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.5 15C14.1569 15 15.5 13.6569 15.5 12C15.5 10.3431 14.1569 9 12.5 9C10.8431 9 9.5 10.3431 9.5 12C9.5 13.6569 10.8431 15 12.5 15Z"
          stroke="#103B66"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_36_970">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default EyeIcon;
