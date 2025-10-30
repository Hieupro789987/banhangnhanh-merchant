import React from "react";

interface ColTextProps {
  title: string;
  content: string | JSX.Element;
  titleClassName?: string;
  contentClassName?: string;
  subContent?: string | JSX.Element;
  subContentClassName?: string;
  className?: string;
  isLoading?: boolean;
}

const ColText: React.FC<ColTextProps> = ({
  title,
  content,
  className = "",
  titleClassName = "",
  contentClassName = "",
  subContent = "",
  subContentClassName = "",
  isLoading = false,
}) => {
  return (
    <div className={`flex flex-col gap-1 text-sm ${className}`}>
      <div className={`text-[#717681] text-[13px] ${titleClassName}`}>
        {title}
      </div>
      <div className={`font-semibold text-[#4E5461] ${contentClassName}`}>
        {isLoading ? <span className="loading-ellipsis"></span> : content}
      </div>
      <div className={`text-[#717681] ${subContentClassName}`}>
        {subContent}
      </div>
    </div>
  );
};

export default ColText;
