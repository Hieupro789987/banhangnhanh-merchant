// components/shared/common/bottom-sheet.tsx
import React from "react";
import { createPortal } from "react-dom";
import { Icon, Sheet } from "zmp-ui";

interface BottomSheetProps extends React.ComponentProps<typeof Sheet> {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  height?: string;
  showHeader?: boolean;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  onClose,
  title,
  children,
  height = "80vh",
  showHeader = true,
  ...props
}) => {
  return createPortal(
    <Sheet
      autoHeight
      mask
      handler
      swipeToClose
      height={height}
      onClose={onClose}
      title={
        (
          <div className="border-b border-neutral-200 pb-4 px-4 flex justify-between items-center">
            <h3 className="text-lg font-bold text-ellipsis">{title}</h3>
            <i onClick={onClose}>
              <Icon icon="zi-close" size={24} />
            </i>
          </div>
        ) as unknown as string
      }
      {...props}
    >
      {children}
    </Sheet>,
    document.body
  );
};

export default BottomSheet;
