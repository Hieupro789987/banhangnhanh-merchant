import { appZaloMiniAppConfig } from "@/components/shared/config";
import {
  RegisterMemberInput,
  EShopType,
  RegisterMemberDocument,
  ELegalEntityType,
} from "@/generated/graphql";
import { useMutation } from "@apollo/client/react";
import React, { createContext, useContext, useReducer } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface RegisterContextType {
  data: RegisterMemberInput;
  updateData: (updates: Partial<RegisterMemberInput>) => void;
  submitRegistration: () => Promise<void>;
  isSubmitting: boolean;
}

const RegisterContext = createContext<RegisterContextType | undefined>(
  undefined
);

const initialState: RegisterMemberInput = {
  name: "",
  password: "",
  phone: "",
  shopName: "",
  username: "",
  address: "",
  agencyCode: appZaloMiniAppConfig.agencyCode,
  shopType: EShopType.DISTRIBUTOR,
  legalEntityType: ELegalEntityType.HOUSEHOLD_BUSINESS,
};

interface RegisterState {
  data: RegisterMemberInput;
  isSubmitting: boolean;
}

const initialRegisterState: RegisterState = {
  data: initialState,
  isSubmitting: false,
};

const registerReducer = (state: RegisterState, action: any): RegisterState => {
  switch (action.type) {
    case "UPDATE_DATA":
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      };
    case "SET_SUBMITTING":
      return { ...state, isSubmitting: action.payload };
    default:
      return state;
  }
};

export const RegisterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [registerMember] = useMutation(RegisterMemberDocument);
  const [state, dispatch] = useReducer(registerReducer, initialRegisterState);
  const navigate = useNavigate();

  const updateData = (updates: Partial<RegisterMemberInput>) => {
    dispatch({ type: "UPDATE_DATA", payload: updates });
  };

  const submitRegistration = async () => {
    dispatch({ type: "SET_SUBMITTING", payload: true });

    try {
      await registerMember({
        variables: { data: state.data },
      });
      toast.success("Đăng ký thành công");
      navigate("/login");
    } catch (error: any) {
      console.error("Đăng ký thất bại:", error);
      toast.error(`Đăng ký thất bại. ${error?.message}`);
    } finally {
      dispatch({ type: "SET_SUBMITTING", payload: false });
    }
  };

  return (
    <RegisterContext.Provider
      value={{
        data: state.data,
        updateData,
        submitRegistration,
        isSubmitting: state.isSubmitting,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error("useRegister must be used within a RegisterProvider");
  }
  return context;
};
