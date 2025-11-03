import { useOrder } from "@/components/features/order/provider/order-provider";
import BottomSheet from "@/components/shared/common/bottom-sheet";
import Section from "@/components/shared/common/section";
import { usePaymentMethods } from "@/components/shared/hooks/use-paymentMethod";
import { parseNumber } from "@/components/shared/utils/format";
import React, { useState } from "react";
import { RiWalletFill } from "react-icons/ri";
import { Icon, List } from "zmp-ui";
import CodImg from "@/static/cod-icon.png";
import bankTransferImg from "@/static/bankTransfer-icon.png";
import mbImg from "@/static/mb-icon.png";
import shoppingImg from "@/static/shopping-wallet-icon.png";
import payQrImg from "@/static/payQr-icon.png";
import { EPaymentMethod } from "@/generated/graphql";
import { Img } from "@/components/shared/common/img";

const OrderPaymentMethod = () => {
  const { state, updateOrderInput } = useOrder();
  const { paymentMethods, loading } = usePaymentMethods(
    state?.draftOrder?.order?.shopBranchId || ""
  );
  const [visible, setVisible] = useState(false);

  const selectedPaymentMethod = paymentMethods.find(
    (p) => p?.value === state?.draftOrder?.order?.paymentMethod
  );

  const getPaymentMethodIcon = (method: EPaymentMethod) => {
    switch (method) {
      case "BANK_TRANSFER":
        return bankTransferImg;
      case "COD":
        return CodImg;
      case "MBBANK":
        return mbImg;
      case "SHOPPING_WALLET":
        return shoppingImg;
      case "NEXT_PAY_ONLINE_QR":
      case "NEXT_PAY_EDC_QR":
      case "NEXT_PAY_EDC_CARD":
        return payQrImg;

      default:
        return bankTransferImg;
    }
  };
  return (
    <>
      <div className="bg-white p-4 shadow-card rounded-lg">
        <Section
          title="Hình thức thanh toán"
          prefix={<RiWalletFill size={24} color="#09A965" />}
          suffix={
            <div
              className="p-0.5 rounded-full text-[#60728F] bg-opacity-35 bg-[#B9C7DC]"
              onClick={() => setVisible(true)}
            >
              <Icon icon="zi-chevron-right" size={21} />
            </div>
          }
        >
          <div
            className="!text-sm mt-3 text-[#4E5461]"
            onClick={() => setVisible(true)}
          >
            {selectedPaymentMethod?.label || "Chọn hình thức thanh toán"}
          </div>
        </Section>
      </div>
      <BottomSheet
        visible={visible}
        height="50%"
        onClose={() => setVisible(false)}
        title="Chọn hình thức thanh toán"
        className="flex flex-col "
      >
        <div className="flex-1 p-4  overflow-y-auto space-y-3">
          {paymentMethods?.map((payment) => (
            <div
              key={payment?.value}
              className="border p-4 rounded-lg border-neutral-200"
              onClick={() => {
                if (payment?.value) {
                  updateOrderInput({
                    paymentMethod: payment.value,
                  });
                  setVisible(false);
                }
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-x-2 items-center">
                  <Img
                    src={getPaymentMethodIcon(payment?.value as EPaymentMethod)}
                    className="w-8"
                  />

                  {payment?.value === "SHOPPING_WALLET"
                    ? `Ví mua hàng (${parseNumber(payment.balanceAvailable)}đ)`
                    : payment?.label}
                </div>
                {state?.draftOrder?.order?.paymentMethod === payment?.value && (
                  <Icon icon="zi-check" className="text-primary" />
                )}
              </div>
            </div>
          ))}
        </div>
      </BottomSheet>
    </>
  );
};

export default OrderPaymentMethod;
