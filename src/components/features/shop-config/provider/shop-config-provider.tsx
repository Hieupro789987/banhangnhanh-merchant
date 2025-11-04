import { ShopConfig } from "@/generated/graphql";
import { useQuery } from "@apollo/client/react";
import React, { createContext, useContext, ReactNode, useEffect } from "react";
import { GetShopConfigDocument } from "@/generated/graphql";
import { useAuth } from "@/components/features/auth/provider/auth-provider";
import { nativeStorage } from "zmp-sdk";

interface ShopConfigContextType {
  shopConfig: ShopConfig;
  loading: boolean;
  error?: any;
  refetch: () => void;
}

const ShopConfigContext = createContext<ShopConfigContextType | undefined>(
  undefined
);

interface ShopConfigProviderProps {
  children: ReactNode;
}

export function ShopConfigProvider({ children }: ShopConfigProviderProps) {
  const [token, setToken] = React.useState<string | null>(null);

  useEffect(() => {
    const currentToken = nativeStorage.getItem("token");
    setToken(currentToken);
  }, [token]);

  const { data, loading, error, refetch } = useQuery(GetShopConfigDocument, {
    skip: !token,
    fetchPolicy: "cache-and-network",
    context: {
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    },
  });

  const [shopConfig, setShopConfig] = React.useState<ShopConfig>({});

  useEffect(() => {
    if (data?.getShopConfig) {
      setShopConfig(data.getShopConfig);
    }
  }, [data]);

  useEffect(() => {
    if (token) {
      refetch();
    }
  }, [token, refetch]);

  const value = {
    shopConfig,
    loading,
    error,
    refetch,
  };

  return (
    <ShopConfigContext.Provider value={value}>
      {children}
    </ShopConfigContext.Provider>
  );
}

export function useShopConfig() {
  const context = useContext(ShopConfigContext);

  if (context === undefined) {
    throw new Error("useShopConfig must be used within a ShopConfigProvider");
  }

  return context;
}
