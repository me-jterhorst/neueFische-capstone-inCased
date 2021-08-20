import { NavLink } from "react-router-dom";

export default function MenuLink({ destination, icon, clickAction }) {
  return (
    <NavLink
      onMouseDown={
        destination === "Logout" ? () => console.log("I am out") : null
      }
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
