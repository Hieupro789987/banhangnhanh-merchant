import React from "react";

interface RowTextProps {
  title: string;
  content: string | JSX.Element | undefined;
  titleClassName?: string;
  contentClassName?: string;
  isDot?: boolean;
  className?: string;
}

const RowText: React.FC<RowTextProps> = ({
  title,
  content,
  titleClassName = "",
  contentClassName = "",
  className = "",
  isDot,
}) => {
  return (
    <div className={`flex items-start text-sm ${className}`}>
      <div
        className={`flex-none w-1/3 text-[#717681] ${
          isDot ? "flex items-center" : ""
        } ${titleClassName}`}
      >
        {isDot ? (
          <div className="bg-neutral-300 w-1.5 h-1.5 rounded-full mx-1.5"></div>
        ) : (
          <></>
        )}
        {title}
      </div>
      <div
        className={`flex-1 font-medium text-right break-words text-[#4E5461] ${contentClassName}`}
      >
        {content}
      </div>
    </div>
  );
};

export default RowText;
