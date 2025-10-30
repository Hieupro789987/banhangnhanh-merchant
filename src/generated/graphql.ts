import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Mixed: { input: any; output: any; }
};

export type Affiliate = {
  __typename?: 'Affiliate';
  approvedCommission?: Maybe<Scalars['Mixed']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  bankAccountName?: Maybe<Scalars['String']['output']>;
  bankAccountNumber?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  canceledCommission?: Maybe<Scalars['Mixed']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  globalCustomerId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pendingCommission?: Maybe<Scalars['Mixed']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  recruitedNumber?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalCommission?: Maybe<Scalars['Mixed']['output']>;
  totalSales?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  withdrawalApprovedCommission?: Maybe<Scalars['Mixed']['output']>;
  withdrawalCanceledCommission?: Maybe<Scalars['Mixed']['output']>;
  withdrawalPendingCommission?: Maybe<Scalars['Mixed']['output']>;
};

export type AffiliateConfig = {
  __typename?: 'AffiliateConfig';
  affiliateLevelConfigs?: Maybe<Array<Maybe<AffiliateLevelItemConfig>>>;
  affiliateRequestConfig?: Maybe<AffiliateRequestConfig>;
  allowAutomaticApprovedShopAffiliateRequest?: Maybe<Scalars['Boolean']['output']>;
  allowDisplayReferralInformation?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  durationOfDay?: Maybe<Scalars['Int']['output']>;
  durationType?: Maybe<AffiliateConfigDurationType>;
  fee?: Maybe<Scalars['Float']['output']>;
  fixedConfig?: Maybe<FixedConfig>;
  id?: Maybe<Scalars['String']['output']>;
  introduction?: Maybe<Scalars['String']['output']>;
  mbBankAccountName?: Maybe<Scalars['String']['output']>;
  mbBankAccountNumber?: Maybe<Scalars['String']['output']>;
  memberId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  policiesAllowed?: Maybe<ShopAffiliateConfigPoliciesAllowed>;
  requiredReferralCodeShopAffiliateRequest?: Maybe<Scalars['Boolean']['output']>;
  shopAffiliateWalletConfig?: Maybe<ShopAffiliateConfigShopAffiliateWalletConfig>;
  shouldApplyReferralCommissionPolicy?: Maybe<Scalars['Boolean']['output']>;
  shouldCollectFee?: Maybe<Scalars['Boolean']['output']>;
  shouldPayByMbBank?: Maybe<Scalars['Boolean']['output']>;
  terms?: Maybe<Scalars['String']['output']>;
  treeType?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  wordsDisplayed?: Maybe<ShopAffiliateConfigWordsDisplayed>;
};

export enum AffiliateConfigDurationType {
  LIMITED = 'LIMITED',
  UNLIMITED = 'UNLIMITED'
}

export type AffiliateConfigPageData = {
  __typename?: 'AffiliateConfigPageData';
  data?: Maybe<Array<Maybe<AffiliateConfig>>>;
  pagination?: Maybe<Pagination>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum AffiliateConfigTreeType {
  FIXED = 'FIXED',
  UNLIMITED = 'UNLIMITED'
}

export type AffiliateLevelItemConfig = {
  __typename?: 'AffiliateLevelItemConfig';
  condition?: Maybe<Scalars['Mixed']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type AffiliateRequestConfig = {
  __typename?: 'AffiliateRequestConfig';
  address?: Maybe<BaseField>;
  allowAutomaticApprovedShopAffiliateRequest?: Maybe<Scalars['Boolean']['output']>;
  allowDisplayReferralInformation?: Maybe<Scalars['Boolean']['output']>;
  bank?: Maybe<BaseField>;
  citizenId?: Maybe<BaseField>;
  email?: Maybe<BaseField>;
  referralCode?: Maybe<BaseField>;
  taxCode?: Maybe<BaseField>;
};

export type Bank = {
  __typename?: 'Bank';
  active?: Maybe<Scalars['Boolean']['output']>;
  bankBin?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  bankNumber?: Maybe<Scalars['String']['output']>;
  branch?: Maybe<Scalars['String']['output']>;
  mbTerminalId?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  ownerName?: Maybe<Scalars['String']['output']>;
  qrCode?: Maybe<Scalars['String']['output']>;
};

export type BaseField = {
  __typename?: 'BaseField';
  isDisplay?: Maybe<Scalars['Boolean']['output']>;
  isRequire?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Branch = {
  __typename?: 'Branch';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum BulkyTier {
  TIER_1 = 'TIER_1',
  TIER_2 = 'TIER_2',
  TIER_3 = 'TIER_3',
  TIER_4 = 'TIER_4',
  TIER_MAX = 'TIER_MAX'
}

export type Category = {
  __typename?: 'Category';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  display?: Maybe<CategoryDisplay>;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isPrimary?: Maybe<Scalars['Boolean']['output']>;
  memberId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  productIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  products?: Maybe<Array<Maybe<Product>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryDisplay = {
  __typename?: 'CategoryDisplay';
  APP?: Maybe<CategoryDisplayPlatform>;
  WEB?: Maybe<CategoryDisplayPlatform>;
  ZALO_MINI_APP?: Maybe<CategoryDisplayPlatform>;
};

export type CategoryDisplayPlatform = {
  __typename?: 'CategoryDisplayPlatform';
  accountTypes?: Maybe<Array<Maybe<EAccountTypeDisplayCategory>>>;
  isActivated?: Maybe<Scalars['Boolean']['output']>;
};

export enum ConditionType {
  ALL = 'ALL',
  ONE_OF = 'ONE_OF'
}

export type CreateDraftOrderInput = {
  affiliateCode?: InputMaybe<Scalars['String']['input']>;
  buyerAddress?: InputMaybe<Scalars['String']['input']>;
  buyerAddressNote?: InputMaybe<Scalars['String']['input']>;
  buyerDistrictId?: InputMaybe<Scalars['String']['input']>;
  buyerFullAddress?: InputMaybe<Scalars['String']['input']>;
  buyerName?: InputMaybe<Scalars['String']['input']>;
  buyerPhone?: InputMaybe<Scalars['String']['input']>;
  buyerProvinceId?: InputMaybe<Scalars['String']['input']>;
  buyerWardId?: InputMaybe<Scalars['String']['input']>;
  customerShipMethod?: InputMaybe<EShipMethod>;
  customerShipRequestIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  customerShipServiceId?: InputMaybe<Scalars['String']['input']>;
  customerShipServiceName?: InputMaybe<Scalars['String']['input']>;
  customerVoucherId?: InputMaybe<Scalars['ID']['input']>;
  failDeepLink?: InputMaybe<Scalars['String']['input']>;
  failRedirectUrl?: InputMaybe<Scalars['String']['input']>;
  haveIssueInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  items: Array<InputMaybe<OrderItemInput>>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  offerGroupIndex?: InputMaybe<Scalars['Int']['input']>;
  offerItemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paymentMethod: Scalars['String']['input'];
  pickupMethod: Scalars['String']['input'];
  pickupTime?: InputMaybe<Scalars['DateTime']['input']>;
  platform?: InputMaybe<EPlatform>;
  promotionApplies?: InputMaybe<Array<InputMaybe<PromotionApplyInput>>>;
  promotionCode?: InputMaybe<Scalars['String']['input']>;
  promotionId?: InputMaybe<Scalars['String']['input']>;
  receiverAddress?: InputMaybe<Scalars['String']['input']>;
  receiverAddressNote?: InputMaybe<Scalars['String']['input']>;
  receiverDistrict?: InputMaybe<Scalars['String']['input']>;
  receiverDistrictId?: InputMaybe<Scalars['String']['input']>;
  receiverFullAddress?: InputMaybe<Scalars['String']['input']>;
  receiverId?: InputMaybe<Scalars['String']['input']>;
  receiverName?: InputMaybe<Scalars['String']['input']>;
  receiverPhone?: InputMaybe<Scalars['String']['input']>;
  receiverProvince?: InputMaybe<Scalars['String']['input']>;
  receiverProvinceId?: InputMaybe<Scalars['String']['input']>;
  receiverWard?: InputMaybe<Scalars['String']['input']>;
  receiverWardId?: InputMaybe<Scalars['String']['input']>;
  referralCode?: InputMaybe<Scalars['String']['input']>;
  shopBranchId: Scalars['ID']['input'];
  shopShipMethod?: InputMaybe<EShipMethod>;
  shopShipRequestIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shopShipServiceId?: InputMaybe<Scalars['String']['input']>;
  successDeepLink?: InputMaybe<Scalars['String']['input']>;
  successRedirectUrl?: InputMaybe<Scalars['String']['input']>;
  tableCode?: InputMaybe<Scalars['String']['input']>;
  tableId?: InputMaybe<Scalars['ID']['input']>;
  unixTime?: InputMaybe<Scalars['String']['input']>;
  useRewardPoint?: InputMaybe<Scalars['Boolean']['input']>;
  zaloOrderId?: InputMaybe<Scalars['String']['input']>;
};

export type Customer = {
  __typename?: 'Customer';
  address?: Maybe<Scalars['String']['output']>;
  addressNote?: Maybe<Scalars['String']['output']>;
  affiliateId?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  bankAccountName?: Maybe<Scalars['String']['output']>;
  bankAccountNumber?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['DateTime']['output']>;
  citizenId?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentDebt?: Maybe<Scalars['Mixed']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  followerId?: Maybe<Scalars['String']['output']>;
  fullAddress?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  globalCustomerId?: Maybe<Scalars['String']['output']>;
  hasPassword?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  idCard?: Maybe<Scalars['String']['output']>;
  isAgency?: Maybe<Scalars['Boolean']['output']>;
  isAgencyAt?: Maybe<Scalars['DateTime']['output']>;
  isDistributor?: Maybe<Scalars['Boolean']['output']>;
  isDistributorAt?: Maybe<Scalars['DateTime']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  memberId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  psid?: Maybe<Scalars['Mixed']['output']>;
  shopAffiliateId?: Maybe<Scalars['String']['output']>;
  totalDebtPaid?: Maybe<Scalars['Mixed']['output']>;
  totalOrderAmountCompleted?: Maybe<Scalars['Mixed']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  zaloFollower?: Maybe<Scalars['Mixed']['output']>;
};

export type DeliveryInfo = {
  __typename?: 'DeliveryInfo';
  cancelTime?: Maybe<Scalars['String']['output']>;
  codAmountEvaluation?: Maybe<Scalars['Float']['output']>;
  createTime?: Maybe<Scalars['String']['output']>;
  customerCode?: Maybe<Scalars['String']['output']>;
  customerNote?: Maybe<Scalars['String']['output']>;
  deliveryCode?: Maybe<Scalars['String']['output']>;
  deliveryDateEvaluation?: Maybe<Scalars['String']['output']>;
  deliveryIcon?: Maybe<Scalars['String']['output']>;
  deliveryName?: Maybe<Scalars['String']['output']>;
  deliveryTime?: Maybe<Scalars['String']['output']>;
  deliveryTimes?: Maybe<Scalars['Int']['output']>;
  heightEvaluation?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  isPackageViewable?: Maybe<Scalars['Boolean']['output']>;
  isReceiverPayFreight?: Maybe<Scalars['Boolean']['output']>;
  itemCode?: Maybe<Scalars['String']['output']>;
  lastUpdateTime?: Maybe<Scalars['String']['output']>;
  lengthEvaluation?: Maybe<Scalars['Int']['output']>;
  orderAmountEvaluation?: Maybe<Scalars['Float']['output']>;
  orderCode?: Maybe<Scalars['String']['output']>;
  orderId?: Maybe<Scalars['String']['output']>;
  packageContent?: Maybe<Scalars['String']['output']>;
  partnerDiscount?: Maybe<Scalars['Float']['output']>;
  partnerFee?: Maybe<Scalars['Float']['output']>;
  pickupType?: Maybe<Scalars['Int']['output']>;
  promotionCode?: Maybe<Scalars['String']['output']>;
  receiverAddress?: Maybe<Scalars['String']['output']>;
  receiverAddressType?: Maybe<Scalars['Int']['output']>;
  receiverDistrictId?: Maybe<Scalars['String']['output']>;
  receiverFullname?: Maybe<Scalars['String']['output']>;
  receiverProvinceId?: Maybe<Scalars['String']['output']>;
  receiverTel?: Maybe<Scalars['String']['output']>;
  receiverWardId?: Maybe<Scalars['String']['output']>;
  senderAddress?: Maybe<Scalars['String']['output']>;
  senderDistrictId?: Maybe<Scalars['String']['output']>;
  senderFullname?: Maybe<Scalars['String']['output']>;
  senderProvinceId?: Maybe<Scalars['String']['output']>;
  senderTel?: Maybe<Scalars['String']['output']>;
  senderWardId?: Maybe<Scalars['String']['output']>;
  serviceIcon?: Maybe<Scalars['String']['output']>;
  serviceName?: Maybe<Scalars['String']['output']>;
  sharedLink?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  statusText?: Maybe<Scalars['String']['output']>;
  useBaoPhat?: Maybe<Scalars['Boolean']['output']>;
  useHoaDon?: Maybe<Scalars['Boolean']['output']>;
  vendorId?: Maybe<Scalars['String']['output']>;
  weightEvaluation?: Maybe<Scalars['Int']['output']>;
  widthEvaluation?: Maybe<Scalars['Int']['output']>;
};

export type DraftOrderData = {
  __typename?: 'DraftOrderData';
  invalid?: Maybe<Scalars['Boolean']['output']>;
  invalidReason?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Order>;
};

export enum EAccountTypeDisplayCategory {
  ALL_SHOP_AFFILIATE = 'ALL_SHOP_AFFILIATE',
  ANONYMOUS = 'ANONYMOUS',
  CUSTOMER_NOT_INCLUDE_SHOP_AFFILIATE = 'CUSTOMER_NOT_INCLUDE_SHOP_AFFILIATE'
}

export enum EDiscountUnit {
  PERCENT = 'PERCENT',
  VND = 'VND'
}

export enum EFeatureGroup {
  CUSTOMERS = 'CUSTOMERS',
  DELIVERY = 'DELIVERY',
  INVOICE = 'INVOICE',
  MINIGAME = 'MINIGAME',
  ORDER = 'ORDER',
  PAYMENT = 'PAYMENT',
  POS = 'POS',
  REPORTS = 'REPORTS',
  SERVICE_CONTRACTS = 'SERVICE_CONTRACTS',
  SHOP_AFFILIATES = 'SHOP_AFFILIATES',
  SHOP_VOCHERS = 'SHOP_VOCHERS',
  STAFFS = 'STAFFS',
  SUPPLIERS = 'SUPPLIERS',
  TABLE = 'TABLE',
  WAREHOUSES = 'WAREHOUSES'
}

export enum EInvoiceTaxRateCode {
  VAT_0 = 'VAT_0',
  VAT_5 = 'VAT_5',
  VAT_8 = 'VAT_8',
  VAT_10 = 'VAT_10',
  VAT_NONE = 'VAT_NONE',
  VAT_NOT_DECLARED = 'VAT_NOT_DECLARED'
}

export enum ELegalEntityType {
  COMPANY = 'COMPANY',
  COOPERATIVE = 'COOPERATIVE',
  HOUSEHOLD_BUSINESS = 'HOUSEHOLD_BUSINESS',
  INDIVIDUAL = 'INDIVIDUAL'
}

export enum EOrderInvoiceType {
  ORDER_PRODUCT = 'ORDER_PRODUCT',
  ORDER_SERVICE_CONTRACT = 'ORDER_SERVICE_CONTRACT'
}

export type EOrderStatus = {
  __typename?: 'EOrderStatus';
  code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum EOrdererType {
  CUSTOMER = 'CUSTOMER',
  SHOP = 'SHOP',
  STAFF = 'STAFF'
}

export enum EPaymentMethod {
  BANK_TRANSFER = 'BANK_TRANSFER',
  BAOKIM = 'BAOKIM',
  COD = 'COD',
  DEBT = 'DEBT',
  MBBANK = 'MBBANK',
  MOMO = 'MOMO',
  NAPAS = 'NAPAS',
  NEXT_PAY_EDC_CARD = 'NEXT_PAY_EDC_CARD',
  NEXT_PAY_EDC_INSTALLMENT_CARD = 'NEXT_PAY_EDC_INSTALLMENT_CARD',
  NEXT_PAY_EDC_QR = 'NEXT_PAY_EDC_QR',
  NEXT_PAY_ONLINE_INSTALLMENT_LINK = 'NEXT_PAY_ONLINE_INSTALLMENT_LINK',
  NEXT_PAY_ONLINE_LINK = 'NEXT_PAY_ONLINE_LINK',
  NEXT_PAY_ONLINE_QR = 'NEXT_PAY_ONLINE_QR',
  NONE = 'NONE',
  ONLINE_QR = 'ONLINE_QR',
  PAYON = 'PAYON',
  PAYPAL = 'PAYPAL',
  SHOPPING_WALLET = 'SHOPPING_WALLET',
  VNPAY = 'VNPAY',
  ZALO_PAY = 'ZALO_PAY'
}

export enum EPaymentStatus {
  DEBT_RECOGNIZED = 'DEBT_RECOGNIZED',
  FAILED = 'FAILED',
  PARTIALLY = 'PARTIALLY',
  PENDING = 'PENDING',
  SUCCEED = 'SUCCEED'
}

export enum EPermissionType {
  SHOP = 'SHOP',
  SHOP_BRANCH = 'SHOP_BRANCH'
}

export enum EPickupMethod {
  DELIVERY = 'DELIVERY',
  IN_STORE_PURCHASE = 'IN_STORE_PURCHASE',
  STORE = 'STORE'
}

export enum EPlatform {
  APP = 'APP',
  WEB = 'WEB',
  WEB_MAIN = 'WEB_MAIN',
  ZALO_MINI_APP = 'ZALO_MINI_APP'
}

export enum EPolicy {
  DIRECT_SUBORDINATES_PRODUCT_SALES_BONUS_POLICY = 'DIRECT_SUBORDINATES_PRODUCT_SALES_BONUS_POLICY',
  INDIVIDUAL_PRODUCT_SALES_BONUS_POLICY = 'INDIVIDUAL_PRODUCT_SALES_BONUS_POLICY',
  PRODUCT_COMMISSION_POLICY = 'PRODUCT_COMMISSION_POLICY',
  PRODUCT_SALES_BONUS_POLICY = 'PRODUCT_SALES_BONUS_POLICY'
}

export enum EProductStatus {
  GIFT_ONLY = 'GIFT_ONLY',
  OUT_OF_STOCK = 'OUT_OF_STOCK',
  PAUSED = 'PAUSED',
  SELLING = 'SELLING'
}

export enum EReceivePromotionThrough {
  AFFILIATE_VOUCHER = 'AFFILIATE_VOUCHER',
  DEFAULT = 'DEFAULT',
  MINIGAME = 'MINIGAME',
  TASK = 'TASK'
}

export enum EReceiveShopVoucherThrough {
  AFFILIATE_VOUCHER = 'AFFILIATE_VOUCHER',
  DEFAULT = 'DEFAULT',
  MINIGAME = 'MINIGAME',
  TASK = 'TASK'
}

export enum EShipMethod {
  AHAMOVE = 'AHAMOVE',
  DRIVER = 'DRIVER',
  GO_SHIP = 'GO_SHIP',
  GO_SHIP_ON_DEMAND = 'GO_SHIP_ON_DEMAND',
  GRAB_EXPRESS = 'GRAB_EXPRESS',
  NONE = 'NONE',
  POST = 'POST',
  VNPOST = 'VNPOST'
}

export enum EShopFeature {
  PRE_BOOKING = 'PRE_BOOKING',
  PRODUCT = 'PRODUCT',
  SERVICE_CONTRACT = 'SERVICE_CONTRACT',
  WAREHOUSE = 'WAREHOUSE'
}

export enum EShopType {
  DISTRIBUTOR = 'DISTRIBUTOR',
  ELECTRONICS = 'ELECTRONICS',
  ENTERPRISE = 'ENTERPRISE',
  FAST_MOVING_CONSUMER_GOODS = 'FAST_MOVING_CONSUMER_GOODS',
  FOOD_AND_BEVERAGE_DEPARTMENT = 'FOOD_AND_BEVERAGE_DEPARTMENT',
  OTHER = 'OTHER',
  SERVICE = 'SERVICE'
}

export enum EShopVoucherApplyForOrder {
  PRODUCT = 'PRODUCT',
  SERVICE_CONTRACT_TYPE = 'SERVICE_CONTRACT_TYPE'
}

export enum EShopVoucherType {
  DISCOUNT_BILL = 'DISCOUNT_BILL',
  DISCOUNT_ITEM = 'DISCOUNT_ITEM'
}

export enum EStaffPermissionScope {
  APPROVED_ORDER = 'APPROVED_ORDER',
  CANCEL_ORDER = 'CANCEL_ORDER',
  COMPLETE_DISBURSEMENT_PERIOD = 'COMPLETE_DISBURSEMENT_PERIOD',
  CONFIRM_ORDER = 'CONFIRM_ORDER',
  CREATE_DISBURSEMENT_PERIOD = 'CREATE_DISBURSEMENT_PERIOD',
  CREATE_EXPORT_WAREHOUSE_INVENTORY_VOUCHER = 'CREATE_EXPORT_WAREHOUSE_INVENTORY_VOUCHER',
  CREATE_IMPORT_WAREHOUSE_INVENTORY_VOUCHER = 'CREATE_IMPORT_WAREHOUSE_INVENTORY_VOUCHER',
  CREATE_ORDER = 'CREATE_ORDER',
  CREATE_PRE_BOOING = 'CREATE_PRE_BOOING',
  CREATE_PRODUCT = 'CREATE_PRODUCT',
  CREATE_SERVICE_CONTRACT = 'CREATE_SERVICE_CONTRACT',
  CREATE_SERVICE_CONTRACT_TYPE_SESSION_LOG = 'CREATE_SERVICE_CONTRACT_TYPE_SESSION_LOG',
  CREATE_SHOP_AFFILIATE_REQUEST = 'CREATE_SHOP_AFFILIATE_REQUEST',
  CREATE_WAREHOUSE_PRODUCT_AUDIT = 'CREATE_WAREHOUSE_PRODUCT_AUDIT',
  DELETE_DISBURSEMENT_PERIOD = 'DELETE_DISBURSEMENT_PERIOD',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  DELETE_SHOP_AFFILIATE_REQUEST = 'DELETE_SHOP_AFFILIATE_REQUEST',
  HANDLE_DISBURSEMENT_REQUEST = 'HANDLE_DISBURSEMENT_REQUEST',
  HANDLE_PRE_BOOKING = 'HANDLE_PRE_BOOKING',
  HANDLE_SERVICE_CONTRACT = 'HANDLE_SERVICE_CONTRACT',
  HANDLE_SHOP_AFFILIATE_REQUEST = 'HANDLE_SHOP_AFFILIATE_REQUEST',
  MANAGE_PRODUCT_CATEGORY = 'MANAGE_PRODUCT_CATEGORY',
  MANAGE_PRODUCT_TAB = 'MANAGE_PRODUCT_TAB',
  PACKAGED_ORDER = 'PACKAGED_ORDER',
  PAYMENT_CONFIRM_ORDER = 'PAYMENT_CONFIRM_ORDER',
  PAYMENT_CONFIRM_SERVICE_CONTRACT = 'PAYMENT_CONFIRM_SERVICE_CONTRACT',
  PAYMENT_CONFIRM_SHOP_AFFILIATE_REQUEST = 'PAYMENT_CONFIRM_SHOP_AFFILIATE_REQUEST',
  SORT_ORDER = 'SORT_ORDER',
  TRANSFER_DELIVERY_ORDER = 'TRANSFER_DELIVERY_ORDER',
  TRANSFER_DELIVERY_ORDER_FAILED = 'TRANSFER_DELIVERY_ORDER_FAILED',
  TRANSFER_DELIVERY_ORDER_SUCCESS = 'TRANSFER_DELIVERY_ORDER_SUCCESS',
  UPDATE_DISBURSEMENT_PERIOD = 'UPDATE_DISBURSEMENT_PERIOD',
  UPDATE_ORDER = 'UPDATE_ORDER',
  UPDATE_PASSWORD = 'UPDATE_PASSWORD',
  UPDATE_PRODUCT = 'UPDATE_PRODUCT',
  VIEW_CUSTOMER = 'VIEW_CUSTOMER',
  VIEW_DISBURSEMENT_PERIOD = 'VIEW_DISBURSEMENT_PERIOD',
  VIEW_HISTORY_ORDERS = 'VIEW_HISTORY_ORDERS',
  VIEW_HISTORY_REWARD_POINTS = 'VIEW_HISTORY_REWARD_POINTS',
  VIEW_HISTORY_SHOP_VOUCHERS = 'VIEW_HISTORY_SHOP_VOUCHERS',
  VIEW_INCOME_AND_EXPENDITURE_CASH_FLOW = 'VIEW_INCOME_AND_EXPENDITURE_CASH_FLOW',
  VIEW_ORDER = 'VIEW_ORDER',
  VIEW_POLICY_STATISTIC = 'VIEW_POLICY_STATISTIC',
  VIEW_PRE_BOOING = 'VIEW_PRE_BOOING',
  VIEW_PRODUCT = 'VIEW_PRODUCT',
  VIEW_SERVICE_CONTRACT = 'VIEW_SERVICE_CONTRACT',
  VIEW_SERVICE_CONTRACT_TYPE_SESSION_LOG = 'VIEW_SERVICE_CONTRACT_TYPE_SESSION_LOG',
  VIEW_SHOP_AFFILIATE = 'VIEW_SHOP_AFFILIATE',
  VIEW_SHOP_AFFILIATE_REQUEST = 'VIEW_SHOP_AFFILIATE_REQUEST',
  VIEW_WAREHOUSE_INVENTORY = 'VIEW_WAREHOUSE_INVENTORY',
  VIEW_WAREHOUSE_INVENTORY_VOUCHER = 'VIEW_WAREHOUSE_INVENTORY_VOUCHER',
  VIEW_WAREHOUSE_PRODUCT_AUDIT = 'VIEW_WAREHOUSE_PRODUCT_AUDIT'
}

export enum EStaffPermissionScopeGroup {
  CUSTOMER_MANAGEMENT = 'CUSTOMER_MANAGEMENT',
  DISBURSEMENT_PERIODS_MANAGEMENT = 'DISBURSEMENT_PERIODS_MANAGEMENT',
  ORDER_MANAGEMENT = 'ORDER_MANAGEMENT',
  PRE_BOOKING_MANAGEMENT = 'PRE_BOOKING_MANAGEMENT',
  PRODUCT_MANAGEMENT = 'PRODUCT_MANAGEMENT',
  SERVICE_CONTRACT_MANAGEMENT = 'SERVICE_CONTRACT_MANAGEMENT',
  SERVICE_CONTRACT_TYPE_SESSION_LOG_MANAGEMENT = 'SERVICE_CONTRACT_TYPE_SESSION_LOG_MANAGEMENT',
  SHOP_AFFILIATE_MANAGEMENT = 'SHOP_AFFILIATE_MANAGEMENT',
  STATISTICS_AND_REPORTING_MANAGEMENT = 'STATISTICS_AND_REPORTING_MANAGEMENT',
  WAREHOUSE_MANAGEMENT = 'WAREHOUSE_MANAGEMENT'
}

export enum ETableStatus {
  EMPTY = 'EMPTY',
  NEED_CLEANING = 'NEED_CLEANING',
  RESERVED = 'RESERVED',
  USING = 'USING'
}

export enum EUnitApplyType {
  PRODUCT = 'PRODUCT',
  SERVICE_CONTRACT_TYPE = 'SERVICE_CONTRACT_TYPE'
}

export enum EWalletType {
  SHOPPING_WALLET = 'SHOPPING_WALLET',
  SHOP_AFFILIATE_WALLET = 'SHOP_AFFILIATE_WALLET'
}

export type FixedConfig = {
  __typename?: 'FixedConfig';
  tierConfigs?: Maybe<Array<Maybe<TierConfig>>>;
  tierCount?: Maybe<Scalars['Int']['output']>;
};

export type LoginStaffData = {
  __typename?: 'LoginStaffData';
  staff?: Maybe<Staff>;
  token?: Maybe<Scalars['String']['output']>;
};

export type Member = {
  __typename?: 'Member';
  activated?: Maybe<Scalars['Boolean']['output']>;
  activedAt?: Maybe<Scalars['DateTime']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  allowSale?: Maybe<Scalars['Boolean']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['DateTime']['output']>;
  branch?: Maybe<Branch>;
  branchId?: Maybe<Scalars['ID']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  districtId?: Maybe<Scalars['String']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  identityCardNumber?: Maybe<Scalars['String']['output']>;
  legalEntityType?: Maybe<ELegalEntityType>;
  name?: Maybe<Scalars['String']['output']>;
  ordersCount?: Maybe<Scalars['Int']['output']>;
  parentMemberId?: Maybe<Scalars['ID']['output']>;
  parents?: Maybe<Array<Maybe<Member>>>;
  phone?: Maybe<Scalars['String']['output']>;
  phoneVerified?: Maybe<Scalars['Boolean']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  provinceId?: Maybe<Scalars['String']['output']>;
  shopCover?: Maybe<Scalars['String']['output']>;
  shopLogo?: Maybe<Scalars['String']['output']>;
  shopName?: Maybe<Scalars['String']['output']>;
  shopType?: Maybe<EShopType>;
  shopUrl?: Maybe<Scalars['String']['output']>;
  taxCode?: Maybe<Scalars['String']['output']>;
  toMemberOrdersCount?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  ward?: Maybe<Scalars['String']['output']>;
  wardId?: Maybe<Scalars['String']['output']>;
};

export type MemberLoginData = {
  __typename?: 'MemberLoginData';
  member?: Maybe<Member>;
  token?: Maybe<Scalars['String']['output']>;
};

export type MemberPublic = {
  __typename?: 'MemberPublic';
  activated?: Maybe<Scalars['Boolean']['output']>;
  activedAt?: Maybe<Scalars['DateTime']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  affiliateConfig?: Maybe<AffiliateConfig>;
  affiliateConfigId?: Maybe<Scalars['String']['output']>;
  allowSale?: Maybe<Scalars['Boolean']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  category?: Maybe<ShopCategory>;
  categoryId?: Maybe<Scalars['ID']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customerId?: Maybe<Scalars['ID']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  districtId?: Maybe<Scalars['String']['output']>;
  fanpageId?: Maybe<Scalars['String']['output']>;
  fanpageImage?: Maybe<Scalars['String']['output']>;
  fanpageName?: Maybe<Scalars['String']['output']>;
  featureAllows?: Maybe<Array<Maybe<EShopFeature>>>;
  gender?: Maybe<Scalars['String']['output']>;
  hasDirectSubordinatesProductSalesBonusPolicy?: Maybe<Scalars['Boolean']['output']>;
  hasIndividualProductSalesBonusPolicy?: Maybe<Scalars['Boolean']['output']>;
  hasMinigame?: Maybe<Scalars['Boolean']['output']>;
  hasProductCommissionPolicy?: Maybe<Scalars['Boolean']['output']>;
  hasProductSalesBonusPolicy?: Maybe<Scalars['Boolean']['output']>;
  hasPromotion?: Maybe<Scalars['Boolean']['output']>;
  hasShopAffiliateConfig?: Maybe<Scalars['Boolean']['output']>;
  hasShopVoucher?: Maybe<Scalars['Boolean']['output']>;
  hasShopVoucherSharingPolicy?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  locked?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentMemberId?: Maybe<Scalars['ID']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  provinceId?: Maybe<Scalars['String']['output']>;
  shopCover?: Maybe<Scalars['String']['output']>;
  shopLogo?: Maybe<Scalars['String']['output']>;
  shopName?: Maybe<Scalars['String']['output']>;
  shopType?: Maybe<EShopType>;
  shopUrl?: Maybe<Scalars['String']['output']>;
  taxCode?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  ward?: Maybe<Scalars['String']['output']>;
  wardId?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  generateDraftOrder?: Maybe<DraftOrderData>;
  generateOrder?: Maybe<Order>;
  generateUploadUrl?: Maybe<S3Url>;
  loginMemberByPassword?: Maybe<MemberLoginData>;
  loginStaff?: Maybe<LoginStaffData>;
  registerMember?: Maybe<Member>;
};


export type MutationgenerateDraftOrderArgs = {
  data: CreateDraftOrderInput;
};


export type MutationgenerateOrderArgs = {
  data: CreateDraftOrderInput;
};


export type MutationgenerateUploadUrlArgs = {
  contentType: Scalars['String']['input'];
};


export type MutationloginMemberByPasswordArgs = {
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceToken?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationloginStaffArgs = {
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceToken?: InputMaybe<Scalars['String']['input']>;
  memberCode: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationregisterMemberArgs = {
  data: RegisterMemberInput;
};

export type OfferItem = {
  __typename?: 'OfferItem';
  note?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['ID']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
};

export type Order = {
  __typename?: 'Order';
  addressDeliveryId?: Maybe<Scalars['ID']['output']>;
  addressStorehouseId?: Maybe<Scalars['ID']['output']>;
  ahamoveTrackingLink?: Maybe<Scalars['String']['output']>;
  allowUserCancel?: Maybe<Scalars['Boolean']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  buyer?: Maybe<Customer>;
  buyerAddress?: Maybe<Scalars['String']['output']>;
  buyerAddressNote?: Maybe<Scalars['String']['output']>;
  buyerBonusPoint?: Maybe<Scalars['Float']['output']>;
  buyerDistrict?: Maybe<Scalars['String']['output']>;
  buyerDistrictId?: Maybe<Scalars['String']['output']>;
  buyerFullAddress?: Maybe<Scalars['String']['output']>;
  buyerId?: Maybe<Scalars['ID']['output']>;
  buyerName?: Maybe<Scalars['String']['output']>;
  buyerPhone?: Maybe<Scalars['String']['output']>;
  buyerProvince?: Maybe<Scalars['String']['output']>;
  buyerProvinceId?: Maybe<Scalars['String']['output']>;
  buyerWard?: Maybe<Scalars['String']['output']>;
  buyerWardId?: Maybe<Scalars['String']['output']>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  collaboratorId?: Maybe<Scalars['ID']['output']>;
  commented?: Maybe<Scalars['Boolean']['output']>;
  confirmNote?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customerShipDeliveryIcon?: Maybe<Scalars['String']['output']>;
  customerShipDeliveryName?: Maybe<Scalars['String']['output']>;
  customerShipMethod?: Maybe<EShipMethod>;
  customerShipServiceIcon?: Maybe<Scalars['String']['output']>;
  customerShipServiceId?: Maybe<Scalars['String']['output']>;
  customerShipServiceName?: Maybe<Scalars['String']['output']>;
  customerVoucherId?: Maybe<Scalars['ID']['output']>;
  deliveringMember?: Maybe<Member>;
  deliveryInfo?: Maybe<DeliveryInfo>;
  discount?: Maybe<Scalars['Float']['output']>;
  discountDetail?: Maybe<Scalars['String']['output']>;
  discountLogs?: Maybe<Array<Maybe<Scalars['Mixed']['output']>>>;
  discountPoint?: Maybe<Scalars['Int']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  driverLicense?: Maybe<Scalars['String']['output']>;
  driverName?: Maybe<Scalars['String']['output']>;
  driverPhone?: Maybe<Scalars['String']['output']>;
  failRedirectUrl?: Maybe<Scalars['String']['output']>;
  fromMember?: Maybe<Member>;
  fromMemberId?: Maybe<Scalars['ID']['output']>;
  hasUserConfirmTransfer?: Maybe<Scalars['Boolean']['output']>;
  hasValueAddedTax?: Maybe<Scalars['Boolean']['output']>;
  haveIssueInvoice?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isPrimary?: Maybe<Scalars['Boolean']['output']>;
  isUrbanDelivery?: Maybe<Scalars['Boolean']['output']>;
  itemCount?: Maybe<Scalars['Int']['output']>;
  itemIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  itemText?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<OrderItem>>>;
  latitude?: Maybe<Scalars['Float']['output']>;
  logs?: Maybe<Array<Maybe<OrderLog>>>;
  longitude?: Maybe<Scalars['Float']['output']>;
  maxUseRewardPoint?: Maybe<Scalars['Int']['output']>;
  mbQrCode?: Maybe<Scalars['String']['output']>;
  mustTransfer?: Maybe<Scalars['Boolean']['output']>;
  napasRedirectUrl?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  orderPromotions?: Maybe<Array<Maybe<OrderPromotion>>>;
  orderType?: Maybe<Scalars['String']['output']>;
  orderTypeText?: Maybe<Scalars['String']['output']>;
  ordererStaff?: Maybe<Staff>;
  ordererStaffId?: Maybe<Scalars['ID']['output']>;
  ordererType?: Maybe<EOrdererType>;
  originSubTotal?: Maybe<Scalars['Float']['output']>;
  parentOrderCode?: Maybe<Scalars['String']['output']>;
  parentOrderId?: Maybe<Scalars['String']['output']>;
  paymentConfirmNote?: Maybe<Scalars['String']['output']>;
  paymentConfirmTime?: Maybe<Scalars['DateTime']['output']>;
  paymentFilledAmount?: Maybe<Scalars['Float']['output']>;
  paymentLogs?: Maybe<Array<Maybe<Scalars['Mixed']['output']>>>;
  paymentMeta?: Maybe<Scalars['Mixed']['output']>;
  paymentMetas?: Maybe<Array<Maybe<Scalars['Mixed']['output']>>>;
  paymentMethod?: Maybe<EPaymentMethod>;
  paymentMethodText?: Maybe<Scalars['String']['output']>;
  paymentStatus?: Maybe<Scalars['String']['output']>;
  pickupMethod?: Maybe<EPickupMethod>;
  pickupTime?: Maybe<Scalars['DateTime']['output']>;
  pin?: Maybe<Scalars['Boolean']['output']>;
  platform?: Maybe<EPlatform>;
  productAffiliateLevelDiscount?: Maybe<Scalars['Float']['output']>;
  productCommissionCost?: Maybe<Scalars['Mixed']['output']>;
  productPricePolicyDiscount?: Maybe<Scalars['Float']['output']>;
  promotionCode?: Maybe<Scalars['String']['output']>;
  promotions?: Maybe<Array<Maybe<Promotion>>>;
  receiverAddress?: Maybe<Scalars['String']['output']>;
  receiverAddressNote?: Maybe<Scalars['String']['output']>;
  receiverDistrict?: Maybe<Scalars['String']['output']>;
  receiverDistrictId?: Maybe<Scalars['String']['output']>;
  receiverFullAddress?: Maybe<Scalars['String']['output']>;
  receiverId?: Maybe<Scalars['String']['output']>;
  receiverName?: Maybe<Scalars['String']['output']>;
  receiverPhone?: Maybe<Scalars['String']['output']>;
  receiverProvince?: Maybe<Scalars['String']['output']>;
  receiverProvinceId?: Maybe<Scalars['String']['output']>;
  receiverWard?: Maybe<Scalars['String']['output']>;
  receiverWardId?: Maybe<Scalars['String']['output']>;
  referralCode?: Maybe<Scalars['String']['output']>;
  remainRewardPoint?: Maybe<Scalars['Int']['output']>;
  rewardPoint?: Maybe<Scalars['Int']['output']>;
  rewardPointDiscount?: Maybe<Scalars['Float']['output']>;
  seller?: Maybe<Member>;
  sellerBonusPoint?: Maybe<Scalars['Float']['output']>;
  sellerCode?: Maybe<Scalars['String']['output']>;
  sellerId?: Maybe<Scalars['ID']['output']>;
  sellerName?: Maybe<Scalars['String']['output']>;
  shipDistance?: Maybe<Scalars['Float']['output']>;
  shipMethod?: Maybe<EShipMethod>;
  shipMethodText?: Maybe<Scalars['String']['output']>;
  shipServiceId?: Maybe<Scalars['String']['output']>;
  shipfee?: Maybe<Scalars['Float']['output']>;
  shopBranch?: Maybe<ShopBranch>;
  shopBranchAddress?: Maybe<Scalars['String']['output']>;
  shopBranchId?: Maybe<Scalars['String']['output']>;
  shopConfig?: Maybe<ShopConfigPublic>;
  shopNote?: Maybe<Scalars['String']['output']>;
  shopShipFee?: Maybe<Scalars['Float']['output']>;
  shopShipMethod?: Maybe<EShipMethod>;
  shopShipRequestIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  shopShipServiceId?: Maybe<Scalars['String']['output']>;
  shopShipServiceName?: Maybe<Scalars['String']['output']>;
  splitCount?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  statusText?: Maybe<Scalars['String']['output']>;
  subOrders?: Maybe<Array<Maybe<Order>>>;
  subtotal?: Maybe<Scalars['Float']['output']>;
  successRedirectUrl?: Maybe<Scalars['String']['output']>;
  supplierIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  suppliers?: Maybe<Array<Maybe<Supplier>>>;
  table?: Maybe<Table>;
  tableCode?: Maybe<Scalars['String']['output']>;
  tableId?: Maybe<Scalars['ID']['output']>;
  tableName?: Maybe<Scalars['String']['output']>;
  toMember?: Maybe<Member>;
  toMemberId?: Maybe<Scalars['ID']['output']>;
  toMemberNote?: Maybe<Scalars['String']['output']>;
  toppingAmount?: Maybe<Scalars['Float']['output']>;
  totalProfit?: Maybe<Scalars['Mixed']['output']>;
  unixTime?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedByUserId?: Maybe<Scalars['ID']['output']>;
  useRewardPoint?: Maybe<Scalars['Boolean']['output']>;
  valueAddedTaxAmount?: Maybe<Scalars['Float']['output']>;
  voucher?: Maybe<ShopVoucher>;
  voucherDiscount?: Maybe<Scalars['Float']['output']>;
  voucherId?: Maybe<Scalars['ID']['output']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  amount?: Maybe<Scalars['Float']['output']>;
  basePrice?: Maybe<Scalars['Float']['output']>;
  buyerBonusPoint?: Maybe<Scalars['Float']['output']>;
  buyerId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isPrimary?: Maybe<Scalars['Boolean']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  orderId?: Maybe<Scalars['ID']['output']>;
  originAmount?: Maybe<Scalars['Float']['output']>;
  originAmountPerItem?: Maybe<Scalars['Float']['output']>;
  ppAdjAmount?: Maybe<Scalars['Float']['output']>;
  ppAdjType?: Maybe<Scalars['String']['output']>;
  ppAdjUnit?: Maybe<Scalars['String']['output']>;
  ppAdjValue?: Maybe<Scalars['Float']['output']>;
  ppName?: Maybe<Scalars['String']['output']>;
  ppOriginalPrice?: Maybe<Scalars['Float']['output']>;
  priceApply?: Maybe<Scalars['Float']['output']>;
  pricePolicyId?: Maybe<Scalars['ID']['output']>;
  product?: Maybe<Product>;
  productAffiliateLevelDiscount?: Maybe<Scalars['Float']['output']>;
  productAttributeElementAmount?: Maybe<Scalars['Mixed']['output']>;
  productAttributeElements?: Maybe<Array<Maybe<OrderItemProductAttributeElement>>>;
  productId?: Maybe<Scalars['ID']['output']>;
  productName?: Maybe<Scalars['String']['output']>;
  productPricePolicyDiscount?: Maybe<Scalars['Float']['output']>;
  productPricePolicyId?: Maybe<Scalars['ID']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
  rewardPoint?: Maybe<Scalars['Int']['output']>;
  sellerBonusPoint?: Maybe<Scalars['Float']['output']>;
  sellerId?: Maybe<Scalars['ID']['output']>;
  toppings?: Maybe<Array<Maybe<OrderItemTopping>>>;
  totalAmountPerItem?: Maybe<Scalars['Float']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  valueAddedTaxAmount?: Maybe<Scalars['Float']['output']>;
  valueAddedTaxRate?: Maybe<Scalars['Float']['output']>;
  valueAddedTaxRateCode?: Maybe<EInvoiceTaxRateCode>;
  warehouseProduct?: Maybe<WarehouseProduct>;
};

export type OrderItemInput = {
  basePrice?: InputMaybe<Scalars['Mixed']['input']>;
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  note?: InputMaybe<Scalars['String']['input']>;
  pricePolicyId?: InputMaybe<Scalars['ID']['input']>;
  productAttributeElements?: InputMaybe<Array<InputMaybe<OrderItemProductAttributeElementInput>>>;
  productId?: InputMaybe<Scalars['ID']['input']>;
  productImageUrl?: InputMaybe<Scalars['String']['input']>;
  productName?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  supplierId?: InputMaybe<Scalars['ID']['input']>;
  toppings?: InputMaybe<Array<InputMaybe<OrderItemToppingInput>>>;
  unitId?: InputMaybe<Scalars['ID']['input']>;
  valueAddedTaxRateCode?: InputMaybe<EInvoiceTaxRateCode>;
};

export type OrderItemProductAttributeElement = {
  __typename?: 'OrderItemProductAttributeElement';
  productAttributeCode?: Maybe<Scalars['String']['output']>;
  productAttributeElementCode?: Maybe<Scalars['String']['output']>;
  productAttributeElementId?: Maybe<Scalars['ID']['output']>;
  productAttributeElementName?: Maybe<Scalars['String']['output']>;
  productAttributeElementPrice?: Maybe<Scalars['Float']['output']>;
  productAttributeElementUnit?: Maybe<Scalars['String']['output']>;
  productAttributeId?: Maybe<Scalars['ID']['output']>;
  productAttributeName?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
};

export type OrderItemProductAttributeElementInput = {
  productAttributeElementId: Scalars['ID']['input'];
};

export type OrderItemTopping = {
  __typename?: 'OrderItemTopping';
  optionName?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  toppingId?: Maybe<Scalars['ID']['output']>;
  toppingName?: Maybe<Scalars['String']['output']>;
};

export type OrderItemToppingInput = {
  optionName?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  toppingId?: InputMaybe<Scalars['ID']['input']>;
  toppingName?: InputMaybe<Scalars['String']['input']>;
};

export type OrderLog = {
  __typename?: 'OrderLog';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['ID']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['ID']['output']>;
  statusText?: Maybe<Scalars['String']['output']>;
  toMember?: Maybe<Member>;
  toMemberId?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderPromotion = {
  __typename?: 'OrderPromotion';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  order: Order;
  orderId?: Maybe<Scalars['String']['output']>;
  promotion: Promotion;
  promotionId?: Maybe<Scalars['String']['output']>;
  receivedOfferProduct?: Maybe<Array<Maybe<ReceivedOfferProduct>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  limit?: Maybe<Scalars['Mixed']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PricePolicy = {
  __typename?: 'PricePolicy';
  active?: Maybe<Scalars['Boolean']['output']>;
  adjustType?: Maybe<Scalars['String']['output']>;
  adjustUnit?: Maybe<Scalars['String']['output']>;
  adjustValue?: Maybe<Scalars['Float']['output']>;
  /** @deprecated This field is deprecated, and will be delete soon. */
  categoryIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated This field is deprecated, and will be delete soon. */
  customerIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** @deprecated This field is deprecated, and will be delete soon. */
  daysOfWeek?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** @deprecated This field is deprecated, and will be delete soon. */
  daysOfWeekEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated This field is deprecated, and will be delete soon. */
  endDate?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated This field is deprecated, and will be delete soon. */
  excludeCategoryIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** @deprecated This field is deprecated, and will be delete soon. */
  excludeProductIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  id?: Maybe<Scalars['String']['output']>;
  memberId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated This field is deprecated, and will be delete soon. */
  productIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** @deprecated This field is deprecated, and will be delete soon. */
  productMinQty?: Maybe<Scalars['Int']['output']>;
  /** @deprecated This field is deprecated, and will be delete soon. */
  startDate?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated This field is deprecated, and will be delete soon. */
  timeframeOfDay?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['output']>>>>>;
  /** @deprecated This field is deprecated, and will be delete soon. */
  timeframeOfDayEnabled?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum PricePolicyApplyType {
  AFFILIATE = 'AFFILIATE',
  ALL = 'ALL',
  CUSTOMER_NOT_INCLUDE_AFFILIATE = 'CUSTOMER_NOT_INCLUDE_AFFILIATE'
}

export type Product = {
  __typename?: 'Product';
  allowSale?: Maybe<Scalars['Boolean']['output']>;
  barcode?: Maybe<Scalars['String']['output']>;
  baseCommission?: Maybe<Scalars['Float']['output']>;
  basePrice?: Maybe<Scalars['Float']['output']>;
  branchIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  bulkyTier?: Maybe<BulkyTier>;
  categories?: Maybe<Array<Maybe<Category>>>;
  categoryIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** @deprecated This field is deprecated, and will be delete soon. */
  code?: Maybe<Scalars['String']['output']>;
  commission0?: Maybe<Scalars['Float']['output']>;
  commission1?: Maybe<Scalars['Float']['output']>;
  commission2?: Maybe<Scalars['Float']['output']>;
  commission3?: Maybe<Scalars['Float']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  crossSaleInventory?: Maybe<Scalars['Int']['output']>;
  crossSaleOrdered?: Maybe<Scalars['Int']['output']>;
  customerBonusFactor?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  downPrice?: Maybe<Scalars['Float']['output']>;
  enabledCustomerBonus?: Maybe<Scalars['Boolean']['output']>;
  enabledMemberBonus?: Maybe<Scalars['Boolean']['output']>;
  estimateProductCommission?: Maybe<Scalars['Float']['output']>;
  estimateProductSalesPoint?: Maybe<Scalars['Float']['output']>;
  globalProductCategoryIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  hasPromotions?: Maybe<Scalars['Boolean']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  intro?: Maybe<Scalars['String']['output']>;
  isCrossSale?: Maybe<Scalars['Boolean']['output']>;
  isDisplayPriceWithCheapestAttribute?: Maybe<Scalars['Boolean']['output']>;
  isFixedPrice?: Maybe<Scalars['Boolean']['output']>;
  isPrimary?: Maybe<Scalars['Boolean']['output']>;
  keywords?: Maybe<Scalars['String']['output']>;
  labelIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  labels?: Maybe<Array<Maybe<ProductLabel>>>;
  length?: Maybe<Scalars['Int']['output']>;
  limitSale?: Maybe<Scalars['Int']['output']>;
  limitSaleByDay?: Maybe<Scalars['Boolean']['output']>;
  member?: Maybe<Member>;
  memberBonusFactor?: Maybe<Scalars['Int']['output']>;
  memberId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orderCount?: Maybe<Scalars['Int']['output']>;
  outOfStock?: Maybe<Scalars['Boolean']['output']>;
  policyBestPrice?: Maybe<Scalars['Mixed']['output']>;
  pricePolicy?: Maybe<PricePolicy>;
  pricePolicyId?: Maybe<Scalars['ID']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  productAttributes?: Maybe<Array<Maybe<ProductAttribute>>>;
  productCode?: Maybe<Scalars['String']['output']>;
  productCommissionPolicy?: Maybe<ProductCommissionPolicy>;
  productCommissionPolicyId?: Maybe<Scalars['ID']['output']>;
  productPricePolicy?: Maybe<ProductPricePolicy>;
  productPricePolicyId?: Maybe<Scalars['ID']['output']>;
  productSalesBonusPolicy?: Maybe<ProductSalesBonusPolicy>;
  productSpecs?: Maybe<Array<Maybe<ProductSpecs>>>;
  productTabs?: Maybe<Array<Maybe<ProductTab>>>;
  productTagIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  promotions?: Maybe<Array<Maybe<Promotion>>>;
  rating?: Maybe<Scalars['Float']['output']>;
  rewardPoint?: Maybe<Scalars['Int']['output']>;
  saleRate?: Maybe<Scalars['Int']['output']>;
  smsPhone?: Maybe<Scalars['String']['output']>;
  smsSyntax?: Maybe<Scalars['String']['output']>;
  soldQty?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<EProductStatus>;
  subtitle?: Maybe<Scalars['String']['output']>;
  supplier?: Maybe<Supplier>;
  supplierId?: Maybe<Scalars['ID']['output']>;
  totalCheapestAttributePrice?: Maybe<Scalars['Float']['output']>;
  totalInProcessCount?: Maybe<Scalars['Int']['output']>;
  totalInStockCount?: Maybe<Scalars['Int']['output']>;
  totalOutStockCount?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uniqueBuyers?: Maybe<Scalars['Int']['output']>;
  unit?: Maybe<Unit>;
  unitId?: Maybe<Scalars['ID']['output']>;
  unitName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  upsaleProductIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  upsaleProducts?: Maybe<Array<Maybe<Product>>>;
  url?: Maybe<Scalars['String']['output']>;
  valueAddedTaxAmount?: Maybe<Scalars['Float']['output']>;
  valueAddedTaxRate?: Maybe<Scalars['Float']['output']>;
  valueAddedTaxRateCode?: Maybe<EInvoiceTaxRateCode>;
  weight?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
  youtubeLink?: Maybe<Scalars['String']['output']>;
};

export type ProductAttribute = {
  __typename?: 'ProductAttribute';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  max?: Maybe<Scalars['Int']['output']>;
  memberId?: Maybe<Scalars['ID']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentProductAttribute?: Maybe<ProductAttribute>;
  parentProductAttributeElementId?: Maybe<Scalars['ID']['output']>;
  parentProductAttributeId?: Maybe<Scalars['ID']['output']>;
  productAttributeElements?: Maybe<Array<Maybe<ProductAttributeElement>>>;
  productId?: Maybe<Scalars['ID']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductAttributeElement = {
  __typename?: 'ProductAttributeElement';
  childProductAttributes?: Maybe<Array<Maybe<ProductAttribute>>>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  memberId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  productAttributeId?: Maybe<Scalars['ID']['output']>;
  productId?: Maybe<Scalars['ID']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductCommissionPolicy = {
  __typename?: 'ProductCommissionPolicy';
  applyCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  disbursementPeriodId?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  memberId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  productWithinProductCommissionPolicies?: Maybe<Array<Maybe<ProductWithinProductCommissionPolicy>>>;
  rules?: Maybe<Array<Maybe<ProductCommissionPolicyRule>>>;
  settlementDate?: Maybe<Scalars['DateTime']['output']>;
  settlementDuration?: Maybe<Scalars['Int']['output']>;
  shopAffiliateProductCommissionPolicy?: Maybe<ShopAffiliateProductCommissionPolicy>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  totalCommission?: Maybe<Scalars['Mixed']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductCommissionPolicyPageData = {
  __typename?: 'ProductCommissionPolicyPageData';
  data?: Maybe<Array<Maybe<ProductCommissionPolicy>>>;
  pagination?: Maybe<Pagination>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ProductCommissionPolicyRule = {
  __typename?: 'ProductCommissionPolicyRule';
  commissionType?: Maybe<Scalars['String']['output']>;
  commissionValue?: Maybe<Scalars['Float']['output']>;
  maxCommission?: Maybe<Scalars['Int']['output']>;
  tier?: Maybe<Scalars['Int']['output']>;
};

export type ProductLabel = {
  __typename?: 'ProductLabel';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  memberId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductPricePolicy = {
  __typename?: 'ProductPricePolicy';
  applyCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  memberId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  reductionType?: Maybe<Scalars['String']['output']>;
  rules?: Maybe<Array<Maybe<ProductPricePolicyRule>>>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductPricePolicyRule = {
  __typename?: 'ProductPricePolicyRule';
  applyType?: Maybe<Scalars['String']['output']>;
  estimateProductPricePolicyDiscount?: Maybe<Scalars['Mixed']['output']>;
  maxReductionValue?: Maybe<Scalars['Int']['output']>;
  minQty?: Maybe<Scalars['Int']['output']>;
  reductionType?: Maybe<Scalars['String']['output']>;
  reductionValue?: Maybe<Scalars['Float']['output']>;
};

export type ProductSalesBonusPolicy = {
  __typename?: 'ProductSalesBonusPolicy';
  advancedRules?: Maybe<Array<Maybe<ProductSalesBonusPolicyAdvancedRule>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  disbursementPeriodId?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  member?: Maybe<Member>;
  name: Scalars['String']['output'];
  productSalesBonusPolicyLogs?: Maybe<Array<Maybe<ProductSalesBonusPolicyLog>>>;
  productWithinProductSalesBonusPolicies?: Maybe<Array<Maybe<ProductWithinProductSalesBonusPolicy>>>;
  ruleToApplyAdvanced?: Maybe<RuleToApplyAdvanced>;
  rules?: Maybe<Array<Maybe<ProductSalesBonusPolicyRule>>>;
  settlementDate?: Maybe<Scalars['DateTime']['output']>;
  settlementDuration?: Maybe<Scalars['Int']['output']>;
  shopAffiliateProductSalesBonusPolicy?: Maybe<ShopAffiliateProductSalesBonusPolicy>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  totalBonus?: Maybe<Scalars['Mixed']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductSalesBonusPolicyAdvancedRule = {
  __typename?: 'ProductSalesBonusPolicyAdvancedRule';
  bonusValue?: Maybe<Scalars['Float']['output']>;
  branch?: Maybe<Scalars['Int']['output']>;
};

export type ProductSalesBonusPolicyLog = {
  __typename?: 'ProductSalesBonusPolicyLog';
  affiliate?: Maybe<Affiliate>;
  affiliateId?: Maybe<Scalars['String']['output']>;
  affiliateName?: Maybe<Scalars['String']['output']>;
  basePrice?: Maybe<Scalars['Int']['output']>;
  buyer?: Maybe<Customer>;
  buyerId?: Maybe<Scalars['String']['output']>;
  buyerName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['String']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  globalBuyerId?: Maybe<Scalars['String']['output']>;
  globalCustomerId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Order>;
  orderCode?: Maybe<Scalars['String']['output']>;
  orderId?: Maybe<Scalars['String']['output']>;
  point?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Product>;
  productAttributeElements?: Maybe<Array<Maybe<OrderItemProductAttributeElement>>>;
  productId?: Maybe<Scalars['String']['output']>;
  productName?: Maybe<Scalars['String']['output']>;
  productSalesBonusPolicy?: Maybe<ProductSalesBonusPolicy>;
  productSalesBonusPolicyId?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
  revenue?: Maybe<Scalars['Int']['output']>;
  shopAffiliate?: Maybe<ShopAffiliate>;
  shopAffiliateId?: Maybe<Scalars['String']['output']>;
  shopAffiliateName?: Maybe<Scalars['String']['output']>;
  shopAffiliateProductSalesBonusPolicyId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  targetAffiliate?: Maybe<Affiliate>;
  targetAffiliateId?: Maybe<Scalars['String']['output']>;
  targetAffiliateName?: Maybe<Scalars['String']['output']>;
  targetCustomer?: Maybe<Customer>;
  targetCustomerId?: Maybe<Scalars['String']['output']>;
  targetCustomerName?: Maybe<Scalars['String']['output']>;
  targetGlobalCustomerId?: Maybe<Scalars['String']['output']>;
  targetShopAffiliate?: Maybe<ShopAffiliate>;
  targetShopAffiliateId?: Maybe<Scalars['String']['output']>;
  targetShopAffiliateName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductSalesBonusPolicyRule = {
  __typename?: 'ProductSalesBonusPolicyRule';
  bonusValue?: Maybe<Scalars['Float']['output']>;
  totalPoint?: Maybe<Scalars['Int']['output']>;
  totalRevenue?: Maybe<Scalars['Int']['output']>;
};

export type ProductSpecs = {
  __typename?: 'ProductSpecs';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  member?: Maybe<Member>;
  name?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Product>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ProductTab = {
  __typename?: 'ProductTab';
  content?: Maybe<Scalars['Mixed']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['ID']['output']>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['ID']['output']>;
  tab?: Maybe<Tab>;
  tabId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductWithinProductCommissionPolicy = {
  __typename?: 'ProductWithinProductCommissionPolicy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isWithinProductCommissionPolicy?: Maybe<Scalars['Boolean']['output']>;
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Product>;
  productCommissionPolicy?: Maybe<ProductCommissionPolicy>;
  productCommissionPolicyId?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductWithinProductSalesBonusPolicy = {
  __typename?: 'ProductWithinProductSalesBonusPolicy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isWithinProductSalesBonusPolicy?: Maybe<Scalars['Boolean']['output']>;
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['String']['output']>;
  point?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['String']['output']>;
  productSalesBonusPolicy?: Maybe<ProductSalesBonusPolicy>;
  productSalesBonusPolicyId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Promotion = {
  __typename?: 'Promotion';
  applyType?: Maybe<PricePolicyApplyType>;
  assignmentRemaining?: Maybe<Scalars['Mixed']['output']>;
  assignmentRemainingToday?: Maybe<Scalars['Mixed']['output']>;
  buyConditionType?: Maybe<ConditionType>;
  buyProducts?: Maybe<Array<Maybe<PromotionProduct>>>;
  capCustomerDaily?: Maybe<Scalars['Mixed']['output']>;
  capCustomerLifetime?: Maybe<Scalars['Mixed']['output']>;
  capShopDaily?: Maybe<Scalars['Mixed']['output']>;
  capShopLifetime?: Maybe<Scalars['Mixed']['output']>;
  conditionValueOfOrder?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  haveQuantity?: Maybe<Scalars['Boolean']['output']>;
  haveUseLimit?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isDailyUnlimited?: Maybe<Scalars['Boolean']['output']>;
  isLifetimeUnlimited?: Maybe<Scalars['Boolean']['output']>;
  member: Member;
  memberId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numericRemainingLifetime?: Maybe<Scalars['Mixed']['output']>;
  numericRemainingToday?: Maybe<Scalars['Mixed']['output']>;
  offerConditionType?: Maybe<ConditionType>;
  offerProducts?: Maybe<Array<Maybe<PromotionProduct>>>;
  quantity?: Maybe<Scalars['Int']['output']>;
  receivePromotionThrough?: Maybe<EReceivePromotionThrough>;
  remainingLifetime?: Maybe<Scalars['Mixed']['output']>;
  remainingToday?: Maybe<Scalars['Mixed']['output']>;
  remainingUseLimit?: Maybe<Scalars['Mixed']['output']>;
  skipPolicies?: Maybe<Array<Maybe<EPolicy>>>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  totalAllEvery?: Maybe<Scalars['Mixed']['output']>;
  totalAllToday?: Maybe<Scalars['Mixed']['output']>;
  totalCustomerEvery?: Maybe<Scalars['Mixed']['output']>;
  totalCustomerToday?: Maybe<Scalars['Mixed']['output']>;
  totalPromotionsAbleUsedToday?: Maybe<Scalars['Mixed']['output']>;
  totalPromotionsCustomerUsed?: Maybe<Scalars['Mixed']['output']>;
  totalPromotionsCustomerUsedToday?: Maybe<Scalars['Mixed']['output']>;
  type?: Maybe<PromotionType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  useLimit?: Maybe<Scalars['Int']['output']>;
  useLimitByDate?: Maybe<Scalars['Boolean']['output']>;
};

export type PromotionApplyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PromotionPageData = {
  __typename?: 'PromotionPageData';
  data?: Maybe<Array<Maybe<Promotion>>>;
  pagination?: Maybe<Pagination>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PromotionProduct = {
  __typename?: 'PromotionProduct';
  product?: Maybe<Product>;
  productId: Scalars['String']['output'];
  quantity?: Maybe<Scalars['Mixed']['output']>;
};

export type PromotionReport = {
  __typename?: 'PromotionReport';
  category?: Maybe<Scalars['Mixed']['output']>;
  order?: Maybe<Scalars['Mixed']['output']>;
  summary?: Maybe<Scalars['Mixed']['output']>;
  topIssue?: Maybe<Scalars['Mixed']['output']>;
};

export enum PromotionType {
  QUANTITY_OF_PRODUCT = 'QUANTITY_OF_PRODUCT',
  VALUE_OF_ORDER = 'VALUE_OF_ORDER'
}

export type Query = {
  __typename?: 'Query';
  customerGetMe?: Maybe<Customer>;
  getAllShopBranch?: Maybe<ShopBranchPageData>;
  memberGetMe?: Maybe<Member>;
  staffGetMe?: Maybe<Staff>;
};


export type QuerygetAllShopBranchArgs = {
  q?: InputMaybe<QueryGetListInput>;
  staffPermissionScope?: InputMaybe<EStaffPermissionScope>;
};

export type QueryGetListInput = {
  filter?: InputMaybe<Scalars['Mixed']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Mixed']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ReceivedOfferProduct = {
  __typename?: 'ReceivedOfferProduct';
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type RegisterMemberInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  agencyCode?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  districtId?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  identityCardNumber?: InputMaybe<Scalars['String']['input']>;
  initFeatureGroups?: InputMaybe<Array<InputMaybe<EFeatureGroup>>>;
  legalEntityType?: InputMaybe<ELegalEntityType>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  provinceId?: InputMaybe<Scalars['String']['input']>;
  shopLogo?: InputMaybe<Scalars['String']['input']>;
  shopName: Scalars['String']['input'];
  shopType?: InputMaybe<EShopType>;
  username: Scalars['String']['input'];
  wardId?: InputMaybe<Scalars['String']['input']>;
};

export type RewardPointReport = {
  __typename?: 'RewardPointReport';
  summary?: Maybe<Scalars['Mixed']['output']>;
  topCustomer?: Maybe<Scalars['Mixed']['output']>;
};

export type RuleToApplyAdvanced = {
  __typename?: 'RuleToApplyAdvanced';
  totalPoint?: Maybe<Scalars['Int']['output']>;
  totalRevenue?: Maybe<Scalars['Int']['output']>;
};

export type S3Url = {
  __typename?: 'S3Url';
  presignedUrl?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ShopAffiliate = {
  __typename?: 'ShopAffiliate';
  affiliate?: Maybe<Affiliate>;
  affiliateId?: Maybe<Scalars['String']['output']>;
  approvedCommission?: Maybe<Scalars['Mixed']['output']>;
  balanceAvailable?: Maybe<Scalars['Mixed']['output']>;
  balancePendingWithdrawal?: Maybe<Scalars['Mixed']['output']>;
  balanceWithdrawn?: Maybe<Scalars['Mixed']['output']>;
  canceledCommission?: Maybe<Scalars['Mixed']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentTier?: Maybe<Scalars['Int']['output']>;
  currentTierName?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['String']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  globalCustomerId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isActiveAndNotExpired?: Maybe<Scalars['Boolean']['output']>;
  member?: Maybe<MemberPublic>;
  memberId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pendingCommission?: Maybe<Scalars['Mixed']['output']>;
  recruitedAffiliate?: Maybe<Affiliate>;
  recruitedId?: Maybe<Scalars['String']['output']>;
  recruitedNumber?: Maybe<Scalars['Int']['output']>;
  recruitedShopAffiliate?: Maybe<ShopAffiliate>;
  refererNumber?: Maybe<Scalars['Int']['output']>;
  referrerCode?: Maybe<Scalars['String']['output']>;
  referrerPhoneNumber?: Maybe<Scalars['String']['output']>;
  shopAffiliateLabelIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  shopAffiliateLabels?: Maybe<Array<Maybe<ShopAffiliateLabel>>>;
  shopAffiliateLevel?: Maybe<Scalars['Int']['output']>;
  statisticDownlines?: Maybe<Array<Maybe<ShopAffiliateStatisticDownlines>>>;
  taxCode?: Maybe<Scalars['String']['output']>;
  totalAffiliateLevelDiscountCommissionAmount?: Maybe<Scalars['Mixed']['output']>;
  totalAmount?: Maybe<Scalars['Mixed']['output']>;
  totalAmountBonusProductSalesBonusPolicy?: Maybe<Scalars['Mixed']['output']>;
  totalBalance?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateAffiliateLevelDiscountCommissionAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateAffiliateOrderAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateAffiliateOrderCanceledCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateAffiliateOrderCompletedCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateAffiliateOrderCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateAffiliateOrderProcessingCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateCommissionAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateFromCommissionPolicies?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateFromDirectSubordinateSalesBonusPolicies?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateFromDiscountDifferenceAffiliateLevelDiscountCommission?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateFromIndividualSalesBonusPolicies?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateFromLeaderBoard?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateFromReferralCommissionPolices?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateFromSalesBonusPolicies?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateFromTask?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateFromVoucherSharing?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateOrderAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateOrderCanceledAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateOrderCanceledCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateOrderCompletedAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateOrderCompletedCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateOrderCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateOrderPaidAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateOrderPaidCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateOrderProcessingAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateOrderProcessingCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateProductCanceledCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateProductCompletedCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateProductCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateProductPaidAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateProductPaidCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateProductProcessingCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateProductSalesAdvancedBonusAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateProductSalesBasicBonusAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateProductSalesBonusAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateReferralCommissionAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateRevenue?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateSerivceContractTypePaidAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateSerivceContractTypePaidCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateServiceContractAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateServiceContractCanceledAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateServiceContractCanceledCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateServiceContractCompletedAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateServiceContractCompletedCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateServiceContractCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateServiceContractPaidAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateServiceContractPaidCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateServiceContractProcessingAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateServiceContractProcessingCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateServiceContractTypeCanceledCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateServiceContractTypeCompletedCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateServiceContractTypeCount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateServiceContractTypeProcessingCount?: Maybe<Scalars['Mixed']['output']>;
  totalCommission?: Maybe<Scalars['Mixed']['output']>;
  totalCommissionAmount?: Maybe<Scalars['Mixed']['output']>;
  totalCommissionPolicyJoinedCount?: Maybe<Scalars['Mixed']['output']>;
  totalDirectDownlines?: Maybe<Scalars['Int']['output']>;
  totalDownlines?: Maybe<Scalars['Int']['output']>;
  totalFromCommissionPolicies?: Maybe<Scalars['Mixed']['output']>;
  totalFromDirectSubordinateSalesBonusPolicies?: Maybe<Scalars['Mixed']['output']>;
  totalFromDiscountDifferenceAffiliateLevelDiscountCommission?: Maybe<Scalars['Mixed']['output']>;
  totalFromIndividualSalesBonusPolicies?: Maybe<Scalars['Mixed']['output']>;
  totalFromLeaderBoard?: Maybe<Scalars['Mixed']['output']>;
  totalFromReferralCommissionPolices?: Maybe<Scalars['Mixed']['output']>;
  totalFromSalesBonusPolicies?: Maybe<Scalars['Mixed']['output']>;
  totalFromTask?: Maybe<Scalars['Mixed']['output']>;
  totalFromVoucherSharing?: Maybe<Scalars['Mixed']['output']>;
  totalOrder?: Maybe<Scalars['Int']['output']>;
  totalOrderAmount?: Maybe<Scalars['Mixed']['output']>;
  totalOrderCanceledAmount?: Maybe<Scalars['Mixed']['output']>;
  totalOrderCanceledCount?: Maybe<Scalars['Mixed']['output']>;
  totalOrderCompletedAmount?: Maybe<Scalars['Mixed']['output']>;
  totalOrderCompletedCount?: Maybe<Scalars['Mixed']['output']>;
  totalOrderCount?: Maybe<Scalars['Mixed']['output']>;
  totalOrderPaidAmount?: Maybe<Scalars['Mixed']['output']>;
  totalOrderPaidCount?: Maybe<Scalars['Mixed']['output']>;
  totalOrderProcessingAmount?: Maybe<Scalars['Mixed']['output']>;
  totalOrderProcessingCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalAffiliateLevelDiscountCommissionAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalCommissionAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalFromCommissionPolicies?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalFromDirectSubordinateSalesBonusPolicies?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalFromDiscountDifferenceAffiliateLevelDiscountCommission?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalFromIndividualSalesBonusPolicies?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalFromLeaderBoard?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalFromReferralCommissionPolices?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalFromSalesBonusPolicies?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalFromTask?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalFromVoucherSharing?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalOrderAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalOrderCanceledAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalOrderCanceledCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalOrderCompletedAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalOrderCompletedCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalOrderCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalOrderPaidAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalOrderPaidCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalOrderProcessingAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalOrderProcessingCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalProductCanceledCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalProductCompletedCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalProductCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalProductPaidAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalProductPaidCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalProductProcessingCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalProductSalesAdvancedBonusAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalProductSalesBasicBonusAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalProductSalesBonusAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalReferralCommissionAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalRevenue?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalSerivceContractTypePaidAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalSerivceContractTypePaidCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalServiceContractAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalServiceContractCanceledAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalServiceContractCanceledCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalServiceContractCompletedAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalServiceContractCompletedCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalServiceContractCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalServiceContractPaidAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalServiceContractPaidCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalServiceContractProcessingAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalServiceContractProcessingCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalServiceContractTypeCanceledCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalServiceContractTypeCompletedCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalServiceContractTypeCount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalServiceContractTypeProcessingCount?: Maybe<Scalars['Mixed']['output']>;
  totalPricePolicyJoinedCount?: Maybe<Scalars['Mixed']['output']>;
  totalProduct?: Maybe<Scalars['Int']['output']>;
  totalProductCanceledCount?: Maybe<Scalars['Mixed']['output']>;
  totalProductCompletedCount?: Maybe<Scalars['Mixed']['output']>;
  totalProductCount?: Maybe<Scalars['Mixed']['output']>;
  totalProductPaidAmount?: Maybe<Scalars['Mixed']['output']>;
  totalProductPaidCount?: Maybe<Scalars['Mixed']['output']>;
  totalProductProcessingCount?: Maybe<Scalars['Mixed']['output']>;
  totalProductSalesAdvancedBonusAmount?: Maybe<Scalars['Mixed']['output']>;
  totalProductSalesBasicBonusAmount?: Maybe<Scalars['Mixed']['output']>;
  totalProductSalesBonusAmount?: Maybe<Scalars['Mixed']['output']>;
  totalProductSalesPolicyAdvancedJoinedCount?: Maybe<Scalars['Mixed']['output']>;
  totalProductSalesPolicyJoinedCount?: Maybe<Scalars['Mixed']['output']>;
  totalPromotionPolicyJoinedCount?: Maybe<Scalars['Mixed']['output']>;
  totalReferralCommission?: Maybe<Scalars['Mixed']['output']>;
  totalReferralCommissionAmount?: Maybe<Scalars['Mixed']['output']>;
  totalReferrerCode?: Maybe<Scalars['Int']['output']>;
  totalReferrerPhoneNumber?: Maybe<Scalars['Int']['output']>;
  totalRevenue?: Maybe<Scalars['Mixed']['output']>;
  totalSales?: Maybe<Scalars['Int']['output']>;
  totalSerivceContractTypePaidAmount?: Maybe<Scalars['Mixed']['output']>;
  totalSerivceContractTypePaidCount?: Maybe<Scalars['Mixed']['output']>;
  totalServiceContractAmount?: Maybe<Scalars['Mixed']['output']>;
  totalServiceContractCanceledAmount?: Maybe<Scalars['Mixed']['output']>;
  totalServiceContractCanceledCount?: Maybe<Scalars['Mixed']['output']>;
  totalServiceContractCompletedAmount?: Maybe<Scalars['Mixed']['output']>;
  totalServiceContractCompletedCount?: Maybe<Scalars['Mixed']['output']>;
  totalServiceContractCount?: Maybe<Scalars['Mixed']['output']>;
  totalServiceContractPaidAmount?: Maybe<Scalars['Mixed']['output']>;
  totalServiceContractPaidCount?: Maybe<Scalars['Mixed']['output']>;
  totalServiceContractProcessingAmount?: Maybe<Scalars['Mixed']['output']>;
  totalServiceContractProcessingCount?: Maybe<Scalars['Mixed']['output']>;
  totalServiceContractTypeCanceledCount?: Maybe<Scalars['Mixed']['output']>;
  totalServiceContractTypeCompletedCount?: Maybe<Scalars['Mixed']['output']>;
  totalServiceContractTypeCount?: Maybe<Scalars['Mixed']['output']>;
  totalServiceContractTypeProcessingCount?: Maybe<Scalars['Mixed']['output']>;
  totalShopAffiliateLevelDiscountPolicyJoinedCount?: Maybe<Scalars['Mixed']['output']>;
  totalSuccessAmount?: Maybe<Scalars['Mixed']['output']>;
  totalSuccessOrder?: Maybe<Scalars['Int']['output']>;
  totalSuccessProduct?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  wallets?: Maybe<Array<Maybe<Wallet>>>;
  withdrawalApproved?: Maybe<Scalars['Mixed']['output']>;
  withdrawalApprovedAmountBonusProductSalesBonusPolicy?: Maybe<Scalars['Mixed']['output']>;
  withdrawalApprovedCommission?: Maybe<Scalars['Mixed']['output']>;
  withdrawalCanceled?: Maybe<Scalars['Mixed']['output']>;
  withdrawalCanceledCommission?: Maybe<Scalars['Mixed']['output']>;
  withdrawalPending?: Maybe<Scalars['Mixed']['output']>;
  withdrawalPendingAmountBonusProductSalesBonusPolicy?: Maybe<Scalars['Mixed']['output']>;
  withdrawalPendingCommission?: Maybe<Scalars['Mixed']['output']>;
};

export type ShopAffiliateConfigPoliciesAllowed = {
  __typename?: 'ShopAffiliateConfigPoliciesAllowed';
  directSubordinatesProductSalesBonus?: Maybe<Scalars['Boolean']['output']>;
  individualProductSalesBonus?: Maybe<Scalars['Boolean']['output']>;
  productCommission?: Maybe<Scalars['Boolean']['output']>;
  productSalesBonusAdvanced?: Maybe<Scalars['Boolean']['output']>;
  productSalesBonusBasic?: Maybe<Scalars['Boolean']['output']>;
  referralCommission?: Maybe<Scalars['Boolean']['output']>;
  referralShopAffiliateRewardMilestone?: Maybe<Scalars['Boolean']['output']>;
  topLeaderBoardBonus?: Maybe<Scalars['Boolean']['output']>;
};

export type ShopAffiliateConfigShopAffiliateWalletConfig = {
  __typename?: 'ShopAffiliateConfigShopAffiliateWalletConfig';
  minimumBalance?: Maybe<Scalars['Int']['output']>;
};

export type ShopAffiliateConfigWordsDisplayed = {
  __typename?: 'ShopAffiliateConfigWordsDisplayed';
  directSubordinatesProductSalesBonus?: Maybe<Scalars['String']['output']>;
  individualProductSalesBonus?: Maybe<Scalars['String']['output']>;
  productCommission?: Maybe<Scalars['String']['output']>;
  productSalesBonusAdvanced?: Maybe<Scalars['String']['output']>;
  productSalesBonusBasic?: Maybe<Scalars['String']['output']>;
  referralCommission?: Maybe<Scalars['String']['output']>;
  referralShopAffiliateRewardMilestone?: Maybe<Scalars['String']['output']>;
  shopAffiliate?: Maybe<Scalars['String']['output']>;
  topLeaderBoardBonus?: Maybe<Scalars['String']['output']>;
};

export type ShopAffiliateLabel = {
  __typename?: 'ShopAffiliateLabel';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isActivated?: Maybe<Scalars['Boolean']['output']>;
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shopAffiliateCount?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ShopAffiliateProductCommissionPolicy = {
  __typename?: 'ShopAffiliateProductCommissionPolicy';
  affiliate?: Maybe<Affiliate>;
  affiliateId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['String']['output']>;
  productCommissionPolicy?: Maybe<ProductCommissionPolicy>;
  productCommissionPolicyId?: Maybe<Scalars['String']['output']>;
  productCommissionPolicyName?: Maybe<Scalars['String']['output']>;
  shopAffiliate?: Maybe<ShopAffiliate>;
  shopAffiliateId?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  totalAmount?: Maybe<Scalars['Mixed']['output']>;
  totalAmountEstimate?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateAmount?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateAmountEstimate?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateRevenue?: Maybe<Scalars['Mixed']['output']>;
  totalBranchShopAffiliateRevenueEstimate?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalAmount?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalAmountEstimate?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalRevenue?: Maybe<Scalars['Mixed']['output']>;
  totalPersonalRevenueEstimate?: Maybe<Scalars['Mixed']['output']>;
  totalRevenue?: Maybe<Scalars['Mixed']['output']>;
  totalRevenueEstimate?: Maybe<Scalars['Mixed']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ShopAffiliateProductSalesBonusPolicy = {
  __typename?: 'ShopAffiliateProductSalesBonusPolicy';
  advancedBonusValueApply?: Maybe<Scalars['Float']['output']>;
  advancedBonusValueApplyEstimate?: Maybe<Scalars['Float']['output']>;
  affiliate?: Maybe<Affiliate>;
  affiliateId?: Maybe<Scalars['String']['output']>;
  amountAdvanceBonus?: Maybe<Scalars['Mixed']['output']>;
  amountAdvanceBonusCalculationFormulas?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  amountAdvanceBonusEstimate?: Maybe<Scalars['Mixed']['output']>;
  amountAdvanceBonusEstimateCalculationFormulas?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  amountBasicBonus?: Maybe<Scalars['Mixed']['output']>;
  amountBasicBonusCalculationFormulas?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  amountBasicBonusEstimate?: Maybe<Scalars['Mixed']['output']>;
  amountBasicBonusEstimateCalculationFormulas?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  amountBonus?: Maybe<Scalars['Mixed']['output']>;
  amountBonusCalculationFormulas?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  amountBonusEstimate?: Maybe<Scalars['Mixed']['output']>;
  amountBonusEstimateCalculationFormulas?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  amountBranchShopAffiliateAdvanceBonus?: Maybe<Scalars['Mixed']['output']>;
  amountBranchShopAffiliateAdvanceBonusEstimate?: Maybe<Scalars['Mixed']['output']>;
  amountBranchShopAffiliateBasicBonus?: Maybe<Scalars['Mixed']['output']>;
  amountBranchShopAffiliateBasicBonusEstimate?: Maybe<Scalars['Mixed']['output']>;
  amountBranchShopAffiliateBonus?: Maybe<Scalars['Mixed']['output']>;
  amountBranchShopAffiliateBonusEstimate?: Maybe<Scalars['Mixed']['output']>;
  amountBranchShopAffiliatePoint?: Maybe<Scalars['Mixed']['output']>;
  amountBranchShopAffiliatePointEstimate?: Maybe<Scalars['Mixed']['output']>;
  amountBranchShopAffiliateRevenue?: Maybe<Scalars['Mixed']['output']>;
  amountBranchShopAffiliateRevenueEstimate?: Maybe<Scalars['Mixed']['output']>;
  amountBranchToShopAffiliateBonus?: Maybe<Scalars['Mixed']['output']>;
  amountBranchToShopAffiliateBonusEstimate?: Maybe<Scalars['Mixed']['output']>;
  amountBranchToShopAffiliatePoint?: Maybe<Scalars['Mixed']['output']>;
  amountBranchToShopAffiliatePointEstimate?: Maybe<Scalars['Mixed']['output']>;
  amountBranchToShopAffiliateRevenue?: Maybe<Scalars['Mixed']['output']>;
  amountBranchToShopAffiliateRevenueEstimate?: Maybe<Scalars['Mixed']['output']>;
  amountPersonalBonus?: Maybe<Scalars['Mixed']['output']>;
  amountPersonalBonusEstimate?: Maybe<Scalars['Mixed']['output']>;
  amountPersonalPoint?: Maybe<Scalars['Mixed']['output']>;
  amountPersonalPointEstimate?: Maybe<Scalars['Mixed']['output']>;
  amountPersonalRevenue?: Maybe<Scalars['Mixed']['output']>;
  amountPersonalRevenueEstimate?: Maybe<Scalars['Mixed']['output']>;
  bonusValueApply?: Maybe<Scalars['Float']['output']>;
  bonusValueApplyEstimate?: Maybe<Scalars['Float']['output']>;
  countBranchFull?: Maybe<Scalars['Int']['output']>;
  countBranchFullEstimate?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  globalCustomerId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['String']['output']>;
  productSalesBonusPolicy?: Maybe<ProductSalesBonusPolicy>;
  productSalesBonusPolicyId?: Maybe<Scalars['String']['output']>;
  productSalesBonusPolicyName?: Maybe<Scalars['String']['output']>;
  shopAffiliate?: Maybe<ShopAffiliate>;
  shopAffiliateId?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  totalPoint?: Maybe<Scalars['Mixed']['output']>;
  totalPointEstimate?: Maybe<Scalars['Mixed']['output']>;
  totalRevenue?: Maybe<Scalars['Mixed']['output']>;
  totalRevenueEstimate?: Maybe<Scalars['Mixed']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ShopAffiliateStatisticDownlines = {
  __typename?: 'ShopAffiliateStatisticDownlines';
  shopAffiliate?: Maybe<Array<Maybe<ShopAffiliate>>>;
  tier?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ShopBranch = {
  __typename?: 'ShopBranch';
  activated?: Maybe<Scalars['Boolean']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  coverImage?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  districtId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isOpen?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['Mixed']['output']>;
  memberId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  provinceId?: Maybe<Scalars['String']['output']>;
  shipDefaultDistance?: Maybe<Scalars['Int']['output']>;
  shipDefaultFee?: Maybe<Scalars['Float']['output']>;
  shipNextFee?: Maybe<Scalars['Float']['output']>;
  shipNote?: Maybe<Scalars['String']['output']>;
  shipOneKmFee?: Maybe<Scalars['Float']['output']>;
  shipPreparationTime?: Maybe<Scalars['String']['output']>;
  shipUseOneKmFee?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  ward?: Maybe<Scalars['String']['output']>;
  wardId?: Maybe<Scalars['String']['output']>;
};

export type ShopBranchPageData = {
  __typename?: 'ShopBranchPageData';
  data?: Maybe<Array<Maybe<ShopBranch>>>;
  pagination?: Maybe<Pagination>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ShopCategory = {
  __typename?: 'ShopCategory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  desc?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  shopCount?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ShopConfigPublic = {
  __typename?: 'ShopConfigPublic';
  banks?: Maybe<Array<Maybe<Bank>>>;
  codEnabled?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  intro?: Maybe<Scalars['String']['output']>;
  isInvoiceHasIssues?: Maybe<Scalars['Boolean']['output']>;
  limitItem?: Maybe<Scalars['Int']['output']>;
  limitOpenOrder?: Maybe<Scalars['Int']['output']>;
  memberId?: Maybe<Scalars['ID']['output']>;
  momoEnabled?: Maybe<Scalars['Boolean']['output']>;
  payonEnabled?: Maybe<Scalars['Boolean']['output']>;
  terms?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vnpayEnabled?: Maybe<Scalars['Boolean']['output']>;
  zalopayEnabled?: Maybe<Scalars['Boolean']['output']>;
};

export type ShopVoucher = {
  __typename?: 'ShopVoucher';
  applyForOrder?: Maybe<EShopVoucherApplyForOrder>;
  applyISODayOfWeek?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  applyItemIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  applyPaymentMethods?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  applyServiceContractTypeIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  applyTimeOfDay?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['output']>>>>>;
  applyType?: Maybe<PricePolicyApplyType>;
  assignedTotal?: Maybe<Scalars['Mixed']['output']>;
  assignedUsed?: Maybe<Scalars['Mixed']['output']>;
  assignedUsedToday?: Maybe<Scalars['Mixed']['output']>;
  autoAddOfferItem?: Maybe<Scalars['Boolean']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discountUnit?: Maybe<EDiscountUnit>;
  discountValue?: Maybe<Scalars['Float']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  exceptItemIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  exceptServiceContractTypeIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  haveIssueNumber?: Maybe<Scalars['Boolean']['output']>;
  haveUseLimit?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isDailyUnlimited?: Maybe<Scalars['Boolean']['output']>;
  isLifetimeUnlimited?: Maybe<Scalars['Boolean']['output']>;
  isPersonal?: Maybe<Scalars['Boolean']['output']>;
  isPrivate?: Maybe<Scalars['Boolean']['output']>;
  issueByDate?: Maybe<Scalars['Boolean']['output']>;
  issueNumber?: Maybe<Scalars['Int']['output']>;
  maxDiscount?: Maybe<Scalars['Float']['output']>;
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['ID']['output']>;
  minItemQty?: Maybe<Scalars['Int']['output']>;
  minSubtotal?: Maybe<Scalars['Float']['output']>;
  numericRemainingLifetime?: Maybe<Scalars['Mixed']['output']>;
  numericRemainingToday?: Maybe<Scalars['Mixed']['output']>;
  offerAllItem?: Maybe<Scalars['Boolean']['output']>;
  offerHighestPrice?: Maybe<Scalars['Boolean']['output']>;
  offerItemGroups?: Maybe<Array<Maybe<Array<Maybe<OfferItem>>>>>;
  offerItems?: Maybe<Array<Maybe<OfferItem>>>;
  offerQty?: Maybe<Scalars['Int']['output']>;
  onlyApplyItem?: Maybe<Scalars['Boolean']['output']>;
  onlyApplyServiceContractType?: Maybe<Scalars['Boolean']['output']>;
  receiveShopVoucherThrough?: Maybe<EReceiveShopVoucherThrough>;
  remainingLifetime?: Maybe<Scalars['Mixed']['output']>;
  remainingToday?: Maybe<Scalars['Mixed']['output']>;
  remainingUseLimit?: Maybe<Scalars['Mixed']['output']>;
  requireAllApplyItem?: Maybe<Scalars['Boolean']['output']>;
  requireAllApplyServiceContractType?: Maybe<Scalars['Boolean']['output']>;
  samePrice?: Maybe<Scalars['Float']['output']>;
  shareLink?: Maybe<Scalars['String']['output']>;
  shopDailyUnlimited?: Maybe<Scalars['Boolean']['output']>;
  shopLifetimeUnlimited?: Maybe<Scalars['Boolean']['output']>;
  shopRemainingDaily?: Maybe<Scalars['Mixed']['output']>;
  shopRemainingLifetime?: Maybe<Scalars['Mixed']['output']>;
  skipPolicies?: Maybe<Array<Maybe<EPolicy>>>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  totalVoucherAbleUsedToDay?: Maybe<Scalars['Mixed']['output']>;
  totalVoucherAllCustomersUsed?: Maybe<Scalars['Mixed']['output']>;
  totalVoucherAllCustomersUsedToday?: Maybe<Scalars['Mixed']['output']>;
  totalVoucherCustomerUsed?: Maybe<Scalars['Mixed']['output']>;
  totalVoucherCustomerUsedToday?: Maybe<Scalars['Mixed']['output']>;
  type?: Maybe<EShopVoucherType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  useLimit?: Maybe<Scalars['Int']['output']>;
  useLimitByDate?: Maybe<Scalars['Boolean']['output']>;
  usedAllEvery?: Maybe<Scalars['Mixed']['output']>;
  usedAllToday?: Maybe<Scalars['Mixed']['output']>;
  usedByCustomerEvery?: Maybe<Scalars['Mixed']['output']>;
  usedByCustomerToday?: Maybe<Scalars['Mixed']['output']>;
};

export type Staff = {
  __typename?: 'Staff';
  avatar?: Maybe<Scalars['String']['output']>;
  branch?: Maybe<ShopBranch>;
  branchId?: Maybe<Scalars['ID']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  scopes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  shopBranchIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  shopBranches?: Maybe<Array<Maybe<ShopBranch>>>;
  staffPermissions?: Maybe<Array<Maybe<StaffPermission>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type StaffPermission = {
  __typename?: 'StaffPermission';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['ID']['output']>;
  permissionType?: Maybe<EPermissionType>;
  permissions?: Maybe<Array<Maybe<StaffPermissionGroup>>>;
  shopBranch?: Maybe<ShopBranch>;
  shopBranchId?: Maybe<Scalars['ID']['output']>;
  staff?: Maybe<Staff>;
  staffId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StaffPermissionGroup = {
  __typename?: 'StaffPermissionGroup';
  permissionScopes?: Maybe<Array<Maybe<EStaffPermissionScope>>>;
  scopeGroup: EStaffPermissionScopeGroup;
};

export type Supplier = {
  __typename?: 'Supplier';
  address?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isActivated?: Maybe<Scalars['Boolean']['output']>;
  memberId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  paymentConfig?: Maybe<SupplierPaymentConfig>;
  phone?: Maybe<Scalars['String']['output']>;
  productCount?: Maybe<Scalars['Int']['output']>;
  serviceContractTypeCount?: Maybe<Scalars['Int']['output']>;
  shopBranch?: Maybe<ShopBranch>;
  shopBranchId?: Maybe<Scalars['ID']['output']>;
  taxCode?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SupplierPaymentBankConfig = {
  __typename?: 'SupplierPaymentBankConfig';
  bankBin?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  bankNumber?: Maybe<Scalars['String']['output']>;
  branch?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  ownerName?: Maybe<Scalars['String']['output']>;
  terminalId?: Maybe<Scalars['String']['output']>;
};

export type SupplierPaymentConfig = {
  __typename?: 'SupplierPaymentConfig';
  bankTransfers?: Maybe<Array<Maybe<SupplierPaymentBankConfig>>>;
  mbBankConfig?: Maybe<SupplierPaymentBankConfig>;
};

export type Tab = {
  __typename?: 'Tab';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Table = {
  __typename?: 'Table';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  memberId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  seatNumber?: Maybe<Scalars['Int']['output']>;
  shopBranch?: Maybe<ShopBranch>;
  shopBranchId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<ETableStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TierConfig = {
  __typename?: 'TierConfig';
  level?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
};

export type Unit = {
  __typename?: 'Unit';
  applyType?: Maybe<EUnitApplyType>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActivated?: Maybe<Scalars['Boolean']['output']>;
  memberId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VoucherOrder = {
  __typename?: 'VoucherOrder';
  discount?: Maybe<Scalars['Float']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
  voucher?: Maybe<ShopVoucher>;
  voucherId?: Maybe<Scalars['ID']['output']>;
};

export type Wallet = {
  __typename?: 'Wallet';
  affiliateId?: Maybe<Scalars['ID']['output']>;
  balanceAvailable?: Maybe<Scalars['Mixed']['output']>;
  balancePendingWithdrawal?: Maybe<Scalars['Mixed']['output']>;
  balanceWithdrawn?: Maybe<Scalars['Mixed']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customerId?: Maybe<Scalars['ID']['output']>;
  globalCustomerId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  memberId?: Maybe<Scalars['ID']['output']>;
  shopAffiliateId?: Maybe<Scalars['ID']['output']>;
  totalBalance?: Maybe<Scalars['Mixed']['output']>;
  totalDepositBalance?: Maybe<Scalars['Mixed']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  walletType?: Maybe<EWalletType>;
};

export type WalletBalance = {
  __typename?: 'WalletBalance';
  balance?: Maybe<Scalars['Mixed']['output']>;
  balanceAvailable?: Maybe<Scalars['Mixed']['output']>;
  balancePendingWithdrawal?: Maybe<Scalars['Mixed']['output']>;
  balanceWithdrawn?: Maybe<Scalars['Mixed']['output']>;
  id?: Maybe<Scalars['Mixed']['output']>;
  totalBalance?: Maybe<Scalars['Mixed']['output']>;
  totalDepositBalance?: Maybe<Scalars['Mixed']['output']>;
};

export type WarehouseProduct = {
  __typename?: 'WarehouseProduct';
  amountByExportInventoryVoucher?: Maybe<Scalars['Float']['output']>;
  amountByImportInventoryVoucher?: Maybe<Scalars['Float']['output']>;
  branch?: Maybe<ShopBranch>;
  branchId?: Maybe<Scalars['String']['output']>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deliveryPendingCount?: Maybe<Scalars['Int']['output']>;
  exportCount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  importCount?: Maybe<Scalars['Int']['output']>;
  inProcessCount?: Maybe<Scalars['Int']['output']>;
  inStockCount?: Maybe<Scalars['Int']['output']>;
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  outStockCount?: Maybe<Scalars['Int']['output']>;
  processableStockCount?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Product>;
  productCode?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  warehouseId?: Maybe<Scalars['String']['output']>;
};

export type RegisterMemberMutationVariables = Exact<{
  data: RegisterMemberInput;
}>;


export type RegisterMemberMutation = { registerMember?: { __typename?: 'Member', id?: string | null, username?: string | null, name?: string | null, shopName?: string | null, address?: string | null, shopLogo?: string | null, code?: string | null, shopType?: EShopType | null, legalEntityType?: ELegalEntityType | null, district?: string | null, provinceId?: string | null, wardId?: string | null, phone?: string | null } | null };

export type LoginMemberByPasswordMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
  deviceToken?: InputMaybe<Scalars['String']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
}>;


export type LoginMemberByPasswordMutation = { loginMemberByPassword?: { __typename?: 'MemberLoginData', token?: string | null, member?: { __typename?: 'Member', id?: string | null, username?: string | null, name?: string | null, shopName?: string | null, address?: string | null, shopLogo?: string | null, code?: string | null, shopType?: EShopType | null, legalEntityType?: ELegalEntityType | null, district?: string | null, provinceId?: string | null, wardId?: string | null, phone?: string | null } | null } | null };

export type LoginStaffMutationVariables = Exact<{
  memberCode: Scalars['String']['input'];
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type LoginStaffMutation = { loginStaff?: { __typename?: 'LoginStaffData', token?: string | null, staff?: { __typename?: 'Staff', id?: string | null, name?: string | null, phone?: string | null, memberId?: string | null, scopes?: Array<string | null> | null, username?: string | null, code?: string | null, branchId?: string | null, avatar?: string | null, branch?: { __typename?: 'ShopBranch', code?: string | null, name?: string | null } | null, member?: { __typename?: 'Member', shopName?: string | null } | null } | null } | null };

export type MemberGetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type MemberGetMeQuery = { memberGetMe?: { __typename?: 'Member', username?: string | null, type?: string | null, taxCode?: string | null, shopName?: string | null, shopType?: EShopType | null, shopLogo?: string | null, phone?: string | null, name?: string | null, id?: string | null, gender?: string | null, avatar?: string | null, address?: string | null, activated?: boolean | null, code?: string | null } | null };

export type StaffGetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type StaffGetMeQuery = { staffGetMe?: { __typename?: 'Staff', username?: string | null, scopes?: Array<string | null> | null, shopBranchIds?: Array<string | null> | null, phone?: string | null, name?: string | null, memberId?: string | null, id?: string | null, code?: string | null, branchId?: string | null, avatar?: string | null, staffPermissions?: Array<{ __typename?: 'StaffPermission', staffId?: string | null, id?: string | null, createdAt?: any | null, memberId?: string | null, permissionType?: EPermissionType | null, shopBranchId?: string | null, permissions?: Array<{ __typename?: 'StaffPermissionGroup', scopeGroup: EStaffPermissionScopeGroup, permissionScopes?: Array<EStaffPermissionScope | null> | null } | null> | null, shopBranch?: { __typename?: 'ShopBranch', phone?: string | null, id?: string | null, code?: string | null, name?: string | null } | null } | null> | null, member?: { __typename?: 'Member', type?: string | null, username?: string | null, taxCode?: string | null, shopName?: string | null, shopLogo?: string | null, shopCover?: string | null, phone?: string | null, name?: string | null, id?: string | null, code?: string | null, address?: string | null } | null, branch?: { __typename?: 'ShopBranch', id?: string | null, code?: string | null, name?: string | null } | null } | null };

export type GenerateUploadUrlMutationVariables = Exact<{
  contentType: Scalars['String']['input'];
}>;


export type GenerateUploadUrlMutation = { generateUploadUrl?: { __typename?: 'S3Url', presignedUrl?: string | null, url?: string | null } | null };

export type GenerateDraftOrderMutationVariables = Exact<{
  data: CreateDraftOrderInput;
}>;


export type GenerateDraftOrderMutation = { generateDraftOrder?: { __typename?: 'DraftOrderData', invalid?: boolean | null, invalidReason?: string | null, order?: { __typename?: 'Order', id?: string | null, createdAt?: any | null, updatedAt?: any | null, parentOrderId?: string | null, parentOrderCode?: string | null, splitCount?: number | null, code?: string | null, isPrimary?: boolean | null, itemIds?: Array<string | null> | null, amount?: number | null, subtotal?: number | null, toppingAmount?: number | null, customerShipMethod?: EShipMethod | null, customerShipServiceId?: string | null, customerShipServiceName?: string | null, customerShipDeliveryName?: string | null, shopShipMethod?: EShipMethod | null, shopShipServiceId?: string | null, shopShipServiceName?: string | null, shopShipRequestIds?: Array<string | null> | null, shipMethod?: EShipMethod | null, shipServiceId?: string | null, shipfee?: number | null, shopShipFee?: number | null, shipDistance?: number | null, valueAddedTaxAmount?: number | null, hasValueAddedTax?: boolean | null, originSubTotal?: number | null, voucherDiscount?: number | null, rewardPointDiscount?: number | null, productPricePolicyDiscount?: number | null, productAffiliateLevelDiscount?: number | null, discount?: number | null, paymentMethod?: EPaymentMethod | null, note?: string | null, shopNote?: string | null, confirmNote?: string | null, paymentConfirmNote?: string | null, itemCount?: number | null, sellerId?: string | null, sellerCode?: string | null, sellerName?: string | null, fromMemberId?: string | null, status?: string | null, customerShipDeliveryIcon?: string | null, customerShipServiceIcon?: string | null, buyerId?: string | null, buyerName?: string | null, buyerPhone?: string | null, buyerAddress?: string | null, buyerProvince?: string | null, buyerDistrict?: string | null, buyerWard?: string | null, buyerProvinceId?: string | null, buyerDistrictId?: string | null, buyerWardId?: string | null, buyerFullAddress?: string | null, buyerAddressNote?: string | null, receiverId?: string | null, receiverName?: string | null, receiverPhone?: string | null, receiverAddress?: string | null, receiverProvince?: string | null, receiverDistrict?: string | null, receiverWard?: string | null, receiverProvinceId?: string | null, receiverDistrictId?: string | null, receiverWardId?: string | null, receiverFullAddress?: string | null, receiverAddressNote?: string | null, ordererType?: EOrdererType | null, ordererStaffId?: string | null, sellerBonusPoint?: number | null, buyerBonusPoint?: number | null, addressStorehouseId?: string | null, addressDeliveryId?: string | null, paymentMethodText?: string | null, shipMethodText?: string | null, statusText?: string | null, collaboratorId?: string | null, isUrbanDelivery?: boolean | null, toMemberId?: string | null, toMemberNote?: string | null, mustTransfer?: boolean | null, latitude?: number | null, longitude?: number | null, updatedByUserId?: string | null, orderType?: string | null, orderTypeText?: string | null, pickupMethod?: EPickupMethod | null, pickupTime?: any | null, shopBranchId?: string | null, shopBranchAddress?: string | null, voucherId?: string | null, discountDetail?: string | null, promotionCode?: string | null, rewardPoint?: number | null, useRewardPoint?: boolean | null, remainRewardPoint?: number | null, discountPoint?: number | null, maxUseRewardPoint?: number | null, itemText?: string | null, tableCode?: string | null, mbQrCode?: string | null, haveIssueInvoice?: boolean | null, tableId?: string | null, tableName?: string | null, referralCode?: string | null, items?: Array<{ __typename?: 'OrderItem', id?: string | null, basePrice?: number | null, amount?: number | null, qty?: number | null, note?: string | null, valueAddedTaxAmount?: number | null, valueAddedTaxRate?: number | null, valueAddedTaxRateCode?: EInvoiceTaxRateCode | null, unit?: string | null, totalAmountPerItem?: number | null, productAttributeElements?: Array<{ __typename?: 'OrderItemProductAttributeElement', productAttributeName?: string | null, productAttributeId?: string | null, productAttributeCode?: string | null, productAttributeElementCode?: string | null, productAttributeElementId?: string | null, productAttributeElementName?: string | null, productAttributeElementPrice?: number | null, productAttributeElementUnit?: string | null } | null> | null } | null> | null, buyer?: { __typename?: 'Customer', avatar?: string | null, id?: string | null, name?: string | null, phone?: string | null } | null, shopBranch?: { __typename?: 'ShopBranch', id?: string | null, code?: string | null, name?: string | null } | null, voucher?: { __typename?: 'ShopVoucher', code?: string | null } | null, table?: { __typename?: 'Table', id?: string | null, name?: string | null, seatNumber?: number | null, status?: ETableStatus | null, description?: string | null, shopBranchId?: string | null, shopBranch?: { __typename?: 'ShopBranch', name?: string | null, code?: string | null } | null } | null } | null } | null };

export type GenerateOrderMutationVariables = Exact<{
  data: CreateDraftOrderInput;
}>;


export type GenerateOrderMutation = { generateOrder?: { __typename?: 'Order', id?: string | null, createdAt?: any | null, updatedAt?: any | null, parentOrderId?: string | null, parentOrderCode?: string | null, splitCount?: number | null, code?: string | null, isPrimary?: boolean | null, itemIds?: Array<string | null> | null, amount?: number | null, subtotal?: number | null, toppingAmount?: number | null, customerShipMethod?: EShipMethod | null, customerShipServiceId?: string | null, customerShipServiceName?: string | null, customerShipDeliveryName?: string | null, shopShipMethod?: EShipMethod | null, shopShipServiceId?: string | null, shopShipServiceName?: string | null, shopShipRequestIds?: Array<string | null> | null, shipMethod?: EShipMethod | null, shipServiceId?: string | null, shipfee?: number | null, shopShipFee?: number | null, shipDistance?: number | null, valueAddedTaxAmount?: number | null, hasValueAddedTax?: boolean | null, originSubTotal?: number | null, voucherDiscount?: number | null, rewardPointDiscount?: number | null, productPricePolicyDiscount?: number | null, productAffiliateLevelDiscount?: number | null, discount?: number | null, paymentMethod?: EPaymentMethod | null, note?: string | null, shopNote?: string | null, confirmNote?: string | null, paymentConfirmNote?: string | null, itemCount?: number | null, sellerId?: string | null, sellerCode?: string | null, sellerName?: string | null, fromMemberId?: string | null, status?: string | null, customerShipDeliveryIcon?: string | null, customerShipServiceIcon?: string | null, buyerId?: string | null, buyerName?: string | null, buyerPhone?: string | null, buyerAddress?: string | null, buyerProvince?: string | null, buyerDistrict?: string | null, buyerWard?: string | null, buyerProvinceId?: string | null, buyerDistrictId?: string | null, buyerWardId?: string | null, buyerFullAddress?: string | null, buyerAddressNote?: string | null, receiverId?: string | null, receiverName?: string | null, receiverPhone?: string | null, receiverAddress?: string | null, receiverProvince?: string | null, receiverDistrict?: string | null, receiverWard?: string | null, receiverProvinceId?: string | null, receiverDistrictId?: string | null, receiverWardId?: string | null, receiverFullAddress?: string | null, receiverAddressNote?: string | null, ordererType?: EOrdererType | null, ordererStaffId?: string | null, sellerBonusPoint?: number | null, buyerBonusPoint?: number | null, addressStorehouseId?: string | null, addressDeliveryId?: string | null, paymentMethodText?: string | null, shipMethodText?: string | null, statusText?: string | null, collaboratorId?: string | null, isUrbanDelivery?: boolean | null, toMemberId?: string | null, toMemberNote?: string | null, mustTransfer?: boolean | null, latitude?: number | null, longitude?: number | null, updatedByUserId?: string | null, orderType?: string | null, orderTypeText?: string | null, pickupMethod?: EPickupMethod | null, pickupTime?: any | null, shopBranchId?: string | null, shopBranchAddress?: string | null, voucherId?: string | null, discountDetail?: string | null, promotionCode?: string | null, rewardPoint?: number | null, useRewardPoint?: boolean | null, remainRewardPoint?: number | null, discountPoint?: number | null, maxUseRewardPoint?: number | null, itemText?: string | null, tableCode?: string | null, mbQrCode?: string | null, haveIssueInvoice?: boolean | null, tableId?: string | null, tableName?: string | null, referralCode?: string | null, items?: Array<{ __typename?: 'OrderItem', id?: string | null, basePrice?: number | null, amount?: number | null, qty?: number | null, note?: string | null, valueAddedTaxAmount?: number | null, valueAddedTaxRate?: number | null, valueAddedTaxRateCode?: EInvoiceTaxRateCode | null, unit?: string | null, totalAmountPerItem?: number | null, productAttributeElements?: Array<{ __typename?: 'OrderItemProductAttributeElement', productAttributeName?: string | null, productAttributeId?: string | null, productAttributeCode?: string | null, productAttributeElementCode?: string | null, productAttributeElementId?: string | null, productAttributeElementName?: string | null, productAttributeElementPrice?: number | null, productAttributeElementUnit?: string | null } | null> | null } | null> | null, buyer?: { __typename?: 'Customer', avatar?: string | null, id?: string | null, name?: string | null, phone?: string | null } | null, shopBranch?: { __typename?: 'ShopBranch', id?: string | null, code?: string | null, name?: string | null } | null, voucher?: { __typename?: 'ShopVoucher', code?: string | null } | null, table?: { __typename?: 'Table', id?: string | null, name?: string | null, seatNumber?: number | null, status?: ETableStatus | null, description?: string | null, shopBranchId?: string | null, shopBranch?: { __typename?: 'ShopBranch', name?: string | null, code?: string | null } | null } | null } | null };

export type GetAllShopBranchQueryVariables = Exact<{
  q?: InputMaybe<QueryGetListInput>;
  staffPermissionScope?: InputMaybe<EStaffPermissionScope>;
}>;


export type GetAllShopBranchQuery = { getAllShopBranch?: { __typename?: 'ShopBranchPageData', total?: number | null, data?: Array<{ __typename?: 'ShopBranch', id?: string | null, code?: string | null, name?: string | null, phone?: string | null, email?: string | null, address?: string | null, wardId?: string | null, districtId?: string | null, provinceId?: string | null, province?: string | null, district?: string | null, ward?: string | null, activated?: boolean | null, location?: any | null, isOpen?: boolean | null } | null> | null, pagination?: { __typename?: 'Pagination', limit?: any | null, offset?: number | null, page?: number | null, total?: number | null } | null } | null };


export const RegisterMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterMemberInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shopName"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"shopLogo"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"shopType"}},{"kind":"Field","name":{"kind":"Name","value":"legalEntityType"}},{"kind":"Field","name":{"kind":"Name","value":"district"}},{"kind":"Field","name":{"kind":"Name","value":"provinceId"}},{"kind":"Field","name":{"kind":"Name","value":"wardId"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]} as unknown as DocumentNode<RegisterMemberMutation, RegisterMemberMutationVariables>;
export const LoginMemberByPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginMemberByPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deviceToken"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deviceId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginMemberByPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"deviceToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deviceToken"}}},{"kind":"Argument","name":{"kind":"Name","value":"deviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deviceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shopName"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"shopLogo"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"shopType"}},{"kind":"Field","name":{"kind":"Name","value":"legalEntityType"}},{"kind":"Field","name":{"kind":"Name","value":"district"}},{"kind":"Field","name":{"kind":"Name","value":"provinceId"}},{"kind":"Field","name":{"kind":"Name","value":"wardId"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMemberByPasswordMutation, LoginMemberByPasswordMutationVariables>;
export const LoginStaffDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginStaff"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memberCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deviceId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deviceToken"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginStaff"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"memberCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memberCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"deviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deviceId"}}},{"kind":"Argument","name":{"kind":"Name","value":"deviceToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deviceToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staff"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"scopes"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"branchId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shopName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginStaffMutation, LoginStaffMutationVariables>;
export const MemberGetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MemberGetMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberGetMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"taxCode"}},{"kind":"Field","name":{"kind":"Name","value":"shopName"}},{"kind":"Field","name":{"kind":"Name","value":"shopType"}},{"kind":"Field","name":{"kind":"Name","value":"shopLogo"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"activated"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<MemberGetMeQuery, MemberGetMeQueryVariables>;
export const StaffGetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StaffGetMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staffGetMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"scopes"}},{"kind":"Field","name":{"kind":"Name","value":"shopBranchIds"}},{"kind":"Field","name":{"kind":"Name","value":"staffPermissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staffId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"permissionType"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scopeGroup"}},{"kind":"Field","name":{"kind":"Name","value":"permissionScopes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shopBranchId"}},{"kind":"Field","name":{"kind":"Name","value":"shopBranch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"taxCode"}},{"kind":"Field","name":{"kind":"Name","value":"shopName"}},{"kind":"Field","name":{"kind":"Name","value":"shopLogo"}},{"kind":"Field","name":{"kind":"Name","value":"shopCover"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"branchId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<StaffGetMeQuery, StaffGetMeQueryVariables>;
export const GenerateUploadUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateUploadUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contentType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateUploadUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contentType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contentType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"presignedUrl"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<GenerateUploadUrlMutation, GenerateUploadUrlMutationVariables>;
export const GenerateDraftOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateDraftOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateDraftOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateDraftOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invalid"}},{"kind":"Field","name":{"kind":"Name","value":"invalidReason"}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"parentOrderId"}},{"kind":"Field","name":{"kind":"Name","value":"parentOrderCode"}},{"kind":"Field","name":{"kind":"Name","value":"splitCount"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"isPrimary"}},{"kind":"Field","name":{"kind":"Name","value":"itemIds"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"subtotal"}},{"kind":"Field","name":{"kind":"Name","value":"toppingAmount"}},{"kind":"Field","name":{"kind":"Name","value":"customerShipMethod"}},{"kind":"Field","name":{"kind":"Name","value":"customerShipServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"customerShipServiceName"}},{"kind":"Field","name":{"kind":"Name","value":"customerShipDeliveryName"}},{"kind":"Field","name":{"kind":"Name","value":"shopShipMethod"}},{"kind":"Field","name":{"kind":"Name","value":"shopShipServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"shopShipServiceName"}},{"kind":"Field","name":{"kind":"Name","value":"shopShipRequestIds"}},{"kind":"Field","name":{"kind":"Name","value":"shipMethod"}},{"kind":"Field","name":{"kind":"Name","value":"shipServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"shipfee"}},{"kind":"Field","name":{"kind":"Name","value":"shopShipFee"}},{"kind":"Field","name":{"kind":"Name","value":"shipDistance"}},{"kind":"Field","name":{"kind":"Name","value":"valueAddedTaxAmount"}},{"kind":"Field","name":{"kind":"Name","value":"hasValueAddedTax"}},{"kind":"Field","name":{"kind":"Name","value":"originSubTotal"}},{"kind":"Field","name":{"kind":"Name","value":"voucherDiscount"}},{"kind":"Field","name":{"kind":"Name","value":"rewardPointDiscount"}},{"kind":"Field","name":{"kind":"Name","value":"productPricePolicyDiscount"}},{"kind":"Field","name":{"kind":"Name","value":"productAffiliateLevelDiscount"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"shopNote"}},{"kind":"Field","name":{"kind":"Name","value":"confirmNote"}},{"kind":"Field","name":{"kind":"Name","value":"paymentConfirmNote"}},{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"sellerId"}},{"kind":"Field","name":{"kind":"Name","value":"sellerCode"}},{"kind":"Field","name":{"kind":"Name","value":"sellerName"}},{"kind":"Field","name":{"kind":"Name","value":"fromMemberId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"customerShipDeliveryIcon"}},{"kind":"Field","name":{"kind":"Name","value":"customerShipServiceIcon"}},{"kind":"Field","name":{"kind":"Name","value":"buyerId"}},{"kind":"Field","name":{"kind":"Name","value":"buyerName"}},{"kind":"Field","name":{"kind":"Name","value":"buyerPhone"}},{"kind":"Field","name":{"kind":"Name","value":"buyerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"buyerProvince"}},{"kind":"Field","name":{"kind":"Name","value":"buyerDistrict"}},{"kind":"Field","name":{"kind":"Name","value":"buyerWard"}},{"kind":"Field","name":{"kind":"Name","value":"buyerProvinceId"}},{"kind":"Field","name":{"kind":"Name","value":"buyerDistrictId"}},{"kind":"Field","name":{"kind":"Name","value":"buyerWardId"}},{"kind":"Field","name":{"kind":"Name","value":"buyerFullAddress"}},{"kind":"Field","name":{"kind":"Name","value":"buyerAddressNote"}},{"kind":"Field","name":{"kind":"Name","value":"receiverId"}},{"kind":"Field","name":{"kind":"Name","value":"receiverName"}},{"kind":"Field","name":{"kind":"Name","value":"receiverPhone"}},{"kind":"Field","name":{"kind":"Name","value":"receiverAddress"}},{"kind":"Field","name":{"kind":"Name","value":"receiverProvince"}},{"kind":"Field","name":{"kind":"Name","value":"receiverDistrict"}},{"kind":"Field","name":{"kind":"Name","value":"receiverWard"}},{"kind":"Field","name":{"kind":"Name","value":"receiverProvinceId"}},{"kind":"Field","name":{"kind":"Name","value":"receiverDistrictId"}},{"kind":"Field","name":{"kind":"Name","value":"receiverWardId"}},{"kind":"Field","name":{"kind":"Name","value":"receiverFullAddress"}},{"kind":"Field","name":{"kind":"Name","value":"receiverAddressNote"}},{"kind":"Field","name":{"kind":"Name","value":"ordererType"}},{"kind":"Field","name":{"kind":"Name","value":"ordererStaffId"}},{"kind":"Field","name":{"kind":"Name","value":"sellerBonusPoint"}},{"kind":"Field","name":{"kind":"Name","value":"buyerBonusPoint"}},{"kind":"Field","name":{"kind":"Name","value":"addressStorehouseId"}},{"kind":"Field","name":{"kind":"Name","value":"addressDeliveryId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodText"}},{"kind":"Field","name":{"kind":"Name","value":"shipMethodText"}},{"kind":"Field","name":{"kind":"Name","value":"statusText"}},{"kind":"Field","name":{"kind":"Name","value":"collaboratorId"}},{"kind":"Field","name":{"kind":"Name","value":"isUrbanDelivery"}},{"kind":"Field","name":{"kind":"Name","value":"toMemberId"}},{"kind":"Field","name":{"kind":"Name","value":"toMemberNote"}},{"kind":"Field","name":{"kind":"Name","value":"mustTransfer"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"basePrice"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"qty"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"valueAddedTaxAmount"}},{"kind":"Field","name":{"kind":"Name","value":"valueAddedTaxRate"}},{"kind":"Field","name":{"kind":"Name","value":"valueAddedTaxRateCode"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"productAttributeElements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productAttributeName"}},{"kind":"Field","name":{"kind":"Name","value":"productAttributeId"}},{"kind":"Field","name":{"kind":"Name","value":"productAttributeCode"}},{"kind":"Field","name":{"kind":"Name","value":"productAttributeElementCode"}},{"kind":"Field","name":{"kind":"Name","value":"productAttributeElementId"}},{"kind":"Field","name":{"kind":"Name","value":"productAttributeElementName"}},{"kind":"Field","name":{"kind":"Name","value":"productAttributeElementPrice"}},{"kind":"Field","name":{"kind":"Name","value":"productAttributeElementUnit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalAmountPerItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buyer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedByUserId"}},{"kind":"Field","name":{"kind":"Name","value":"orderType"}},{"kind":"Field","name":{"kind":"Name","value":"orderTypeText"}},{"kind":"Field","name":{"kind":"Name","value":"pickupMethod"}},{"kind":"Field","name":{"kind":"Name","value":"pickupTime"}},{"kind":"Field","name":{"kind":"Name","value":"shopBranchId"}},{"kind":"Field","name":{"kind":"Name","value":"shopBranchAddress"}},{"kind":"Field","name":{"kind":"Name","value":"shopBranch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"voucherId"}},{"kind":"Field","name":{"kind":"Name","value":"voucher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discountDetail"}},{"kind":"Field","name":{"kind":"Name","value":"promotionCode"}},{"kind":"Field","name":{"kind":"Name","value":"rewardPoint"}},{"kind":"Field","name":{"kind":"Name","value":"useRewardPoint"}},{"kind":"Field","name":{"kind":"Name","value":"remainRewardPoint"}},{"kind":"Field","name":{"kind":"Name","value":"discountPoint"}},{"kind":"Field","name":{"kind":"Name","value":"maxUseRewardPoint"}},{"kind":"Field","name":{"kind":"Name","value":"itemText"}},{"kind":"Field","name":{"kind":"Name","value":"tableCode"}},{"kind":"Field","name":{"kind":"Name","value":"mbQrCode"}},{"kind":"Field","name":{"kind":"Name","value":"haveIssueInvoice"}},{"kind":"Field","name":{"kind":"Name","value":"tableId"}},{"kind":"Field","name":{"kind":"Name","value":"tableName"}},{"kind":"Field","name":{"kind":"Name","value":"table"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"seatNumber"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"shopBranchId"}},{"kind":"Field","name":{"kind":"Name","value":"shopBranch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"referralCode"}}]}}]}}]}}]} as unknown as DocumentNode<GenerateDraftOrderMutation, GenerateDraftOrderMutationVariables>;
export const GenerateOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateDraftOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"parentOrderId"}},{"kind":"Field","name":{"kind":"Name","value":"parentOrderCode"}},{"kind":"Field","name":{"kind":"Name","value":"splitCount"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"isPrimary"}},{"kind":"Field","name":{"kind":"Name","value":"itemIds"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"subtotal"}},{"kind":"Field","name":{"kind":"Name","value":"toppingAmount"}},{"kind":"Field","name":{"kind":"Name","value":"customerShipMethod"}},{"kind":"Field","name":{"kind":"Name","value":"customerShipServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"customerShipServiceName"}},{"kind":"Field","name":{"kind":"Name","value":"customerShipDeliveryName"}},{"kind":"Field","name":{"kind":"Name","value":"shopShipMethod"}},{"kind":"Field","name":{"kind":"Name","value":"shopShipServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"shopShipServiceName"}},{"kind":"Field","name":{"kind":"Name","value":"shopShipRequestIds"}},{"kind":"Field","name":{"kind":"Name","value":"shipMethod"}},{"kind":"Field","name":{"kind":"Name","value":"shipServiceId"}},{"kind":"Field","name":{"kind":"Name","value":"shipfee"}},{"kind":"Field","name":{"kind":"Name","value":"shopShipFee"}},{"kind":"Field","name":{"kind":"Name","value":"shipDistance"}},{"kind":"Field","name":{"kind":"Name","value":"valueAddedTaxAmount"}},{"kind":"Field","name":{"kind":"Name","value":"hasValueAddedTax"}},{"kind":"Field","name":{"kind":"Name","value":"originSubTotal"}},{"kind":"Field","name":{"kind":"Name","value":"voucherDiscount"}},{"kind":"Field","name":{"kind":"Name","value":"rewardPointDiscount"}},{"kind":"Field","name":{"kind":"Name","value":"productPricePolicyDiscount"}},{"kind":"Field","name":{"kind":"Name","value":"productAffiliateLevelDiscount"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"shopNote"}},{"kind":"Field","name":{"kind":"Name","value":"confirmNote"}},{"kind":"Field","name":{"kind":"Name","value":"paymentConfirmNote"}},{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"sellerId"}},{"kind":"Field","name":{"kind":"Name","value":"sellerCode"}},{"kind":"Field","name":{"kind":"Name","value":"sellerName"}},{"kind":"Field","name":{"kind":"Name","value":"fromMemberId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"customerShipDeliveryIcon"}},{"kind":"Field","name":{"kind":"Name","value":"customerShipServiceIcon"}},{"kind":"Field","name":{"kind":"Name","value":"buyerId"}},{"kind":"Field","name":{"kind":"Name","value":"buyerName"}},{"kind":"Field","name":{"kind":"Name","value":"buyerPhone"}},{"kind":"Field","name":{"kind":"Name","value":"buyerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"buyerProvince"}},{"kind":"Field","name":{"kind":"Name","value":"buyerDistrict"}},{"kind":"Field","name":{"kind":"Name","value":"buyerWard"}},{"kind":"Field","name":{"kind":"Name","value":"buyerProvinceId"}},{"kind":"Field","name":{"kind":"Name","value":"buyerDistrictId"}},{"kind":"Field","name":{"kind":"Name","value":"buyerWardId"}},{"kind":"Field","name":{"kind":"Name","value":"buyerFullAddress"}},{"kind":"Field","name":{"kind":"Name","value":"buyerAddressNote"}},{"kind":"Field","name":{"kind":"Name","value":"receiverId"}},{"kind":"Field","name":{"kind":"Name","value":"receiverName"}},{"kind":"Field","name":{"kind":"Name","value":"receiverPhone"}},{"kind":"Field","name":{"kind":"Name","value":"receiverAddress"}},{"kind":"Field","name":{"kind":"Name","value":"receiverProvince"}},{"kind":"Field","name":{"kind":"Name","value":"receiverDistrict"}},{"kind":"Field","name":{"kind":"Name","value":"receiverWard"}},{"kind":"Field","name":{"kind":"Name","value":"receiverProvinceId"}},{"kind":"Field","name":{"kind":"Name","value":"receiverDistrictId"}},{"kind":"Field","name":{"kind":"Name","value":"receiverWardId"}},{"kind":"Field","name":{"kind":"Name","value":"receiverFullAddress"}},{"kind":"Field","name":{"kind":"Name","value":"receiverAddressNote"}},{"kind":"Field","name":{"kind":"Name","value":"ordererType"}},{"kind":"Field","name":{"kind":"Name","value":"ordererStaffId"}},{"kind":"Field","name":{"kind":"Name","value":"sellerBonusPoint"}},{"kind":"Field","name":{"kind":"Name","value":"buyerBonusPoint"}},{"kind":"Field","name":{"kind":"Name","value":"addressStorehouseId"}},{"kind":"Field","name":{"kind":"Name","value":"addressDeliveryId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodText"}},{"kind":"Field","name":{"kind":"Name","value":"shipMethodText"}},{"kind":"Field","name":{"kind":"Name","value":"statusText"}},{"kind":"Field","name":{"kind":"Name","value":"collaboratorId"}},{"kind":"Field","name":{"kind":"Name","value":"isUrbanDelivery"}},{"kind":"Field","name":{"kind":"Name","value":"toMemberId"}},{"kind":"Field","name":{"kind":"Name","value":"toMemberNote"}},{"kind":"Field","name":{"kind":"Name","value":"mustTransfer"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"basePrice"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"qty"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"valueAddedTaxAmount"}},{"kind":"Field","name":{"kind":"Name","value":"valueAddedTaxRate"}},{"kind":"Field","name":{"kind":"Name","value":"valueAddedTaxRateCode"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"productAttributeElements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productAttributeName"}},{"kind":"Field","name":{"kind":"Name","value":"productAttributeId"}},{"kind":"Field","name":{"kind":"Name","value":"productAttributeCode"}},{"kind":"Field","name":{"kind":"Name","value":"productAttributeElementCode"}},{"kind":"Field","name":{"kind":"Name","value":"productAttributeElementId"}},{"kind":"Field","name":{"kind":"Name","value":"productAttributeElementName"}},{"kind":"Field","name":{"kind":"Name","value":"productAttributeElementPrice"}},{"kind":"Field","name":{"kind":"Name","value":"productAttributeElementUnit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalAmountPerItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buyer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedByUserId"}},{"kind":"Field","name":{"kind":"Name","value":"orderType"}},{"kind":"Field","name":{"kind":"Name","value":"orderTypeText"}},{"kind":"Field","name":{"kind":"Name","value":"pickupMethod"}},{"kind":"Field","name":{"kind":"Name","value":"pickupTime"}},{"kind":"Field","name":{"kind":"Name","value":"shopBranchId"}},{"kind":"Field","name":{"kind":"Name","value":"shopBranchAddress"}},{"kind":"Field","name":{"kind":"Name","value":"shopBranch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"voucherId"}},{"kind":"Field","name":{"kind":"Name","value":"voucher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discountDetail"}},{"kind":"Field","name":{"kind":"Name","value":"promotionCode"}},{"kind":"Field","name":{"kind":"Name","value":"rewardPoint"}},{"kind":"Field","name":{"kind":"Name","value":"useRewardPoint"}},{"kind":"Field","name":{"kind":"Name","value":"remainRewardPoint"}},{"kind":"Field","name":{"kind":"Name","value":"discountPoint"}},{"kind":"Field","name":{"kind":"Name","value":"maxUseRewardPoint"}},{"kind":"Field","name":{"kind":"Name","value":"itemText"}},{"kind":"Field","name":{"kind":"Name","value":"tableCode"}},{"kind":"Field","name":{"kind":"Name","value":"mbQrCode"}},{"kind":"Field","name":{"kind":"Name","value":"haveIssueInvoice"}},{"kind":"Field","name":{"kind":"Name","value":"tableId"}},{"kind":"Field","name":{"kind":"Name","value":"tableName"}},{"kind":"Field","name":{"kind":"Name","value":"table"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"seatNumber"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"shopBranchId"}},{"kind":"Field","name":{"kind":"Name","value":"shopBranch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"referralCode"}}]}}]}}]} as unknown as DocumentNode<GenerateOrderMutation, GenerateOrderMutationVariables>;
export const GetAllShopBranchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllShopBranch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"q"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"QueryGetListInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"staffPermissionScope"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EStaffPermissionScope"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllShopBranch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"q"},"value":{"kind":"Variable","name":{"kind":"Name","value":"q"}}},{"kind":"Argument","name":{"kind":"Name","value":"staffPermissionScope"},"value":{"kind":"Variable","name":{"kind":"Name","value":"staffPermissionScope"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"wardId"}},{"kind":"Field","name":{"kind":"Name","value":"districtId"}},{"kind":"Field","name":{"kind":"Name","value":"provinceId"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"district"}},{"kind":"Field","name":{"kind":"Name","value":"ward"}},{"kind":"Field","name":{"kind":"Name","value":"activated"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"isOpen"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<GetAllShopBranchQuery, GetAllShopBranchQueryVariables>;