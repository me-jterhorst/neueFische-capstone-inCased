import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as DotMatrixIcon } from "../svg/icon-dotMatrix.svg";
import { ReactComponent as DarkmodeIcon } from "../svg/icon-darkmode.svg";
import { ReactComponent as AccountIcon } from "../svg/icon-account.svg";
import { ReactComponent as ImprintIcon } from "../svg/icon-imprint.svg";
import { ReactComponent as LoginIcon } from "../svg/icon-login.svg";

export default function Header() {
  const [isToggled, setIsToggled] = useState(false);

  function toggleNav() {
    setIsToggled(!isToggled);
  }
  return (
    <header
      className={`top-nav ${isToggled ? "top-nav--active" : " "}
    transition`}
    >
      <DotMatrixIcon onClick={() => toggleNav()} />
      <nav className="top-nav__menu dispFlex col">
        <NavLink onClick={() => toggleNav()} className="opaque" to="darkmode">
          <DarkmodeIcon />
          Darkmode
        </NavLink>
        <NavLink onClick={() => toggleNav()} className="opaque" to="account">
          <AccountIcon />
          Account
        </NavLink>
        <NavLink onClick={() => toggleNav()} className="opaque" to="imprint">
          <ImprintIcon />
          Imprint
        </NavLink>
        <NavLink onClick={() => toggleNav()} className="opaque" to="login">
          <LoginIcon />
          Login
        </NavLink>
      </nav>
    </header>
  );
}
