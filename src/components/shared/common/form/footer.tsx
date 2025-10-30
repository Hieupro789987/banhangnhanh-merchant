import { useFormContext } from "react-hook-form";
import { Button } from "zmp-ui";

interface FormFooterProps {
  submitText?: string;
  cancelText?: string;
  onCancel?: () => void;
  isLoading?: boolean;
  className?: string;
  submitClassName?: string;
}

export function FormFooter({
  submitText = "Lưu",
  cancelText = "Huỷ",
  className = "",
  submitClassName = "",
  onCancel,
  isLoading = false,
}: FormFooterProps) {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  const loading = isLoading || isSubmitting;

  return (
    <div className={`flex justify-end gap-3 mt-6 ${className}`}>
      {onCancel && (
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {cancelText}
        </button>
      )}

      {/* <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
      >
        {loading ? "Đang xử lý..." : submitText}
      </button> */}
      <Button
        type="highlight"
        loading={loading}
        className={`w-full rounded-lg ${submitClassName}`}
        htmlType="submit"
      >
        {loading ? "Đang xử lý..." : submitText}
      </Button>
    </div>
  );
}
