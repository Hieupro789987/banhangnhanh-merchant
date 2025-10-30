import {
  CartIcon,
  CategoryIcon,
  HomeIcon,
  PackageIcon,
} from "../../shared/common/vectors";
import HorizontalDivider from "../../shared/common/horizontal-divider";
import { useAtomValue } from "jotai";
import TransitionLink from "../../shared/common/transition-link";
import { useRouteHandle } from "@/hooks";
import Badge from "../../shared/common/badge";

const NAV_ITEMS = [
  {
    name: "Trang chủ",
    path: "/",
    icon: HomeIcon,
  },
  // {
  //   name: "Danh mục",
  //   path: "/categories",
  //   icon: CategoryIcon,
  // },
  {
    name: "Đơn hàng",
    path: "/orders",
    icon: PackageIcon,
  },
  // {
  //   name: "Giỏ hàng",
  //   path: "/cart",
  //   icon: (props) => {
  //     const cart = [];

  //     return (
  //       <Badge value={cart.length}>
  //         <CartIcon {...props} />
  //       </Badge>
  //     );
  //   },
  // },
];

export default function Footer() {
  const [handle] = useRouteHandle();

  if (handle && !handle?.noFooter) {
    return (
      <>
        <HorizontalDivider />
        <div
          className="w-full px-4 pt-2 grid pb-sb"
          style={{
            gridTemplateColumns: `repeat(${NAV_ITEMS.length}, 1fr)`,
          }}
        >
          {NAV_ITEMS.map((item) => {
            return (
              <TransitionLink
                to={item.path}
                key={item.path}
                className="flex flex-col items-center space-y-0.5 p-1 pb-0.5 cursor-pointer active:scale-105"
              >
                {({ isActive }) => (
                  <>
                    <div className="w-6 h-6 flex justify-center items-center">
                      <item.icon active={isActive} />
                    </div>
                    <div
                      className={`text-2xs ${isActive ? "text-primary" : ""}`}
                    >
                      {item.name}
                    </div>
                  </>
                )}
              </TransitionLink>
            );
          })}
        </div>
      </>
    );
  }
  return null;
}
