import { useAuth } from "@/components/features/auth/provider/auth-provider";
import React from "react";
import headerIllus from "@/static/bg.png";
import { Img } from "@/components/shared/common/img";
import Section from "@/components/shared/common/section";
import { FiLock, FiLogOut, FiUser } from "react-icons/fi";
import toast from "react-hot-toast";
import useAlert from "@/components/shared/hooks/use-alert";

interface SubMenuItem {
  icon: React.ReactNode;
  label: string;
  content: string;
  href?: string;
  onClick?: () => void;
}

interface MenuItem {
  title: string;
  subTitle?: string;
  isShow: boolean;
  subMenu: SubMenuItem[];
}

const Profile = () => {
  const { logout, member, staff } = useAuth();
  const avatar = member?.avatar || staff?.avatar;
  const username = member?.username || staff?.username;
  const shopName = member?.shopName || staff?.member?.shopName;
  const shopLogo = member?.shopLogo || staff?.member?.shopLogo;
  const alert = useAlert();
  const menuData: MenuItem[] = [
    {
      title: "Cài đặt tài khoản",
      isShow: true,
      subMenu: [
        {
          icon: <FiUser className="text-cyan-500 text-lg" />,
          label: "Thông tin cá nhân",
          content: "Cập nhật thông tin tài khoản",
          href: "/profile/setting",
        },
        // {
        //   icon: <FiLock className="text-red-500 text-lg" />,
        //   label: "Đổi mật khẩu",
        //   content: "Thay đổi mật khẩu đăng nhập",
        //   href: "/change-password",
        // },
        {
          icon: <FiLogOut className="text-gray-600 text-lg" />,
          label: "Đăng xuất",
          content: "Đăng xuất khỏi hệ thống",
          onClick: () => {
            alert.confirm(
              "Bạn có chắc chắn muốn đăng xuất?",
              () => logout(),
              "Xác nhận",
              "Hủy",
              "danger",
              { position: "top-center" }
            );
          },
        },
      ],
    },
  ];

  return (
    <div className="min-h-full space-y-2 flex flex-col bg-background">
      <div
        className="h-20 px-4"
        style={{
          backgroundImage: `url(${headerIllus})`,
        }}
      >
        <div className="flex flex-col items-center gap-y-2">
          <Img isShowClick src={shopLogo} alt="logo" className="w-24 mt-10" />
          <div className="text-sm font-bold text-title">{shopName}</div>
          <div className="text-sm  text-subtitle">{username}</div>
        </div>
        <div className="bg-white mt-4 p-4 shadow-card rounded-lg">
          <Section
            titleClassName="text-subtitle !text-sm font-medium"
            title="Tổng quát"
            className="space-y-3"
          >
            <div className="space-y-4 pt-3 border-t border-t-neutral-100">
              {menuData
                .filter((item) => item.isShow)
                .map((item, index) => (
                  <div key={index} className="border-b pb-3 last:border-b-0">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      {item.subTitle && (
                        <span className="text-xs text-gray-500">
                          {item.subTitle}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      {item.subMenu.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded"
                          onClick={subItem.onClick}
                        >
                          <span className="text-lg">{subItem.icon}</span>
                          <div className="flex-1">
                            <div className="font-medium text-sm">
                              {subItem.label}
                            </div>
                            <div className="text-xs text-subtitle">
                              {subItem.content}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
