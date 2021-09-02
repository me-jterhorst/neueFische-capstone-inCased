import "./Header.css";
import { useState } from "react";
import { ReactComponent as DotMatrixIcon } from "../svg/icon-dotMatrix.svg";
import { ReactComponent as DarkmodeIcon } from "../svg/icon-darkmode.svg";
import { ReactComponent as AccountIcon } from "../svg/icon-account.svg";
import { ReactComponent as ImprintIcon } from "../svg/icon-imprint.svg";
import { ReactComponent as LoginIcon } from "../svg/icon-login.svg";
import useOnclickOutside from "react-cool-onclickoutside";
import MenuLink from "./MenuLink";

export default function Header({ isLogin, toggleLogin }) {
  const [isToggled, setIsToggled] = useState(false);
  const ref = useOnclickOutside(() => {
    setIsToggled(false);
  });

  function toggleNav() {
    setIsToggled(!isToggled);
  }
  return (
    <header
      className={`top-nav ${isToggled ? "top-nav--active" : " "}
    transition`}
    >
      <DotMatrixIcon onClick={() => toggleNav()} />
      <nav ref={ref} className="top-nav__menu dispFlex col">
        <MenuLink
          destination="Darkmode"
          clickAction={() => toggleNav()}
          icon={<DarkmodeIcon />}
        />
        {isLogin && (
          <MenuLink
            destination="Account"
            clickAction={() => toggleNav()}
            icon={<AccountIcon />}
          />
        )}

        <MenuLink
          destination="Imprint"
          clickAction={() => toggleNav()}
          icon={<ImprintIcon />}
        />
        {isLogin ? (
          <MenuLink
            destination="Logout"
            clickAction={() => toggleNav()}
            icon={<LoginIcon />}
            toggleLogin={toggleLogin}
          />
        ) : (
          <MenuLink
            destination="Login"
            clickAction={() => toggleNav()}
            icon={<LoginIcon />}
          />
        )}
      </nav>
    </header>
  );
}
