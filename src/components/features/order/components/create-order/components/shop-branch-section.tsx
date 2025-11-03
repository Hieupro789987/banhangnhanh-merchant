import { useOrder } from "@/components/features/order/provider/order-provider";
import Section from "@/components/shared/common/section";
import Select from "@/components/shared/common/select";
import { useSelectedShopBranch } from "@/components/shared/hooks/use-shop-branches";
import React, { useEffect, useRef } from "react";
import { RiEditFill, RiStore3Fill } from "react-icons/ri";

const ShopBranchSection = () => {
  const selectRef = useRef<any>(null);
  const { availableBranches, selectedBranch, setSelectedBranch } =
    useSelectedShopBranch();
  const { updateOrderInput, state } = useOrder();
  const shopBranchState = state?.draftOrder?.order?.shopBranch;

  const handleSelectChange = (val: string) => {
    const shopBranch = availableBranches?.find((x) => x.id === val);

    if (shopBranch && shopBranch?.id) {
      setSelectedBranch?.(shopBranch);
      updateOrderInput({ shopBranchId: shopBranch?.id });
    }
  };

  useEffect(() => {
    if (!state?.draftOrder?.order?.shopBranchId && selectedBranch?.id) {
      updateOrderInput({ shopBranchId: selectedBranch?.id });
    }
  }, [selectedBranch?.id, state?.draftOrder?.order?.shopBranchId]);

  const getAddress = (branch: typeof selectedBranch) =>
    [branch?.address, branch?.ward, branch?.district, branch?.province]
      .filter(Boolean)
      .join(", ");

  const selectOptions = availableBranches.map((shopBranch) => ({
    value: shopBranch.id,
    label: (
      <div>
        <div>{shopBranch.name}</div>
        <div className="text-subtitle text-sm whitespace-pre-line">
          {getAddress(shopBranch)}
        </div>
      </div>
    ) as unknown as string,
  }));

  return (
    <div className="rounded-lg bg-white p-4 shadow-card">
      <Section
        prefix={<RiStore3Fill className="text-primary" size={24} />}
        title={shopBranchState?.name ? shopBranchState?.name : "Chọn chi nhánh"}
        onClick={() => selectRef.current?.input?.click()}
        suffix={
          <i className="text-primary">
            <RiEditFill size={20} />
          </i>
        }
      >
        <Select
          innerRef={selectRef}
          label="Các cửa hàng ở gần bạn"
          className="!border-transparent hidden !mt-0 !text-sm text-[#4E5461] zaui-select-suffix-hidden !p-0"
          value={shopBranchState?.id || ""}
          onChange={handleSelectChange}
          placeholder="Chọn chi nhánh"
          options={selectOptions as any}
          closeOnSelect
        />

        <div className="mt-3 text-sm text-title min-h-10">
          <p className={shopBranchState ? "" : "text-subtitle"}>
            {shopBranchState
              ? getAddress(shopBranchState)
              : "Vui lòng chọn chi nhánh của cửa hàng"}
          </p>
        </div>
      </Section>
    </div>
  );
};

export default ShopBranchSection;
