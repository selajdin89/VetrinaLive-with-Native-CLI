import React from 'react';
import {Svg, Path, Circle} from 'react-native-svg';
import {ISvgProps} from './../../Types/Types';

const StarIcon = (props: ISvgProps) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx="12" cy="12" r="8" fill="white" />
      <Path
        d="M16.2249 18.0094L15.0981 13.1737L18.854 9.93427L13.9244 9.51174L11.9995 5.00469L10.0746 9.55869L5.14505 9.93427L8.90092 13.1737L7.77416 18.0094L11.9995 15.4742L16.2249 18.0094ZM4.91031 4.95775C6.88214 2.98592 9.24521 2 11.9995 2C14.7538 2 17.1012 2.98592 19.0418 4.95775C21.0136 6.89828 21.9995 9.2457 21.9995 12C21.9995 14.7543 21.0136 17.1174 19.0418 19.0892C17.1012 21.0297 14.7538 22 11.9995 22C9.24521 22 6.88214 21.0297 4.91031 19.0892C2.96978 17.1174 1.99951 14.7543 1.99951 12C1.99951 9.2457 2.96978 6.89828 4.91031 4.95775Z"
        fill="#21B8F9"
      />
    </Svg>
  );
};

export default StarIcon;
