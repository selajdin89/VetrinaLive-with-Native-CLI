import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {ISvgProps} from './../../Types/Types';

const WorldIcon = (props: ISvgProps) => {
  return (
    <Svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M57.0363 47.1482C57.1046 47.0684 57.1575 46.9765 57.1922 46.8774C59.7694 42.4261 61.1265 37.3737 61.1265 32.2302C61.1265 27.0867 59.7694 22.0342 57.1922 17.583C57.1575 17.4838 57.1046 17.392 57.0363 17.3121C53.2248 10.8845 47.1134 6.14534 39.9394 4.05394C39.8663 4.02065 39.789 3.99782 39.7096 3.9861C34.5287 2.52482 29.0445 2.52482 23.8636 3.9861C23.7854 3.99718 23.7091 4.01884 23.6368 4.05047C16.4609 6.14175 10.3482 10.8824 6.53692 17.3121C6.4686 17.392 6.41571 17.4838 6.38093 17.583C3.80374 22.0342 2.44663 27.0867 2.44663 32.2302C2.44663 37.3737 3.80374 42.4261 6.38093 46.8774C6.41571 46.9765 6.4686 47.0684 6.53692 47.1482C10.3453 53.5731 16.4517 58.3116 23.6209 60.4054C23.6967 60.4392 23.7769 60.4621 23.8591 60.4733C29.0416 61.9354 34.5276 61.9354 39.7101 60.4733C39.7965 60.4624 39.8809 60.4385 39.9602 60.4024C47.1258 58.3073 53.229 53.5702 57.0363 47.1482ZM32.6532 59.8152V47.4572H44.4946C43.2071 52.1665 41.3546 56.0794 39.1015 58.8466C36.9981 59.424 34.8334 59.7491 32.6532 59.8152ZM24.4717 58.8456C22.2186 56.0794 20.3661 52.167 19.0786 47.4562H30.92V59.8142C28.7398 59.7481 26.5751 59.423 24.4717 58.8456ZM4.20161 33.0958H8.01753V39.9056C8.01766 40.1354 8.109 40.3557 8.27149 40.5182C8.43398 40.6807 8.65432 40.772 8.88411 40.7722H15.9727C16.2025 42.4672 16.5006 44.1246 16.8641 45.7241H7.71547C5.54043 41.861 4.33468 37.5281 4.20161 33.0968V33.0958ZM7.71745 18.7353H16.8646C16.5006 20.3347 16.2025 21.9926 15.9732 23.6872H8.88411C8.77025 23.6872 8.65751 23.7097 8.55233 23.7534C8.44716 23.797 8.35161 23.8609 8.27114 23.9415C8.19067 24.022 8.12686 24.1177 8.08334 24.2229C8.03983 24.3281 8.01747 24.4409 8.01753 24.5547V31.3636H4.20161C4.33468 26.9323 5.54043 22.5994 7.71547 18.7363L7.71745 18.7353ZM30.92 4.64519V17.0031H19.0786C20.3661 12.2939 22.2186 8.3809 24.4717 5.61378C26.5751 5.03636 28.7398 4.71121 30.92 4.64519ZM39.1015 5.61477C41.3546 8.3809 43.2071 12.2934 44.4946 17.0041H32.6532V4.64519C34.8335 4.71154 36.9981 5.03702 39.1015 5.61477ZM59.3716 31.3646H55.5556V24.5547C55.5555 24.325 55.4642 24.1046 55.3017 23.9421C55.1392 23.7796 54.9189 23.6883 54.6891 23.6882H47.6004C47.3707 21.9931 47.0726 20.3357 46.7091 18.7363H55.8577C58.0327 22.5994 59.2385 26.9323 59.3716 31.3636V31.3646ZM55.8557 45.7251H46.7086C47.0726 44.1256 47.3707 42.4677 47.5999 40.7732H54.6891C54.8029 40.7731 54.9157 40.7506 55.0208 40.707C55.126 40.6633 55.2216 40.5994 55.302 40.5189C55.3825 40.4383 55.4463 40.3427 55.4898 40.2374C55.5333 40.1322 55.5557 40.0195 55.5556 39.9056V33.0968H59.3716C59.2385 37.5281 58.0327 41.861 55.8577 45.7241L55.8557 45.7251ZM32.6512 45.7251V40.7732H45.8499C45.6128 42.4722 45.3052 44.13 44.9279 45.7251H32.6512ZM9.75069 39.039V25.4213H53.8225V39.039H9.75069ZM45.8499 23.6882H32.6532V18.7363H44.9294C45.3052 20.3308 45.6137 21.9892 45.8499 23.6882ZM30.9185 18.7363V23.6882H17.7232C17.9604 21.9892 18.2679 20.3313 18.6453 18.7363H30.9185ZM17.7232 40.7722H30.92V45.7241H18.6438C18.2679 44.1291 17.9594 42.4712 17.7232 40.7722ZM41.9162 57.9057C43.9057 54.6702 45.3807 51.1454 46.2887 47.4572H54.8005C51.6706 52.1716 47.1744 55.8166 41.9147 57.9037L41.9162 57.9057ZM54.8005 17.0031H46.2872C45.3788 13.3151 43.9037 9.7904 41.9147 6.55464C47.174 8.64282 51.6696 12.2885 54.799 17.0031H54.8005ZM21.66 6.55464C19.6708 9.79034 18.1958 13.3151 17.2875 17.0031H8.77418C11.9037 12.2889 16.3992 8.64372 21.6585 6.55613L21.66 6.55464ZM8.77418 47.4572H17.286C18.1939 51.1453 19.6688 54.6701 21.658 57.9057C16.3988 55.8174 11.9035 52.1718 8.77418 47.4572Z"
        fill="white"
      />
      <Path
        d="M22.7687 33.8088L21.0464 28.5781H19.6005L17.8678 33.8088L16.305 28.5781H14.8482L17.1661 35.8822H18.4843L20.3235 30.4603L22.1522 35.8822H23.4813L25.7879 28.5781H24.3315L22.7687 33.8088Z"
        fill="white"
      />
      <Path
        d="M33.6208 35.8822H34.9494L37.2564 28.5781H35.7996L34.2373 33.8088L32.515 28.5781H31.0691L29.3359 33.8088L27.7736 28.5781H26.3167L28.6342 35.8822H29.9529L31.792 30.4603L33.6208 35.8822Z"
        fill="white"
      />
      <Path
        d="M41.4215 35.8822L43.2601 30.4603L45.0888 35.8822H46.4179L48.725 28.5781H47.2682L45.7053 33.8088L43.9831 28.5781H42.5371L40.8045 33.8088L39.2417 28.5781H37.7853L40.1028 35.8822H41.4215Z"
        fill="white"
      />
    </Svg>
  );
};

export default WorldIcon;
