import {
  EStaffPermissionScope,
  MemberGetMeDocument,
  StaffGetMeDocument,
  type Member,
  type Staff,
} from "@/generated/graphql";
import { useQuery } from "@apollo/client/react";
import React, { createContext, useContext, useEffect, useState } from "react";
import { nativeStorage } from "zmp-sdk";
import { useLoaderData, useNavigate } from "react-router-dom";

type UserRole = "MEMBER" | "STAFF";

interface AuthContextType {
  member: Member | null;
  staff: Staff | null;
  loading: boolean;
  isAuthenticated: boolean;
  role: UserRole | null;
  refetch: () => void;
  logout: () => void;
  setMember: (member: Member) => void;
  setStaff: (staff: Staff) => void;
  clearAuth: () => void;

  isCheckStaffPermissionScope: (
    permissionScope: EStaffPermissionScope
  ) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const loaderData = useLoaderData() as {
    isAuthenticated?: boolean;
    role?: UserRole;
    userId?: string;
    username?: string;
  };

  const isAuthenticatedFromLoader = loaderData?.isAuthenticated || false;
  const userRole = loaderData?.role;

  const [member, setMember] = useState<Member | null>(null);
  const [staff, setStaff] = useState<Staff | null>(null);

  const {
    data: memberData,
    loading: memberLoading,
    refetch: memberRefetch,
  } = useQuery(MemberGetMeDocument, {
    skip: !isAuthenticatedFromLoader || userRole !== "MEMBER",
    fetchPolicy: "network-only",
  });

  const {
    data: staffData,
    loading: staffLoading,
    refetch: staffRefetch,
  } = useQuery(StaffGetMeDocument, {
    skip: !isAuthenticatedFromLoader || userRole !== "STAFF",
    fetchPolicy: "network-only",
  });

  const isCheckStaffPermissionScope = (
    permissionScope: EStaffPermissionScope
  ): boolean => {
    if (!staff?.id) return true;

    if (!staff?.staffPermissions?.length) {
      return false;
    }

    return staff.staffPermissions.some((staffPerm) => {
      return staffPerm?.permissions?.some((perm) => {
        return perm?.permissionScopes?.includes(permissionScope);
      });
    });
  };

  useEffect(() => {
    if (memberData?.memberGetMe && userRole === "MEMBER") {
      setMember(memberData.memberGetMe);
      setStaff(null);
    } else if (staffData?.staffGetMe && userRole === "STAFF") {
      setStaff(staffData.staffGetMe);
      setMember(null);
    }
  }, [memberData, staffData, userRole]);

  const refetch = () => {
    if (userRole === "MEMBER") {
      return memberRefetch();
    } else if (userRole === "STAFF") {
      return staffRefetch();
    }
    return Promise.resolve();
  };

  const logout = async () => {
    nativeStorage.removeItem("token");
    clearAuth();
    navigate("/login", { replace: true });
  };

  const clearAuth = () => {
    setMember(null);
    setStaff(null);
  };

  const value: AuthContextType = {
    member,
    staff,
    loading: (memberLoading || staffLoading) && isAuthenticatedFromLoader,
    isAuthenticated: isAuthenticatedFromLoader && !!(member || staff),
    role: userRole || null,
    refetch,
    logout,
    setMember,
    setStaff,
    clearAuth,
    isCheckStaffPermissionScope,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
