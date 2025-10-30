import {
  EFeatureGroup,
  ELegalEntityType,
  EShopType,
} from "@/generated/graphql";
import { Option } from "@/types";

export const LEGAL_ENTITY_TYPE_OPTIONS: Option[] = [
  { label: "Cá nhân", value: ELegalEntityType.INDIVIDUAL },
  { label: "Hộ kinh doanh", value: ELegalEntityType.HOUSEHOLD_BUSINESS },
  { label: "Doanh nghiệp", value: ELegalEntityType.COMPANY },
  { label: "Hợp tác xã", value: ELegalEntityType.COOPERATIVE },
];

export const SHOP_TYPE_OPTIONS: Option[] = [
  { value: EShopType.DISTRIBUTOR, label: "Đại lý vật tư,...", color: "teal" },

  {
    value: EShopType.FOOD_AND_BEVERAGE_DEPARTMENT,
    label: "Ngành thực phẩm",
    color: "info",
  },
  {
    value: EShopType.FAST_MOVING_CONSUMER_GOODS,
    label: "Ngành tiêu dùng",
    color: "success",
  },

  {
    value: EShopType.ELECTRONICS,
    label: "Thiết bị điện tử",
    color: "success",
  },

  {
    value: EShopType.SERVICE,
    label: "Dịch vụ",
    color: "success",
  },

  {
    value: EShopType.OTHER,
    label: "Khác",
    color: "success",
  },
];

export const FEATURE_GROUP_OPTIONS: Option[] = [
  {
    value: EFeatureGroup.ORDER,
    label: "Quản lý bán hàng",
    desc: "Tạo đơn, in bill và POS",
  },
  {
    value: EFeatureGroup.POS,
    label: "Máy POS",
    desc: "Hỗ trợ máy POS & in hoá đơn",
  },
  {
    value: EFeatureGroup.PAYMENT,
    label: "Cổng thanh toán online",
    desc: "QR, thẻ, cổng thanh toán",
  },
  {
    value: EFeatureGroup.INVOICE,
    label: "Hoá đơn điện tử",
    desc: "Phát hành HĐĐT chính thức",
  },
  {
    value: EFeatureGroup.WAREHOUSES,
    label: "Tồn kho",
    desc: "Quản lý xuất nhập tồn & cảnh báo",
  },
  {
    value: EFeatureGroup.SHOP_VOCHERS,
    label: "Quản lý khuyến mãi",
    desc: "Giảm giá & coupon",
  },
  {
    value: EFeatureGroup.STAFFS,
    label: "Quản lý nhân viên",
    desc: "Phân quyền & chấm công cơ bản",
  },
  {
    value: EFeatureGroup.DELIVERY,
    label: "Quản lý tài xế",
    desc: "Quản lý đơn & giao hàng",
  },
  {
    value: EFeatureGroup.SUPPLIERS,
    label: "Quản lý nhà cung cấp",
    desc: "Nhập hàng & nhà cung cấp",
  },
  {
    value: EFeatureGroup.TABLE,
    label: "Quản lý đặt bàn",
    desc: "Bàn, đặt chỗ (nhà hàng)",
  },
  {
    value: EFeatureGroup.SHOP_AFFILIATES,
    label: "Đối tác bán hàng",
    desc: "Kết nối đối tác & kênh bán",
  },
  {
    value: EFeatureGroup.MINIGAME,
    label: "Quản lý chiến dịch minigame",
    desc: "Minigame & quà tặng",
  },
  {
    value: EFeatureGroup.CUSTOMERS,
    label: "Quản lý khách hàng",
    desc: "Quản lý thông tin khách hàng",
  },
  {
    value: EFeatureGroup.SERVICE_CONTRACTS,
    label: "Hợp đồng dịch vụ",
    desc: "Quản lý hợp đồng & dịch vụ",
  },
  {
    value: EFeatureGroup.REPORTS,
    label: "Báo cáo & Thống kê",
    desc: "Báo cáo doanh thu & hiệu suất",
  },
];
