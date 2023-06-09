import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {ISvgProps} from './../../Types/Types';

const ArowsIcon = (props: ISvgProps) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.0876 14.8376C8.31541 14.6098 8.68475 14.6098 8.91256 14.8376L12.0001 17.9251L15.0876 14.8376C15.3154 14.6098 15.6848 14.6098 15.9126 14.8376C16.1404 15.0654 16.1404 15.4348 15.9126 15.6626L12.4126 19.1626C12.1848 19.3904 11.8154 19.3904 11.5876 19.1626L8.0876 15.6626C7.8598 15.4348 7.8598 15.0654 8.0876 14.8376Z"
        fill="#103B66"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5876 4.8376C11.8154 4.6098 12.1848 4.6098 12.4126 4.8376L15.9126 8.3376C16.1404 8.56541 16.1404 8.93475 15.9126 9.16256C15.6848 9.39037 15.3154 9.39037 15.0876 9.16256L12.0001 6.07504L8.91256 9.16256C8.68475 9.39037 8.31541 9.39037 8.0876 9.16256C7.8598 8.93475 7.8598 8.56541 8.0876 8.3376L11.5876 4.8376Z"
        fill="#103B66"
      />
    </Svg>
  );
};

export default ArowsIcon;
