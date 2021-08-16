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
    transition`}>
      <DotMatrixIcon onClick={() => toggleNav()} />
      <nav className='top-nav__menu dispFlex col'>
        <NavLink className='opaque' to='#'>
          <DarkmodeIcon />
          Darkmode
        </NavLink>
        <NavLink className='opaque' to='#'>
          <AccountIcon />
          Account
        </NavLink>
        <NavLink className='opaque' to='#'>
          <ImprintIcon />
          Imprint
        </NavLink>
        <NavLink className='opaque' to='#'>
          <LoginIcon />
          Login
        </NavLink>
      </nav>
    </header>
  );
}
