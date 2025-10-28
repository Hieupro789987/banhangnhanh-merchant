import { NavLink, NavLinkProps } from "react-router-dom";

export interface TransitionLinkProps extends NavLinkProps {}

export default function TransitionLink(props: TransitionLinkProps) {
  return <NavLink {...props} viewTransition />;
}
