import { NavLink } from "react-router-dom";

export default function MenuLink({
  destination,
  icon,
  clickAction,
  toggleLogin,
}) {
  return (
    <NavLink
      onClick={clickAction}
      onMouseDown={destination === "Logout" ? toggleLogin : null}
      className="opaque"
      exact
      to={`/${destination.toLowerCase()}`}
    >
      {icon}
      {destination}
    </NavLink>
  );
}
