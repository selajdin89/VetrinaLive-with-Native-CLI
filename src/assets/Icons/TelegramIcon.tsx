import React from 'react';
import {Svg, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {ISvgProps} from './../../Types/Types';

const TelegramIcon = (props: ISvgProps) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="url(#paint0_linear_2316_7633)"
      />
      <Path
        d="M4.797 12.226L12.5407 8.66423C13.3051 8.29321 15.8974 7.10594 15.8974 7.10594C15.8974 7.10594 17.0938 6.58651 16.9941 7.84798C16.9609 8.36741 16.695 10.1854 16.4291 12.1518L15.5982 17.9769C15.5982 17.9769 15.5318 18.8302 14.9668 18.9786C14.4018 19.127 13.4712 18.4592 13.3051 18.3108C13.1721 18.1995 10.8125 16.5299 9.94836 15.7136C9.71572 15.491 9.44984 15.0458 9.9816 14.5264C11.178 13.302 12.6071 11.7808 13.4712 10.8162C13.87 10.3709 14.2689 9.33207 12.6071 10.5935L7.92105 14.1182C7.92105 14.1182 7.3893 14.4893 6.39226 14.1553C5.39522 13.8214 4.23201 13.3762 4.23201 13.3762C4.23201 13.3762 3.43438 12.8197 4.797 12.226Z"
        fill="white"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2316_7633"
          x1="16.0009"
          y1="4.00092"
          x2="10.0009"
          y2="18"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#37AEE2" />
          <Stop offset="1" stopColor="#1E96C8" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default TelegramIcon;
