import { cn } from "@/components/shared/utils/cn";
import React from "react";
import { Tabs as ZmpTabs } from "zmp-ui";
import { TabsProps } from "zmp-ui/tabs";

export interface TabOption {
  key: string;
  label: string;

  disabled?: boolean;
  className?: string;
}

interface CustomTabsProps extends Omit<TabsProps, "children"> {
  options: TabOption[];
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
  className?: string;
  tabClassName?: string;
}

export const Tabs = ({
  options,
  defaultActiveKey,
  onChange,
  className,
  tabClassName,
  ...rest
}: CustomTabsProps) => {
  return (
    <ZmpTabs
      defaultActiveKey={defaultActiveKey || options[0]?.key}
      onChange={onChange}
      className={className}
      scrollable
      {...rest}
    >
      {options.map((option) => (
        <ZmpTabs.Tab
          key={option.key}
          label={option.label}
          disabled={option.disabled}
          className="!bg-red-500"
        />
      ))}
    </ZmpTabs>
  );
};
