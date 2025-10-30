import Section from "@/components/shared/common/section";
import TransitionLink from "@/components/shared/common/transition-link";
import React from "react";
import { RiAddBoxFill, RiTodoFill } from "react-icons/ri";

const ORDER_TAB_OPTIONS = [
  {
    label: "Tạo đơn hàng",
    value: "CREATE_ORDER",
    icon: <RiAddBoxFill size={26} />,
    path: "/create-order",
  },
  {
    label: "Quản lý đơn hàng",
    value: "ORDERS",
    icon: <RiTodoFill size={26} />,
    path: "orders",
  },
];

const Sales = () => {
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
            <span className="text-xs w-16 text-center mt-1 text-subtitle">
              {tab.label}
            </span>
          </TransitionLink>
        ))}
      </div>
    </Section>
  );
};

export default Sales;
