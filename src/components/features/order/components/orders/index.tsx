import React, { useEffect, useMemo, useState } from "react";
import { useInfiniteScroll } from "@/components/shared/hooks/useInfiniteScroll";

import {
  useOrders,
  useSimpleOrders,
} from "@/components/shared/hooks/use-order";
import { StatusLabel } from "@/components/shared/common/status-label";
import { ORDER_STATUS, PAYMENT_STATUS } from "@/components/shared/types/order";
import { RiTodoFill } from "react-icons/ri";
import { formatDate } from "date-fns";
import { parseNumber } from "@/components/shared/utils/format";
import { Skeleton } from "@/components/shared/common/skeleton";
import Spinner from "@/components/shared/common/spinner";
import { useOrderStatusValues } from "@/components/shared/hooks/use-order-status";
import { TabOption, Tabs } from "@/components/shared/common/tabs";

const Orders = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const { orderStatusValues, loading: statusLoading } = useOrderStatusValues();

  const { orders, loading, error, hasMore, loadMore } = useSimpleOrders({
    search: "",
    status: [],
    limit: 10,
    page: 1,

    enabled: true,
  });

  const { loaderRef, isInitialLoad, completeInitialLoad } = useInfiniteScroll({
    hasMore,
    loading,
    onLoadMore: loadMore,
    threshold: 0.1,
    enabled: true,
  });

  useEffect(() => {
    if (orders.length > 0) {
      completeInitialLoad();
    }
  }, [orders, completeInitialLoad]);

  const tabOptions: TabOption[] = useMemo(() => {
    const tabs = [{ key: "all", label: "Tất cả" }];
    return !!orderStatusValues?.length
      ? tabs.concat(
          orderStatusValues.map(
            (item) =>
              ({
                key: item?.status,
                label: item?.value,
              } as TabOption)
          )
        )
      : [];
  }, [orderStatusValues]);

  if (isInitialLoad && loading) {
    return (
      <div className="bg-white">
        <div className="p-4">
          <OrdersSkeleton count={8} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="sticky top-0 left-0 shadow-card">
        <Tabs
          options={tabOptions}
          onChange={(key) => {
            setActiveTab(key);
          }}
        />
      </div>
      <div className="p-4">
        <div className="space-y-3">
          {orders.map((order) => (
            <div
              key={order?.id}
              className={`p-4 shadow-card bg-white rounded-lg animate-fade-in-up [animation-fill-mode:backwards] `}
              // onClick={() => handleNavigateToDetail(order)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <RiTodoFill size={24} className="min-w-6 text-primary" />
                  <div className="ml-2">
                    <div className="font-bold text-[13px]">{order?.code}</div>
                    {order?.createdAt && (
                      <div className=" text-subtitle text-xs">
                        {formatDate(order.createdAt, "HH:mm - dd-MM-yyyy")}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-right text-[13px]">
                    {parseNumber(order?.amount)}đ
                  </div>
                  {/* <div className="text-subtitle text-[13px] text-right">
                    {order?.itemCount} sản phẩm
                  </div> */}
                  <StatusLabel
                    type="text"
                    className="px-0 text-xs"
                    options={PAYMENT_STATUS}
                    value={order?.paymentStatus}
                  />
                </div>
              </div>
              <hr className="my-3 border-neutral-100" />
              <div className="mt-3 flex justify-between gap-x-1">
                <div className="line-clamp-1 max-w-[70%] text-[13px]">
                  {order?.shopBranch?.name}
                </div>
                <StatusLabel
                  type="light"
                  options={ORDER_STATUS}
                  value={order?.status}
                />
              </div>
            </div>
          ))}
        </div>

        <div ref={loaderRef} className="py-4">
          {loading && !isInitialLoad && (
            <div className="flex items-center justify-center">
              <Spinner />
            </div>
          )}
          {!hasMore && orders.length > 0 && (
            <div className="text-center text-subtitle text-sm">
              Đã hiển thị tất cả đơn hàng
            </div>
          )}
        </div>

        {!loading && orders.length === 0 && (
          <div className="text-center py-8 text-subtitle">
            Không tìm thấy đơn hàng nào
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
const OrdersSkeleton = ({ count = 5 }: { count?: number }) => {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="p-4 shadow-card bg-white rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Skeleton className="w-6 h-6 rounded" />
              <div className="ml-2 space-y-2">
                <Skeleton className="w-32 h-4" />
                <Skeleton className="w-24 h-3" />
              </div>
            </div>
            {/* ... rest of skeleton */}
          </div>
        </div>
      ))}
    </div>
  );
};
