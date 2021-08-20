import { NavLink } from "react-router-dom";

export default function MenuLink({ destination, icon, clickAction }) {
  return (
    <NavLink
      onClick={clickAction}
      className="opaque"
      exact
      to={`/${destination.toLowerCase()}`}
    >
      {icon}
      {destination}
    </NavLink>
  );
}
