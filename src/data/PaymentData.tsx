import {
  AlipayIcon,
  CashIcon,
  PayPallIcon,
  PaystackIcon,
  RazoPay,
  StripeIcon,
  WireFarmIcon,
} from '../assets/Icons';

export const payments = [
  {
    key: '1',
    icon: <CashIcon />,
    status: 'Disable',
    method: 'Cash',
  },
  {
    key: '2',
    icon: <WireFarmIcon />,
    status: 'Disabled',
    method: 'Wire Transfer',
  },
  {
    key: '3',
    icon: <StripeIcon />,
    status: 'Disabled',
    method: 'Stripe',
  },
  {
    key: '4',
    icon: <PayPallIcon />,
    status: 'Disabled',
    method: 'Paypall',
  },
  {
    key: '5',
    icon: <RazoPay />,
    status: 'Disable',
    method: 'Razoplay',
  },
  {
    key: '6',
    icon: <AlipayIcon />,
    status: 'Coming Soon',
    method: 'AliPay',
  },
  {
    key: '7',
    icon: <PaystackIcon />,
    status: 'Coming Soon',
    method: 'Paystack',
  },
];
