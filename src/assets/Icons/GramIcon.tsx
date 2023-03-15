import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {ISvgProps} from './../../Types/Types';

const GramIcon = (props: ISvgProps) => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.0416 7.87483V6.87483V6.65409V6.00283L10.6373 5.73949C11.2069 5.48767 11.6041 4.91826 11.6041 4.27067C11.6041 3.38711 10.8835 2.6665 9.99997 2.6665C9.11643 2.6665 8.39582 3.38711 8.39582 4.27067C8.39582 4.91826 8.79308 5.48767 9.36266 5.73949L9.95831 6.00283V6.65409V6.87483V7.87483H8.95831H5.31249C5.29395 7.87483 5.27731 7.88719 5.27217 7.9057L2.66819 17.28C2.66818 17.2801 2.66817 17.2801 2.66816 17.2802L10.0416 7.87483ZM10.0416 7.87483H11.0416M10.0416 7.87483H11.0416M11.0416 7.87483H14.6874C14.706 7.87483 14.7226 7.88716 14.7277 7.90561M11.0416 7.87483L14.7277 7.90561M14.7278 7.90569L17.3317 17.28C17.3317 17.28 17.3318 17.2801 17.3318 17.2801C17.3353 17.2932 17.3325 17.3067 17.325 17.3166L14.7278 7.90569ZM14.7278 7.90569C14.7278 7.90567 14.7278 7.90564 14.7277 7.90561M14.7278 7.90569L14.7277 7.90561M2.70834 17.3332C2.69532 17.3332 2.68304 17.3272 2.67501 17.3166H17.3249C17.3169 17.3272 17.3046 17.3332 17.2916 17.3332H2.70834ZM11.5208 4.2707C11.5208 3.43131 10.8394 2.74987 9.99997 2.74987C9.1605 2.74987 8.47914 3.43134 8.47914 4.2707C8.47914 5.11009 9.16058 5.79153 9.99997 5.79153C10.8394 5.79153 11.5208 5.11009 11.5208 4.2707Z"
        stroke="#103B66"
        strokeWidth="2"
      />
    </Svg>
  );
};

export default GramIcon;