import React from 'react';
import {Path, G, Rect, ClipPath, Defs, Svg} from 'react-native-svg';
import {ISvgProps} from './../../Types/Types';

const Logo = (props: ISvgProps) => {
  return (
    <Svg
      width="156"
      height="24"
      viewBox="0 0 156 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_36_276)">
        <Path
          d="M6.42722 22.9773L0.449585 6.5083H4.12461L8.27236 18.4483L12.4049 6.5083H16.0951L10.1175 22.9773H6.42722Z"
          fill="black"
        />
        <Path
          d="M25.7153 23.435C24.1813 23.4702 22.6655 23.0965 21.3236 22.3523C20.0803 21.6442 19.0586 20.604 18.3729 19.3482C17.6458 17.9896 17.2808 16.4666 17.3131 14.926C17.2722 13.3019 17.6282 11.6924 18.35 10.2369C19.0066 8.97077 20.0051 7.91414 21.2321 7.18711C22.5281 6.43732 24.0049 6.05756 25.5018 6.08918C27.0406 6.03949 28.5584 6.45681 29.8555 7.28623C31.071 8.10919 32.0009 9.28948 32.5164 10.6639C33.1226 12.3048 33.3468 14.0623 33.1721 15.8028H29.5276V14.4228C29.6341 13.0397 29.3034 11.6582 28.5822 10.4733C28.2303 10.0461 27.7802 9.71053 27.2702 9.49541C26.7603 9.28029 26.2059 9.192 25.6543 9.23811C25.0248 9.1902 24.3928 9.29159 23.8099 9.53405C23.2269 9.77651 22.7094 10.1532 22.2995 10.6334C21.4888 11.8326 21.1023 13.2684 21.2016 14.7125C21.115 16.0911 21.5024 17.4578 22.2995 18.5858C22.6883 19.0497 23.1807 19.4157 23.737 19.6541C24.2932 19.8925 24.8978 19.9967 25.5018 19.9582C26.3232 19.9815 27.1345 19.7728 27.8426 19.3559C28.5135 18.9388 29.0445 18.3308 29.3675 17.6099L32.9968 18.7078C32.4115 20.14 31.3897 21.3512 30.0766 22.1693C28.7744 23.0009 27.2604 23.4403 25.7153 23.435ZM20.0427 15.7647V12.9894H31.3727V15.7647H20.0427Z"
          fill="black"
        />
        <Path
          d="M34.7598 9.39039V6.50832H46.2423V9.39039H34.7598ZM46.2423 22.9773C45.1897 23.1777 44.1189 23.2672 43.0476 23.2442C42.0865 23.2384 41.1358 23.0441 40.2494 22.6723C39.4464 22.3319 38.7843 21.7264 38.3738 20.9568C38.0205 20.2803 37.8274 19.5316 37.8096 18.7686C37.8096 18.0061 37.8096 17.1903 37.8096 16.2525V1.93359H41.4694V16.039C41.4694 16.7049 41.4694 17.2843 41.4694 17.7774C41.4668 18.2042 41.5744 18.6244 41.782 18.9973C41.966 19.3002 42.2228 19.5523 42.5291 19.7308C42.8353 19.9092 43.1813 20.0083 43.5356 20.019C44.4522 20.0842 45.3732 20.0432 46.2804 19.897L46.2423 22.9773Z"
          fill="black"
        />
        <Path
          d="M49.7961 22.9775V6.50852H53.0594V10.519L52.663 10.0006C52.8576 9.45454 53.1326 8.94059 53.4788 8.47565C53.8153 8.02951 54.2315 7.64951 54.7063 7.35484C55.123 7.07558 55.5774 6.85735 56.0559 6.70676C56.5506 6.54901 57.0627 6.45172 57.5808 6.41702C58.09 6.37699 58.6022 6.40003 59.1057 6.48564V9.91669C58.5574 9.76665 57.986 9.72011 57.4207 9.77944C56.8154 9.82293 56.2283 10.0056 55.7052 10.3132C55.2186 10.5682 54.7942 10.9275 54.4624 11.3653C54.1377 11.8026 53.8973 12.2964 53.7533 12.8216C53.5965 13.3954 53.5195 13.9881 53.5245 14.5829V22.9699L49.7961 22.9775Z"
          fill="black"
        />
        <Path
          d="M62.2704 4.0075V0.637451H65.9454V4.0075H62.2704ZM62.2704 22.9773V6.50834H65.9454V22.9773H62.2704Z"
          fill="black"
        />
        <Path
          d="M70.4875 22.9774V6.50841H73.7661V11.6169H74.2083V22.9774H70.4875ZM81.9244 22.9774V15.0479C81.9195 14.472 81.8839 13.8968 81.8176 13.3247C81.748 12.6953 81.5808 12.0805 81.322 11.5025C81.0713 10.9273 80.6711 10.4297 80.1631 10.0614C79.5473 9.65603 78.8179 9.45832 78.0816 9.49723C77.6106 9.49325 77.142 9.56534 76.6939 9.71072C76.2249 9.86229 75.7988 10.1237 75.4511 10.4732C75.0405 10.9061 74.7352 11.428 74.559 11.9981C74.3105 12.7997 74.1971 13.6372 74.2236 14.4761L72.043 13.5459C72.0251 12.23 72.3039 10.9269 72.8588 9.73359C73.3856 8.63203 74.2128 7.70169 75.2453 7.04976C76.4207 6.34057 77.777 5.98826 79.149 6.03569C80.1996 5.99415 81.245 6.20323 82.1988 6.64566C82.938 7.00186 83.585 7.52367 84.0897 8.17056C84.5313 8.79191 84.8663 9.48249 85.0809 10.2139C85.2908 10.8718 85.4363 11.5485 85.5155 12.2344C85.5765 12.8673 85.6146 13.3857 85.6146 13.7593V22.9774H81.9244Z"
          fill="black"
        />
        <Path
          d="M94.2315 23.4349C93.1738 23.4718 92.1241 23.2382 91.1817 22.7563C90.3975 22.3472 89.7486 21.7195 89.3137 20.9493C88.8913 20.1894 88.6732 19.333 88.6809 18.4637C88.6681 17.7302 88.803 17.0016 89.0774 16.3212C89.3443 15.6813 89.763 15.1161 90.2973 14.6743C90.9313 14.165 91.6556 13.7796 92.4321 13.5382C93.1827 13.3008 93.9464 13.1073 94.7195 12.9588C95.604 12.7834 96.5723 12.6233 97.6168 12.4784C98.6614 12.3336 99.7517 12.1734 100.888 11.9981L99.5763 12.7605C99.6597 11.8545 99.3861 10.9518 98.8139 10.2444C98.4528 9.94143 98.0347 9.71381 97.5842 9.575C97.1338 9.4362 96.66 9.38901 96.191 9.43623C95.4436 9.43832 94.7072 9.61591 94.0409 9.9547C93.6892 10.1357 93.3788 10.3877 93.1294 10.6948C92.8801 11.0019 92.6972 11.3574 92.5923 11.7388L89.2375 10.6867C89.6022 9.34355 90.4078 8.16203 91.5248 7.33186C92.8911 6.42291 94.5142 5.97903 96.1529 6.06618C97.4769 6.03824 98.7926 6.28216 100.019 6.78289C101.104 7.23584 101.986 8.07144 102.497 9.13125C102.784 9.68462 102.966 10.2873 103.03 10.9078C103.094 11.5641 103.124 12.2232 103.122 12.8825V22.9774H99.9042V19.4091L100.438 19.9886C99.8055 21.0655 98.9111 21.9651 97.8379 22.6038C96.7238 23.177 95.4841 23.4627 94.2315 23.4349ZM94.994 20.5071C95.7304 20.5283 96.4615 20.3768 97.1289 20.0648C97.6692 19.806 98.1496 19.4372 98.5394 18.9822C98.848 18.6277 99.0884 18.2193 99.2485 17.7775C99.4474 17.2635 99.5583 16.7196 99.5763 16.1687C99.5763 15.5664 99.5763 15.0708 99.5763 14.6972L100.705 15.0326L97.8532 15.4901C97.0907 15.6197 96.3817 15.7493 95.8098 15.8637C95.294 15.9616 94.7847 16.0915 94.2849 16.2526C93.9016 16.3808 93.5374 16.5603 93.2022 16.7863C92.9282 16.9686 92.6967 17.2078 92.5236 17.4877C92.3603 17.7699 92.2784 18.092 92.2873 18.4179C92.2793 18.7987 92.3855 19.1732 92.5923 19.493C92.8094 19.8283 93.1193 20.0932 93.4843 20.2554C93.9433 20.4433 94.4376 20.5291 94.933 20.5071H94.994Z"
          fill="black"
        />
        <Path
          d="M107.467 22.9774V0.561279H111.142V22.9774H107.467Z"
          fill="#21B8F9"
        />
        <Path
          d="M116.023 4.0075V0.637451H119.698V4.0075H116.023ZM116.023 22.9773V6.50834H119.698V22.9773H116.023Z"
          fill="#21B8F9"
        />
        <Path
          d="M128.724 22.9773L122.747 6.5083H126.422L130.57 18.4483L134.702 6.5083H138.392L132.415 22.9773H128.724Z"
          fill="#21B8F9"
        />
        <Path
          d="M148.015 23.435C146.481 23.4702 144.965 23.0965 143.623 22.3523C142.377 21.6478 141.355 20.6067 140.673 19.3483C139.946 17.9896 139.581 16.4666 139.613 14.926C139.572 13.3019 139.928 11.6924 140.65 10.2369C141.301 8.96739 142.301 7.90957 143.532 7.18712C144.828 6.43733 146.305 6.05756 147.802 6.08919C149.344 6.02348 150.87 6.42761 152.178 7.24811C153.391 8.07329 154.321 9.25285 154.839 10.6258C155.441 12.2676 155.666 14.0242 155.495 15.7647H151.85V14.4228C151.85 12.6336 151.535 11.3272 150.905 10.5038C150.552 10.0776 150.102 9.74275 149.592 9.52772C149.082 9.31269 148.528 9.22381 147.977 9.26862C147.347 9.22008 146.715 9.3212 146.132 9.5637C145.549 9.8062 145.032 10.1832 144.622 10.6639C143.811 11.8631 143.425 13.2989 143.524 14.743C143.438 16.1216 143.825 17.4883 144.622 18.6163C145.011 19.0802 145.503 19.4462 146.06 19.6846C146.616 19.923 147.22 20.0272 147.824 19.9887C148.646 20.0112 149.457 19.8025 150.165 19.3864C150.836 18.9693 151.367 18.3613 151.69 17.6404L155.319 18.7383C154.731 20.1688 153.71 21.3793 152.399 22.1998C151.087 23.0249 149.565 23.4538 148.015 23.435ZM142.342 15.7647V12.9894H153.703V15.7647H142.342Z"
          fill="#21B8F9"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_36_276">
          <Rect
            width="155.101"
            height="22.8774"
            fill="white"
            transform="translate(0.449585 0.561279)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Logo;
