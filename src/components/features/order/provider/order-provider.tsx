import {
  CreateDraftOrderInput,
  DraftOrderData,
  EShipMethod,
  GenerateDraftOrderDocument,
  generateMacZaloMiniAppDocument,
  GenerateOrderDocument,
  Order,
  OrderItem,
  OrderItemInput,
  OrderItemProductAttributeElement,
  Product,
} from "@/generated/graphql";
import { useMutation } from "@apollo/client/react";
import React, {
  createContext,
  useContext,
  useCallback,
  useReducer,
  useEffect,
} from "react";
import { createOrder } from "zmp-sdk/apis";
import { useNavigate } from "react-router-dom";

interface OrderState {
  orderDataInput: CreateDraftOrderInput;
  draftOrder: DraftOrderData | null;
  finalOrder: Order | null;
  loading: boolean;
  error: string | null | undefined;
}

type OrderAction =
  | { type: "UPDATE_ORDER_INPUT"; payload: Partial<CreateDraftOrderInput> }
  | { type: "SET_DRAFT_ORDER"; payload: DraftOrderData }
  | { type: "SET_FINAL_ORDER"; payload: Order }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "RESET_ORDER" }
  | { type: "UPDATE_PRODUCT"; payload: OrderItem }
  | { type: "REMOVE_ORDER_ITEM"; payload: string }
  | {
      type: "ADD_PRODUCT_WITH_TOPPINGS";
      payload: {
        product: Product;
        productAttributeElements: OrderItemProductAttributeElement[];
      };
    }
  | {
      type: "UPDATE_PRODUCT_TOPPINGS";
      payload: {
        itemId: string;
        productAttributeElements: OrderItemProductAttributeElement[];
      };
    };

const initialState: OrderState = {
  orderDataInput: {
    items: [],
    pickupMethod: "DELIVERY",
    shopBranchId: "",
    paymentMethod: "COD",
    buyerName: "",
    buyerPhone: "",
    offerItemIds: [],
    buyerFullAddress: "",
    receiverName: "",
    receiverPhone: "",
    receiverAddress: "",
    latitude: 0,
    longitude: 0,
    customerShipServiceId: "",
    note: "",
    promotionCode: "",
    useRewardPoint: false,
    referralCode: "",
    tableCode: "",
    affiliateCode: "",
    promotionId: "",
    promotionApplies: [],
    haveIssueInvoice: false,
    customerShipMethod: EShipMethod.DRIVER,
  },
  draftOrder: null,
  finalOrder: null,
  loading: false,
  error: null,
};

export const convertOrderItemToOrderItemInput = (
  item: OrderItem
): OrderItemInput => ({
  quantity: item?.qty || 1,
  basePrice: item?.basePrice,
  note: item?.note || "",
  productId: item?.productId,
  pricePolicyId: item?.pricePolicyId,
  productName: item?.productName,
  productImageUrl: item?.product?.image,
  supplierId: item?.product?.supplierId,
  categoryIds: item?.product?.categoryIds,
  productAttributeElements:
    item?.productAttributeElements?.map(
      (attr: OrderItemProductAttributeElement) => ({
        productAttributeElementId: attr?.productAttributeElementId || "",
      })
    ) || [],
  valueAddedTaxRateCode: item?.valueAddedTaxRateCode,
  toppings: item?.toppings,
  unitId: item?.product?.unitId,
});

const orderReducer = (state: OrderState, action: OrderAction): OrderState => {
  switch (action.type) {
    case "UPDATE_ORDER_INPUT":
      return {
        ...state,
        orderDataInput: { ...state.orderDataInput, ...action.payload },
        error: null,
      };
    case "SET_DRAFT_ORDER":
      return {
        ...state,
        draftOrder: action.payload,
        error: action.payload.invalid ? action.payload.invalidReason : null,
      };
    case "SET_FINAL_ORDER":
      return { ...state, finalOrder: action.payload, error: null };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "RESET_ORDER":
      return { ...initialState };

    case "UPDATE_PRODUCT":
      const updatedDraftItems = (state.draftOrder?.order?.items || []).map(
        (item) => (item?.id === action.payload.id ? action.payload : item)
      );

      const updatedInputItems = updatedDraftItems.map(
        convertOrderItemToOrderItemInput
      );

      return {
        ...state,
        orderDataInput: {
          ...state.orderDataInput,
          items: updatedInputItems,
        },
      };

    case "REMOVE_ORDER_ITEM":
      const filteredDraftItems = (state.draftOrder?.order?.items || []).filter(
        (item) => item?.id !== action.payload
      );

      const updatedInputItemsAfterRemove = filteredDraftItems.map(
        convertOrderItemToOrderItemInput
      );

      return {
        ...state,
        orderDataInput: {
          ...state.orderDataInput,
          items: updatedInputItemsAfterRemove,
        },
      };

    case "ADD_PRODUCT_WITH_TOPPINGS":
      const newOrderItem: OrderItemInput = {
        quantity: 1,
        productId: action.payload.product.id || "",
        productName: action.payload.product.name || "",
        productImageUrl: action.payload.product.image || "",
        basePrice: action.payload.product.basePrice || 0,
        note: "",
        productAttributeElements: action.payload.productAttributeElements.map(
          (attr) => ({
            productAttributeElementId: attr.productAttributeElementId || "",
          })
        ),
      };

      const currentItems = state.orderDataInput.items || [];
      return {
        ...state,
        orderDataInput: {
          ...state.orderDataInput,
          items: [...currentItems, newOrderItem],
        },
      };

    case "UPDATE_PRODUCT_TOPPINGS":
      const draftItemsWithUpdatedToppings = (
        state.draftOrder?.order?.items || []
      ).map((item) => {
        if (item?.id === action.payload.itemId) {
          return {
            ...item,
            productAttributeElements: action.payload.productAttributeElements,
          };
        }
        return item;
      });

      const inputItemsWithUpdatedToppings = draftItemsWithUpdatedToppings.map(
        convertOrderItemToOrderItemInput
      );

      return {
        ...state,
        orderDataInput: {
          ...state.orderDataInput,
          items: inputItemsWithUpdatedToppings,
        },
      };

    default:
      return state;
  }
};

interface OrderContextType {
  state: OrderState;
  updateOrderInput: (input: Partial<CreateDraftOrderInput>) => void;
  generateDraftOrder: () => Promise<void>;
  generateFinalOrder: () => Promise<void>;
  resetOrder: () => void;
  isValidForOrder: boolean;
  updateProduct: (orderItem: OrderItem) => void;
  removeOrderItem: (itemId: string) => void;
  addProductWithToppings: (
    product: Product,
    productAttributeElements: OrderItemProductAttributeElement[]
  ) => void;
  updateProductToppings: (
    itemId: string,
    productAttributeElements: OrderItemProductAttributeElement[]
  ) => void;
  findOrderItemById: (itemId: string) => OrderItem | undefined;

  findOrderItemByProductId: (productId: string) => OrderItem | undefined;
  onPay: () => Promise<void>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(orderReducer, initialState);

  const [generateDraftOrderMutation] = useMutation(GenerateDraftOrderDocument);
  const [generateOrderMutation] = useMutation(GenerateOrderDocument);
  const [getMac] = useMutation(generateMacZaloMiniAppDocument);

  const updateProduct = useCallback((orderItem: OrderItem) => {
    dispatch({ type: "UPDATE_PRODUCT", payload: orderItem });
  }, []);

  const removeOrderItem = useCallback((itemId: string) => {
    dispatch({ type: "REMOVE_ORDER_ITEM", payload: itemId });
  }, []);

  const updateOrderInput = useCallback(
    (input: Partial<CreateDraftOrderInput>) => {
      dispatch({ type: "UPDATE_ORDER_INPUT", payload: input });
    },
    []
  );

  const addProductWithToppings = useCallback(
    (
      product: Product,
      productAttributeElements: OrderItemProductAttributeElement[]
    ) => {
      dispatch({
        type: "ADD_PRODUCT_WITH_TOPPINGS",
        payload: { product, productAttributeElements },
      });
    },
    []
  );

  const updateProductToppings = useCallback(
    (
      itemId: string,
      productAttributeElements: OrderItemProductAttributeElement[]
    ) => {
      dispatch({
        type: "UPDATE_PRODUCT_TOPPINGS",
        payload: { itemId, productAttributeElements },
      });
    },
    []
  );

  const findOrderItemById = useCallback(
    (itemId: string): OrderItem | undefined => {
      return (
        state.draftOrder?.order?.items?.find((item) => item?.id === itemId) ||
        undefined
      );
    },
    [state.draftOrder?.order?.items]
  );

  const findOrderItemByProductId = useCallback(
    (productId: string): OrderItem | undefined => {
      return (
        state.draftOrder?.order?.items?.find(
          (item) => item?.productId === productId
        ) || undefined
      );
    },
    [state.draftOrder?.order?.items]
  );

  const generateDraftOrder = useCallback(async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const { data } = await generateDraftOrderMutation({
        variables: { data: state.orderDataInput },
      });
      if (data?.generateDraftOrder) {
        dispatch({ type: "SET_DRAFT_ORDER", payload: data.generateDraftOrder });
      }
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error instanceof Error ? error.message : "Lỗi tạo đơn nháp",
      });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, [state.orderDataInput, generateDraftOrderMutation]);

  const generateFinalOrder = useCallback(async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const { data } = await generateOrderMutation({
        variables: { data: state.orderDataInput },
      });
      if (data?.generateOrder) {
        dispatch({ type: "SET_FINAL_ORDER", payload: data.generateOrder });
        navigate("/orders");
      }
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error instanceof Error ? error.message : "Lỗi tạo đơn hàng",
      });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, [state.orderDataInput, generateOrderMutation]);
  const onPay = async () => {
    try {
      if (state.error) {
        return;
      }
      if (state.loading) {
        return;
      }

      const items = state?.draftOrder?.order?.items?.map((item) => ({
        id: item?.id || "",
        amount: item?.basePrice || 0,
      }));

      const data = {
        desc: `Thanh toán`,
        item: items || [],
        amount: state.finalOrder?.amount || 0,
        method: JSON.stringify({
          id: "COD",
          // id: state.finalOrder?.paymentMethod,
          // isCustom: !ALL_PAYMENT_METHODS.includes(
          //   state.finalOrder?.paymentMethod as PAYMENT_METHOD_ZALO
          // ),
        }),
      };

      const mac = (await getMac({
        variables: {
          dataMac: data as any,
        },
      })) as any;

      const macKey = mac?.data?.generateMacZaloMiniApp;

      if (macKey) {
        createOrder({
          ...data,
          mac: macKey || "",
          success: (data) => {
            const { orderId } = data;
            if (orderId) {
              generateFinalOrder();
            }
          },
          fail: (err) => {
            console.log("Payment error: ", err);
          },
        });
      }
    } catch (e) {
      console.log("Payment error: ", e);
    }
  };
  const resetOrder = useCallback(() => {
    dispatch({ type: "RESET_ORDER" });
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(generateDraftOrder, 500);
    return () => clearTimeout(timeoutId);
  }, [state.orderDataInput, generateDraftOrder]);

  const isValidForOrder = Boolean(
    state.draftOrder && !state.draftOrder.invalid
  );

  return (
    <OrderContext.Provider
      value={{
        state,
        updateOrderInput,
        generateDraftOrder,
        generateFinalOrder,
        resetOrder,
        isValidForOrder,
        updateProduct,
        removeOrderItem,
        addProductWithToppings,
        updateProductToppings,
        findOrderItemById,
        findOrderItemByProductId,
        onPay,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) throw new Error("useOrder must be used within OrderProvider");
  return context;
};
