import { useAuth } from "@/components/features/auth/provider/auth-provider";
import Section from "@/components/shared/common/section";
import TransitionLink from "@/components/shared/common/transition-link";
import { EStaffPermissionScope } from "@/generated/graphql";
import React, { useMemo } from "react";
import { RiAddBoxFill, RiTodoFill } from "react-icons/ri";

const Sales = () => {
  const { isCheckStaffPermissionScope } = useAuth();

  const ORDER_TAB_OPTIONS = useMemo(() => {
    return [
      {
        label: "Tạo đơn hàng",
        value: "CREATE_ORDER",
        icon: <RiAddBoxFill size={26} />,
        path: "/create-order",
        isPermission: isCheckStaffPermissionScope(
          EStaffPermissionScope.CREATE_ORDER
        ),
      },
      {
        label: "Quản lý đơn hàng",
        value: "ORDERS",
        icon: <RiTodoFill size={26} />,
        path: "orders",
        isPermission: isCheckStaffPermissionScope(
          EStaffPermissionScope.VIEW_ORDER
        ),
      },
    ].filter((x) => x.isPermission);
  }, [isCheckStaffPermissionScope]);

  return (
    <Section title="Bán hàng" className="px-4">
      <div className="grid grid-cols-4 gap-x-4 mt-4">
        {ORDER_TAB_OPTIONS.map((tab) => (
          <TransitionLink
            to={tab.path}
            className="flex flex-col max-w-fit justify-center items-center rounded-lg"
            key={tab.value}
          >
            <i className="bg-primary-light text-primary p-2 rounded-lg">
              {tab.icon}
            </i>
            <span className="text-xs font-sans w-16 text-center mt-1 text-subtitle">
              {tab.label}
            </span>
          </TransitionLink>
        ))}
      </div>
    </Section>
  );
};

export default Sales;
