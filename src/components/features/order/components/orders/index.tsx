import React from "react";

import { useInfiniteScroll } from "@/components/shared/hooks/useInfiniteScroll";
import { Spinner } from "zmp-ui";
import {
  useOrders,
  useSimpleOrders,
} from "@/components/shared/hooks/use-order";
import { StatusLabel } from "@/components/shared/common/status-label";
import { ORDER_STATUS, PAYMENT_STATUS } from "@/components/shared/types/order";
import { RiTodoFill } from "react-icons/ri";
import { formatDate } from "date-fns";
import { parseNumber } from "@/components/shared/utils/format";

const Orders = () => {
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

  React.useEffect(() => {
    if (orders.length > 0) {
      completeInitialLoad();
    }
  }, [orders, completeInitialLoad]);

  return (
    <div className="bg-white min-h-screen">
      <div className="p-4">
        {isInitialLoad && loading && (
          <div className="flex items-center justify-center py-8">
            <Spinner />
          </div>
        )}

        <div className="space-y-3">
          {orders.map((order) => (
            <div
              key={order?.id}
              className="p-4 shadow-card bg-white rounded-lg"
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
