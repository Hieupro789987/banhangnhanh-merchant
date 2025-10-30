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
  const { updateOrderInput } = useOrder();

  const handleSelectChange = (val: string) => {
    const shopBranch = availableBranches?.find((x) => x.id === val);
    shopBranch && setSelectedBranch?.(shopBranch);
  };

  useEffect(() => {
    if (selectedBranch?.id) {
      updateOrderInput({ shopBranchId: selectedBranch?.id });
    }
  }, [selectedBranch]);

  const getAddress = (branch: typeof selectedBranch) =>
    [branch?.address, branch?.ward, branch?.district, branch?.province]
      .filter(Boolean)
      .join(", ");

  const selectOptions = availableBranches.map((shopBranch) => ({
    value: shopBranch.id,
    label: shopBranch.name,
    subtitle: getAddress(shopBranch),
  }));

  return (
    <div className="rounded-lg bg-white p-4">
      <Section
        prefix={<RiStore3Fill className="text-primary" size={24} />}
        title={selectedBranch?.name ? selectedBranch?.name : "Chọn chi nhánh"}
        onClick={() => selectRef.current?.input?.click()}
        suffix={<RiEditFill size={20} className="text-[#60728F]" />}
      >
        <Select
          innerRef={selectRef}
          label="Các cửa hàng ở gần bạn"
          className="!border-transparent hidden !mt-0 !text-sm text-[#4E5461] zaui-select-suffix-hidden !p-0"
          value={selectedBranch?.id || ""}
          onChange={handleSelectChange}
          placeholder="Chọn chi nhánh"
          options={selectOptions as any}
          closeOnSelect
        />

        <div className="mt-3 text-sm text-title min-h-10">
          <p className={selectedBranch ? "" : "text-subtitle"}>
            {selectedBranch
              ? getAddress(selectedBranch)
              : "Vui lòng chọn chi nhánh của cửa hàng"}
          </p>
        </div>
      </Section>
    </div>
  );
};

export default ShopBranchSection;
