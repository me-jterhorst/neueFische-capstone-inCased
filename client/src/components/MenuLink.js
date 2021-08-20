import { NavLink } from "react-router-dom";

export default function MenuLink({ destination, icon, clickAction }) {
  function logout() {
    return;
  }
  return (
    <NavLink
      onClick={clickAction}
      onMouseDown={destination === "Logout" ? () => logout() : null}
      className="opaque"
      exact
      to={`/${destination.toLowerCase()}`}
    >
      {icon}
      {destination}
    </NavLink>
  );
}
