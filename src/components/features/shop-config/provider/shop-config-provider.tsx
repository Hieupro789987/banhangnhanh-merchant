import { ShopConfig } from "@/generated/graphql";
import { useQuery } from "@apollo/client/react";
import React, { createContext, useContext, ReactNode, useEffect } from "react";
import { GetShopConfigDocument } from "@/generated/graphql";
import { useLoaderData } from "react-router";

interface ShopConfigContextType {
  shopConfig: ShopConfig;
  loading: boolean;
  error?: any;
}

const ShopConfigContext = createContext<ShopConfigContextType | undefined>(
  undefined
);

interface ShopConfigProviderProps {
  children: ReactNode;
}

export function ShopConfigProvider({ children }: ShopConfigProviderProps) {
  const loaderData = useLoaderData() as {
    isAuthenticated?: boolean;
  };

  const { data, loading, error } = useQuery(GetShopConfigDocument, {
    skip: !loaderData?.isAuthenticated,
  });

  const [shopConfig, setShopConfig] = React.useState<ShopConfig>({});

  useEffect(() => {
    if (data?.getShopConfig) {
      setShopConfig(data.getShopConfig);
    }
  }, [data]);

  const value = {
    shopConfig,
    loading,
    error,
  };

  return (
    <ShopConfigContext.Provider value={value}>
      {loading ? <></> : children}
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
