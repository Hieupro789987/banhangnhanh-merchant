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

export type Branch = {
  __typename?: 'Branch';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
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

export enum ELegalEntityType {
  COMPANY = 'COMPANY',
  COOPERATIVE = 'COOPERATIVE',
  HOUSEHOLD_BUSINESS = 'HOUSEHOLD_BUSINESS',
  INDIVIDUAL = 'INDIVIDUAL'
}

export enum EPermissionType {
  SHOP = 'SHOP',
  SHOP_BRANCH = 'SHOP_BRANCH'
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

export type Mutation = {
  __typename?: 'Mutation';
  generateUploadUrl?: Maybe<S3Url>;
  loginMemberByPassword?: Maybe<MemberLoginData>;
  loginStaff?: Maybe<LoginStaffData>;
  registerMember?: Maybe<Member>;
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

export type Query = {
  __typename?: 'Query';
  customerGetMe?: Maybe<Customer>;
  memberGetMe?: Maybe<Member>;
  staffGetMe?: Maybe<Staff>;
};

export type QueryGetListInput = {
  filter?: InputMaybe<Scalars['Mixed']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Mixed']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
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

export type S3Url = {
  __typename?: 'S3Url';
  presignedUrl?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ShopBranch = {
  __typename?: 'ShopBranch';
  /** hiệu lực hay không hiệu lực */
  activated?: Maybe<Scalars['Boolean']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  /** Hình ảnh cover */
  coverImage?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Quận/huyện */
  district?: Maybe<Scalars['String']['output']>;
  /** Mã Quận/huyện */
  districtId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  /** Mở cửa */
  isOpen?: Maybe<Scalars['Boolean']['output']>;
  /** Toạ độ */
  location?: Maybe<Scalars['Mixed']['output']>;
  memberId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  /** Tỉnh/thành */
  province?: Maybe<Scalars['String']['output']>;
  /** Mã Tỉnh/thành */
  provinceId?: Maybe<Scalars['String']['output']>;
  /** Khoản cách giao hàng mặc định */
  shipDefaultDistance?: Maybe<Scalars['Int']['output']>;
  /** Phí giao hàng mặc định */
  shipDefaultFee?: Maybe<Scalars['Float']['output']>;
  /** Phí ship cộng thêm mỗi km */
  shipNextFee?: Maybe<Scalars['Float']['output']>;
  shipNote?: Maybe<Scalars['String']['output']>;
  /** Phí ship dưới 1 km */
  shipOneKmFee?: Maybe<Scalars['Float']['output']>;
  /** Thời gian chuẩn bị */
  shipPreparationTime?: Maybe<Scalars['String']['output']>;
  /** Bật phí ship dưới 1 km */
  shipUseOneKmFee?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Phường/xã */
  ward?: Maybe<Scalars['String']['output']>;
  wardId?: Maybe<Scalars['String']['output']>;
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
  /** Mã chủ shop */
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
  /** Phạm vi phân quyền */
  permissionScopes?: Maybe<Array<Maybe<EStaffPermissionScope>>>;
  /** Nhóm phạm vi phân quyền */
  scopeGroup: EStaffPermissionScopeGroup;
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


export const RegisterMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterMemberInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shopName"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"shopLogo"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"shopType"}},{"kind":"Field","name":{"kind":"Name","value":"legalEntityType"}},{"kind":"Field","name":{"kind":"Name","value":"district"}},{"kind":"Field","name":{"kind":"Name","value":"provinceId"}},{"kind":"Field","name":{"kind":"Name","value":"wardId"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]} as unknown as DocumentNode<RegisterMemberMutation, RegisterMemberMutationVariables>;
export const LoginMemberByPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginMemberByPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deviceToken"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deviceId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginMemberByPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"deviceToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deviceToken"}}},{"kind":"Argument","name":{"kind":"Name","value":"deviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deviceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shopName"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"shopLogo"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"shopType"}},{"kind":"Field","name":{"kind":"Name","value":"legalEntityType"}},{"kind":"Field","name":{"kind":"Name","value":"district"}},{"kind":"Field","name":{"kind":"Name","value":"provinceId"}},{"kind":"Field","name":{"kind":"Name","value":"wardId"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMemberByPasswordMutation, LoginMemberByPasswordMutationVariables>;
export const LoginStaffDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginStaff"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memberCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deviceId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deviceToken"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginStaff"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"memberCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memberCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"deviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deviceId"}}},{"kind":"Argument","name":{"kind":"Name","value":"deviceToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deviceToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staff"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"scopes"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"branchId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shopName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginStaffMutation, LoginStaffMutationVariables>;
export const MemberGetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MemberGetMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberGetMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"taxCode"}},{"kind":"Field","name":{"kind":"Name","value":"shopName"}},{"kind":"Field","name":{"kind":"Name","value":"shopType"}},{"kind":"Field","name":{"kind":"Name","value":"shopLogo"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"activated"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<MemberGetMeQuery, MemberGetMeQueryVariables>;
export const StaffGetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StaffGetMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staffGetMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"scopes"}},{"kind":"Field","name":{"kind":"Name","value":"shopBranchIds"}},{"kind":"Field","name":{"kind":"Name","value":"staffPermissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staffId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"permissionType"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scopeGroup"}},{"kind":"Field","name":{"kind":"Name","value":"permissionScopes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shopBranchId"}},{"kind":"Field","name":{"kind":"Name","value":"shopBranch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"taxCode"}},{"kind":"Field","name":{"kind":"Name","value":"shopName"}},{"kind":"Field","name":{"kind":"Name","value":"shopLogo"}},{"kind":"Field","name":{"kind":"Name","value":"shopCover"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"branchId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"branch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<StaffGetMeQuery, StaffGetMeQueryVariables>;
export const GenerateUploadUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateUploadUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contentType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateUploadUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"contentType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contentType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"presignedUrl"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<GenerateUploadUrlMutation, GenerateUploadUrlMutationVariables>;