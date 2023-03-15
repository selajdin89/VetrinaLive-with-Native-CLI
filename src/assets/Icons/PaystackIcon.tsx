import React from 'react';
import {Svg, Path, ClipPath, G, Defs, Rect} from 'react-native-svg';
import {ISvgProps} from './../../Types/Types';

const PaystackIcon = (props: ISvgProps) => {
  return (
    <Svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_1916_5938)">
        <Path
          d="M46.513 0.0742228L2.84816 0.074219C1.38181 0.0742189 0.13269 1.33048 0.13269 2.85983L0.13269 7.83023C0.13269 9.35958 1.38181 10.6158 2.84816 10.6158L46.513 10.6158C48.0336 10.6158 49.2284 9.35959 49.2828 7.83023L49.2828 2.91445C49.2828 1.33048 48.0336 0.0742229 46.513 0.0742228ZM46.513 27.6572L2.84816 27.6572C2.14214 27.6572 1.43612 27.9303 0.94733 28.4765C0.404235 29.0227 0.132688 29.6781 0.132688 30.4428L0.132687 35.4132C0.132687 36.9426 1.3818 38.1988 2.84816 38.1988L46.513 38.1988C48.0336 38.1988 49.2284 36.9972 49.2827 35.4132L49.2828 30.4428C49.2284 28.8588 48.0336 27.6572 46.513 27.6572ZM27.4503 41.4214L2.84816 41.4214C2.14214 41.4214 1.43611 41.6945 0.947329 42.2407C0.458544 42.7869 0.132687 43.4423 0.132687 44.207L0.132686 49.1774C0.132686 50.7068 1.3818 51.963 2.84816 51.963L27.396 51.963C28.9167 51.963 30.1115 50.7068 30.1115 49.232L30.1115 44.2616C30.1658 42.623 28.971 41.3668 27.4503 41.4214ZM49.2828 13.8384L2.84816 13.8384C2.14214 13.8384 1.43612 14.1115 0.947331 14.6577C0.458546 15.2039 0.132689 15.8593 0.132689 16.624L0.132689 21.5944C0.132688 23.1238 1.38181 24.38 2.84816 24.38L49.2284 24.38C50.7491 24.38 51.9439 23.1238 51.9439 21.5944L51.9439 16.624C51.9982 15.0947 50.7491 13.893 49.2828 13.8384Z"
          fill="#00C3F7"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1916_5938">
          <Rect
            width="52"
            height="52"
            fill="white"
            transform="translate(52 52) rotate(-180)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default PaystackIcon;