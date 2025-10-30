import {
  CreateDraftOrderInput,
  DraftOrderData,
  GenerateDraftOrderDocument,
  GenerateOrderDocument,
  Order,
} from "@/generated/graphql";
import { useMutation } from "@apollo/client/react";
import React, {
  createContext,
  useContext,
  useCallback,
  useReducer,
  useEffect,
} from "react";

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
  | { type: "RESET_ORDER" };

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
  },
  draftOrder: null,
  finalOrder: null,
  loading: false,
  error: null,
};

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
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  const [generateDraftOrderMutation] = useMutation(GenerateDraftOrderDocument);
  const [generateOrderMutation] = useMutation(GenerateOrderDocument);

  const updateOrderInput = useCallback(
    (input: Partial<CreateDraftOrderInput>) => {
      dispatch({ type: "UPDATE_ORDER_INPUT", payload: input });
    },
    []
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

  const resetOrder = useCallback(() => {
    dispatch({ type: "RESET_ORDER" });
  }, []);

  useEffect(() => {
    // const { items, shopBranchId } = state.orderDataInput;
    // if (!items?.length || !shopBranchId) return;

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
