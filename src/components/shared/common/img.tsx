// components/common/Img.tsx
import { useState } from "react";
import { FaUser, FaImage, FaExpand } from "react-icons/fa";
import { ImageViewer } from "zmp-ui";

export interface ImgProps {
  src?: string | null;
  alt?: string;
  className?: string;
  avatar?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  fallback?: React.ReactNode;
  onClick?: () => void;
  responsive?: boolean;
  cover?: boolean;
  contain?: boolean;
  isShowClick?: boolean;
  images?: string[];
  activeIndex?: number;
}

const sizeClasses = {
  xs: "w-6 h-6",
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};

export function Img({
  src,
  alt = "",
  className = "",
  avatar = false,
  size = "md",
  fallback,
  onClick,
  responsive = false,
  cover = false,
  contain = false,
  isShowClick = false,
  images,
  activeIndex = 0,
  ...props
}: ImgProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  const handleClick = () => {
    if (isShowClick && src && !error) {
      setVisible(true);
    }
    onClick?.();
  };

  const imageList =
    images && images.length > 0
      ? images.map((src, i) => ({
          src,
          alt: src,
          key: i,
        }))
      : src
      ? [
          {
            src,
            alt: src,
            key: 1,
          },
        ]
      : [];
  const currentIndex = images && src ? images.indexOf(src) : 0;

  const baseClasses = `
    transition-all duration-200
    ${onClick || isShowClick ? "hover:opacity-90" : ""}
    ${loading ? "opacity-0" : "opacity-100"}
  `;

  const avatarClasses = avatar
    ? `
    rounded-full object-cover border-2 border-white shadow-sm
    ${sizeClasses[size]}
  `
    : "";

  const responsiveClasses = responsive ? "w-full h-auto" : "";

  const objectFitClass = cover
    ? "object-cover"
    : contain
    ? "object-contain"
    : "object-cover";

  const imgClasses = `
    ${baseClasses}
    ${avatarClasses}
    ${responsiveClasses}
    ${objectFitClass}
    ${className}
  `.trim();

  if (!src || error) {
    return (
      <div
        className={`
          flex items-center justify-center
          bg-gray-200 text-gray-400
          ${avatar ? `rounded-full ${sizeClasses[size]}` : "rounded-lg"}
          ${onClick || isShowClick ? "cursor-pointer hover:bg-gray-300" : ""}
          ${className}
        `}
        onClick={handleClick}
        {...props}
      >
        {fallback ||
          (avatar ? (
            <FaUser className="w-1/2 h-1/2" />
          ) : (
            <FaImage className="w-1/3 h-1/3" />
          ))}
      </div>
    );
  }

  return (
    <>
      <div className={`relative ${avatar ? "inline-block" : ""}`}>
        {loading && (
          <div
            className={`
              absolute
              animate-pulse bg-gray-200
              ${avatar ? `rounded-full ${sizeClasses[size]}` : "rounded-lg"}
              ${className}
            `}
          />
        )}

        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={imgClasses}
          onError={handleError}
          onLoad={handleLoad}
          onClick={handleClick}
          {...props}
        />

        {isShowClick && !avatar && (
          <div
            className="absolute bottom-2 right-2 bg-black/50 text-white rounded-full p-1"
            onClick={handleClick}
          >
            <FaExpand className="w-3 h-3" />
          </div>
        )}
      </div>

      {isShowClick && imageList.length > 0 && (
        <ImageViewer
          onClose={() => setVisible(false)}
          activeIndex={activeIndex !== undefined ? activeIndex : currentIndex}
          images={imageList}
          visible={visible}
        />
      )}
    </>
  );
}
