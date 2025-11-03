import { EPaymentMethod } from "@/generated/graphql";
import CodImg from "@/static/cod-icon.png";
import bankTransferImg from "@/static/bankTransfer-icon.png";
import mbImg from "@/static/mb-icon.png";
import shoppingImg from "@/static/shopping-wallet-icon.png";
import payQrImg from "@/static/payQr-icon.png";
export const PAYMENT_METHOD_ICONS = {
  [EPaymentMethod.BANK_TRANSFER]: bankTransferImg,
  [EPaymentMethod.COD]: CodImg,
  [EPaymentMethod.MBBANK]: mbImg,
  [EPaymentMethod.SHOPPING_WALLET]: shoppingImg,
  [EPaymentMethod.NEXT_PAY_ONLINE_QR]: payQrImg,
  [EPaymentMethod.NEXT_PAY_EDC_QR]: payQrImg,
  [EPaymentMethod.NEXT_PAY_EDC_CARD]: payQrImg,
} as const;

export const getPaymentMethodIcon = (method: EPaymentMethod) => {
  return PAYMENT_METHOD_ICONS[method] || bankTransferImg;
};
