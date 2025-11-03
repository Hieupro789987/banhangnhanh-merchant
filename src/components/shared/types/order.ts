import { Option } from "@/types";

export const PAYMENT_STATUS: Option[] = [
  { value: "pending", label: "Chờ thanh toán", color: "warning" },
  { value: "partially_filled", label: "Thanh toán 1 phần", color: "info" },
  { value: "filled", label: "Đã thanh toán", color: "success" },
  { value: "rejected", label: "Từ chối thanh toán", color: "danger" },

  { value: "PENDING", label: "Chờ thanh toán", color: "warning" },
  { value: "PARTIALLY", label: "Thanh toán 1 phần", color: "info" },
  { value: "SUCCEED", label: "Đã thanh toán", color: "success" },
  { value: "FAILED", label: "Từ chối thanh toán", color: "danger" },
];

export const ORDER_STATUS: Option[] = [
  {
    value: "PAYMENT_CONFIRMED",
    label: "Xác nhận chuyển khoản",
    color: "success",
  },
  { value: "PENDING", label: "Chờ duyệt", color: "warning" },
  { value: "IN_PROCESSING", label: "Đang xử lý đơn con", color: "warning" },

  { value: "CONFIRMED", label: "Đang xử lý", color: "info" },

  { value: "SORT_ORDER", label: "Đang soạn hàng", color: "cyan" },
  { value: "PACKAGED", label: "Đã đóng gói", color: "teal" },
  { value: "DELIVERY_PENDING", label: "Chờ lấy hàng", color: "warning" },
  { value: "DELIVERY_PICKED_UP", label: "Đã lấy hàng", color: "info" },

  { value: "DELIVERING", label: "Đang giao", color: "purple" },
  { value: "DELIVERY_SUCCESS", label: "Giao thành công", color: "success" },
  { value: "DELIVERY_FAIL", label: "Giao thất bại", color: "danger" },
  { value: "DELIVERY_CANCELED", label: "Vận đơn đã huỷ", color: "danger" },

  { value: "COMPLETED", label: "Hoàn thành", color: "success" },
  {
    value: "PARTIALLY_COMPLETED",
    label: "Hoàn thành một phần",
    color: "success",
  },

  { value: "FAILURE", label: "Thất bại", color: "danger" },
  { value: "CANCELED", label: "Đã huỷ", color: "slate" },
  { value: "RETURNED", label: "Đã hoàn hàng", color: "orange" },
  { value: "UNCOMPLETED", label: "Chưa hoàn thành", color: "accent" },
];

export const ORDER_STATUS_TAB: Option[] = [
  {
    value: "ALL",
    label: "Tất cả",
    color: "success",
  },
  {
    value: "PAYMENT_CONFIRMED",
    label: "Xác nhận chuyển khoản",
    color: "success",
  },
  { value: "PENDING", label: "Chờ duyệt", color: "warning" },
  { value: "IN_PROCESSING", label: "Đang xử lý đơn con", color: "warning" },

  { value: "CONFIRMED", label: "Đang xử lý", color: "info" },

  { value: "SORT_ORDER", label: "Đang soạn hàng", color: "cyan" },
  { value: "PACKAGED", label: "Đã đóng gói", color: "teal" },
  { value: "DELIVERY_PENDING", label: "Chờ lấy hàng", color: "warning" },
  { value: "DELIVERY_PICKED_UP", label: "Đã lấy hàng", color: "info" },

  { value: "DELIVERING", label: "Đang giao", color: "purple" },
  { value: "DELIVERY_SUCCESS", label: "Giao thành công", color: "success" },
  { value: "DELIVERY_FAIL", label: "Giao thất bại", color: "danger" },
  { value: "DELIVERY_CANCELED", label: "Vận đơn đã huỷ", color: "danger" },

  { value: "COMPLETED", label: "Hoàn thành", color: "success" },
  {
    value: "PARTIALLY_COMPLETED",
    label: "Hoàn thành một phần",
    color: "success",
  },

  { value: "FAILURE", label: "Thất bại", color: "danger" },
  { value: "CANCELED", label: "Đã huỷ", color: "slate" },
  { value: "RETURNED", label: "Đã hoàn hàng", color: "orange" },
  { value: "UNCOMPLETED", label: "Chưa hoàn thành", color: "accent" },
];
