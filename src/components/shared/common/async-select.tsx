// components/shared/common/async-select.tsx
import React, { useState, useCallback, useEffect } from "react";
import { debounce } from "lodash";
import BottomSheet from "./bottom-sheet";
import { Button } from "zmp-ui";
import InputWithComponents from "@/components/shared/common/input";
import { Option } from "@/types";
import { useVirtualKeyboardVisible } from "@/components/shared/hooks/useVirtualKeyboardVisible";
import defaultAvatar from "@/static/default-avatar.jpg";
import { Img } from "@/components/shared/common/img";
import { EmptySearchResult } from "@/components/shared/common/empty";

interface AsyncSelectProps {
  optionsPromise: (params: { search: string }) => Promise<Option[]>;
  onSelect?: (params: { selectedItem: Option }) => void;
  placeholder?: string;
  defaultValue?: string;
  inputProps?: any;
  value?: string;
}

const AsyncSelect: React.FC<AsyncSelectProps> = ({
  optionsPromise,
  onSelect,
  placeholder = "Tìm kiếm...",
  defaultValue = "",
  inputProps = {},
  value = "",
}) => {
  const keyboardVisible = useVirtualKeyboardVisible();

  const [inputValue, setInputValue] = useState(value || "");

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useCallback(
    debounce(async (search: string) => {
      if (!search.trim()) {
        setOptions([]);
        return;
      }

      setLoading(true);
      try {
        const results = await optionsPromise({ search });
        setOptions(results);
      } catch (error: any) {
        console.error("Tìm kiếm lỗi:", error?.message);
        setOptions([]);
      } finally {
        setLoading(false);
      }
    }, 500),
    [optionsPromise]
  );

  const handleOpenSheet = () => {
    setIsOpen(true);
    setSearchTerm(inputValue);

    if (inputValue.trim()) {
      debouncedSearch(inputValue);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const handleSelectOption = (option: Option) => {
    onSelect?.({ selectedItem: option });
    setInputValue(option.label);
    setOptions([]);
    setIsOpen(false);
  };

  const handleInputSubmit = () => {
    const newOption: Option = {
      value: searchTerm,
      label: searchTerm,
    };
    onSelect?.({ selectedItem: newOption });
    setInputValue(searchTerm);

    setOptions([]);
    setIsOpen(false);
  };

  useEffect(() => {
    if (defaultValue) {
      setInputValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <>
      <InputWithComponents
        value={inputValue}
        placeholder={placeholder}
        onFocus={handleOpenSheet}
        readOnly
        {...inputProps}
        className={`text-sm placeholder:text-xs !h-12 ${inputProps.className}`}
      />

      <BottomSheet
        visible={isOpen}
        onClose={() => setIsOpen(false)}
        title="Tìm kiếm khách hàng"
        height="70vh"
        zIndex={1200}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-200">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder={placeholder}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              autoFocus
            />
          </div>

          <div className="flex-1 overflow-y-auto">
            {loading ? (
              <div className="p-4 text-center text-subtitle text-ellipsis">
                Đang tìm kiếm...
              </div>
            ) : options.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {options.map((option, index) => (
                  <button
                    key={index}
                    disabled={option.disabled}
                    className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                      option.disabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={() =>
                      !option.disabled && handleSelectOption(option)
                    }
                  >
                    <div className="flex items-center gap-3">
                      <Img
                        src={option.image || defaultAvatar}
                        className="w-8 h-8 rounded-full"
                      />

                      <div className="flex-1">
                        <div className="font-medium">{option.label}</div>
                        {option.desc && (
                          <div className="text-sm text-gray-500 mt-1">
                            {option.desc}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : searchTerm ? (
              // <div className="p-4 text-center text-subtitle">
              //   Không tìm thấy kết quả
              // </div>
              <EmptySearchResult title="Không có khách hàng bạn tìm kiếm" />
            ) : (
              <div className="p-4 text-center text-subtitle">
                Nhập từ khóa để tìm kiếm
              </div>
            )}
          </div>

          {searchTerm && !keyboardVisible && (
            <div className="sticky bottom-0 p-4 bg-white shadow">
              <Button
                onClick={handleInputSubmit}
                className="w-full rounded-lg transition-colors"
              >
                Sử dụng "{searchTerm}"
              </Button>
            </div>
          )}
        </div>
      </BottomSheet>
    </>
  );
};

export default AsyncSelect;
