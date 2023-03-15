import {type SvgProps} from 'react-native-svg';
import * as React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

export interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}

export type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  ResetPassword: undefined;
};

export type RootDrawerParamList = {
  Dashboard: undefined;
  NewProduct: undefined;
  OrderInfo: tableOrdersType;
  Orders: undefined;
  Payment: undefined;
  Products: undefined;
  Subscription: undefined;
};

export type tableOrdersType = {
  key: string;
  name: string;
  surname: string;
  email: string;
  status: string;
  shippingAdress: string;
  telNumber: number;
  postName: string;
  orderNumber: string;
  subTotal: number;
  shippingCost: number;
};

export type typePayments = {
  key: string;
  icon: any;
  status: string;
  method: string;
};

export type typeProducts = {
  key: string;
  name: string;
  price: number;
};

export type typeSubscriptions = {
  key: string;
  platform: string;
  discount: string;
  amount: string;
  price: string;
};

// export declare type PropsPagination = React.ComponentPropsWithRef<typeof View> &
//   PaginationControlsProps &
//   PaginationDropdownProps & {
//     /**
//      * Label text to display which indicates current pagination.
//      */
//     label?: React.ReactNode;
//     /**
//      * AccessibilityLabel for `label`.
//      */
//     accessibilityLabel?: string;
//     /**
//      * Label text for select page dropdown to display.
//      */
//     selectPageDropdownLabel?: React.ReactNode;
//     /**
//      * AccessibilityLabel for `selectPageDropdownLabel`.
//      */
//     selectPageDropdownAccessibilityLabel?: string;
//     style?: StyleProp<ViewStyle>;
//     /**
//      * @optional
//      */
//     optionsLabel?: string;
//   };
// export declare type PaginationDropdownProps = {
//   /**
//    * The current number of rows per page.
//    */
//   numberOfItemsPerPage?: number;
//   /**
//    * Options for a number of rows per page to choose from.
//    */
//   numberOfItemsPerPageList?: Array<number>;
//   /**
//    * The function to set the number of rows per page.
//    */
//   onItemsPerPageChange?: (numberOfItemsPerPage: number) => void;
// };
// export declare type PaginationControlsProps = {
//   /**
//    * The currently visible page (starting with 0).
//    */
//   page: number;
//   /**
//    * The total number of pages.
//    */
//   numberOfPages: number;
//   /**
//    * Function to execute on page change.
//    */
//   onPageChange: (page: number) => void;
//   /**
//    * Whether to show fast forward and fast rewind buttons in pagination. False by default.
//    */
//   showFastPagination?: boolean;
// };

// export type allPaginationProps = PropsPagination &
//   PaginationDropdownProps &
//   PaginationControlsProps;

export type isAuthProps = {
  setIsAuth: any;
};
