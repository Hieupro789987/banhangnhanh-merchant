import { useAtomValue } from "jotai";
import { useLocation, useNavigate } from "react-router-dom";

import { useMemo } from "react";
import { useRouteHandle } from "@/hooks";
import { getConfig } from "@/components/shared/utils/template";
import headerIllus from "@/static/header-illus.svg";

import { Icon } from "zmp-ui";
import TransitionLink from "@/components/shared/common/transition-link";
import { useAuth } from "@/components/features/auth/provider/auth-provider";
import { Img } from "@/components/shared/common/img";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [handle, match] = useRouteHandle();
  const { member, staff } = useAuth();

  const title =
    typeof handle?.title === "function" ? handle?.title?.() : handle?.title;
  const showBack = location.key !== "default" && !handle?.noBack;

  const avatar = member?.shopLogo || staff?.member?.shopLogo;
  const name = member?.shopName || staff?.member?.shopName;
  const phone = member?.phone || staff?.phone;
  return (
    <div
      className="w-full  flex flex-col bg-primary-gradient  px-4 text-primaryForeground pt-st overflow-hidden bg-no-repeat bg-right-top"
      style={
        {
          // backgroundImage: `url(${headerIllus})`,
        }
      }
    >
      <div className="w-full min-h-14 pr-[90px] flex py-2 space-x-2 items-center">
        {handle?.logo ? (
          <>
            <Img
              src={avatar}
              alt={avatar || "avatar"}
              className="flex-none w-9 h-9 !rounded-full"
            />
            <TransitionLink to="/profile" className="flex items-center">
              <div>
                <h1 className="text-sm font-bold line-clamp-1 w-50%">{name}</h1>
                <span className="text-xs text-white">{phone}</span>
              </div>
              <div className="py-1" onClick={() => navigate(-1)}>
                <Icon icon="zi-chevron-right" />
              </div>
            </TransitionLink>
          </>
        ) : (
          <>
            {showBack && (
              <div className="py-1" onClick={() => navigate(-1)}>
                <Icon icon="zi-arrow-left" />
              </div>
            )}
            {title && (
              <div className="text-xl font-medium truncate">{title}</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
