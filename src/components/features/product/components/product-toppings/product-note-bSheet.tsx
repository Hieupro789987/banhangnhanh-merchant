// components/features/product/components/product-note-bsheet.tsx
import BottomSheet from "@/components/shared/common/bottom-sheet";
import React, { useState } from "react";
import { Product } from "@/generated/graphql";
import Section from "@/components/shared/common/section";
import Textarea from "@/components/shared/common/textarea";
import { Button } from "zmp-ui";

interface ProductNoteBSheetProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product | null;
  onConfirm: (note: string) => void;
  noteValue?: string;
  title?: string;
}

const ProductNoteBSheet: React.FC<ProductNoteBSheetProps> = ({
  isOpen,
  onClose,
  product,
  onConfirm,
  noteValue = "",
  title = "Ghi chú sản phẩm",
}) => {
  const [note, setNote] = useState(noteValue);

  const handleNoteConfirm = () => {
    onConfirm(note);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  React.useEffect(() => {
    if (isOpen) {
      setNote(noteValue);
    }
  }, [isOpen, noteValue]);

  return (
    <BottomSheet
      visible={isOpen}
      onClose={handleClose}
      title={title}
      height="auto"
    >
      <div className="p-4">
        <Section title="Ghi chú sản phẩm">
          <Textarea
            value={note}
            className="mt-3"
            placeholder="Nhập ghi chú cho sản phẩm..."
            rows={4}
            delay={0}
            onChange={(val) => {
              setNote(val);
            }}
          />
        </Section>

        <div className="sticky bottom-0 left-0 right-0 pt-4 bg-white">
          <Button
            className="w-full py-3 rounded-lg  text-white"
            onClick={handleNoteConfirm}
          >
            Xác nhận
          </Button>
        </div>
      </div>
    </BottomSheet>
  );
};

export default ProductNoteBSheet;
