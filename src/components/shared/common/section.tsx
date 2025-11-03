import { PropsWithChildren, ReactNode } from "react";

export interface SectionProps {
  title: ReactNode;
  className?: string;
  onClick?: () => void;
  prefix?: ReactNode;
  suffix?: ReactNode;
  titleClassName?: string;
}

export default function Section(props: PropsWithChildren<SectionProps>) {
  return (
    <div className={`${props.className}`} onClick={props.onClick}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {props.prefix && <div>{props.prefix}</div>}
          <div className={`text-sm font-bold w-full ${props.titleClassName}`}>
            {props.title}
          </div>
        </div>
        {props.suffix && <div>{props.suffix}</div>}
      </div>
      {props.children}
    </div>
  );
}
