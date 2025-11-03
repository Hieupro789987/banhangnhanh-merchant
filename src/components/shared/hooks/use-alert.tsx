import toast from "react-hot-toast";
import { IconType } from "react-icons";
import {
  FiAlertTriangle,
  FiCheckCircle,
  FiInfo,
  FiAlertCircle,
  FiX,
} from "react-icons/fi";
import React from "react";

type ToastType = "success" | "error" | "warning" | "info" | "danger";

interface ToastOptions {
  duration?: number;
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
}

const useAlert = () => {
  const getIcon = (type: ToastType): IconType => {
    switch (type) {
      case "success":
        return FiCheckCircle;
      case "error":
      case "danger":
        return FiAlertCircle;
      case "warning":
        return FiAlertTriangle;
      case "info":
      default:
        return FiInfo;
    }
  };

  const getColor = (type: ToastType): string => {
    switch (type) {
      case "success":
        return "text-green-500";
      case "error":
      case "danger":
        return "text-red-500";
      case "warning":
        return "text-yellow-500";
      case "info":
      default:
        return "text-blue-500";
    }
  };

  const showToast = (
    message: string,
    type: ToastType = "info",
    options: ToastOptions = {}
  ) => {
    const Icon = getIcon(type);
    const color = getColor(type);

    return toast(
      (t) => (
        <div className="flex items-start gap-3 max-w-sm">
          <div className={`mt-0.5 ${color}`}>
            <Icon size={20} />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">{message}</div>
          </div>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FiX size={16} />
          </button>
        </div>
      ),
      {
        duration: options.duration || 4000,
        position: options.position || "top-center",
        className: "!bg-white !shadow-lg !border !border-gray-200 !rounded-lg",
      }
    );
  };

  const confirm = (
    message: string,
    onConfirm: () => void,
    confirmText: string = "Xác nhận",
    cancelText: string = "Hủy",
    type: ToastType = "warning",
    options: ToastOptions = {}
  ): Promise<boolean> => {
    return new Promise((resolve) => {
      const Icon = getIcon(type);
      const color = getColor(type);

      const overlay = document.createElement("div");
      overlay.className = "fixed inset-0 z-[9998] bg-black bg-opacity-50";
      overlay.onclick = () => {
        toast.dismiss(toastId);
        if (document.body.contains(overlay)) {
          document.body.removeChild(overlay);
        }
        resolve(false);
      };
      document.body.appendChild(overlay);

      const toastId = toast(
        (t) => (
          <div
            className="flex flex-col gap-3 max-w-sm relative z-[9999]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <div className={`${color}`}>
                <Icon size={32} />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-subtitle">
                  {message}
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => {
                  toast.dismiss(t.id);
                  if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                  }
                  resolve(false);
                }}
                className="px-3 py-2 text-sm border text-subtitle border-neutral-300 rounded-lg transition-colors"
              >
                {cancelText}
              </button>
              <button
                onClick={() => {
                  toast.dismiss(t.id);

                  if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                  }
                  onConfirm();
                  resolve(true);
                }}
                className={`px-3 py-2 text-sm text-white rounded-lg transition-colors ${
                  type === "danger" || type === "error"
                    ? "bg-red-600 hover:bg-red-700"
                    : type === "warning"
                    ? "bg-yellow-600 hover:bg-yellow-700"
                    : type === "success"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {confirmText}
              </button>
            </div>
          </div>
        ),
        {
          duration: options.duration || Infinity,
          position: options.position || "top-center",
          className:
            "!bg-white !p-4 !px-2 !shadow-card !border !border-neutral-200 !rounded-lg relative z-[9999]",
        }
      );
    });
  };

  return {
    success: (message: string, options?: ToastOptions) =>
      showToast(message, "success", options),
    error: (message: string, options?: ToastOptions) =>
      showToast(message, "error", options),
    warning: (message: string, options?: ToastOptions) =>
      showToast(message, "warning", options),
    info: (message: string, options?: ToastOptions) =>
      showToast(message, "info", options),
    danger: (message: string, options?: ToastOptions) =>
      showToast(message, "danger", options),
    confirm,
    dismiss: toast.dismiss,
    remove: toast.remove,
  };
};

export default useAlert;
