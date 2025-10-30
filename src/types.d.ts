export interface Option<T = any> {
  value: T;
  label: string;
  image?: string;
  className?: string;
  disabled?: boolean;
  color?:
    | "primary"
    | "accent"
    | "info"
    | "success"
    | "danger"
    | "warning"
    | "slate"
    | "orange"
    | "teal"
    | "cyan"
    | "purple"
    | "pink"
    | (string & {});

  cols?: Cols;
  data?: any;
  desc?: string;
}

export interface ReactProps {
  className?: string;
  key?: any;
  children?: any;
  style?: React.CSSProperties;
}

export interface DecodedToken {
  role: "MEMBER" | "STAFF";
  _id: string;
  username: string;
  createdAt: string;
  iat: number;
  exp: number;
}
