import "./Header.css";
// ============================== import components
import MenuLink from "./MenuLink";
import { ReactComponent as DotMatrixIcon } from "../../svg/icons/icon-dotMatrix.svg";
import { ReactComponent as DarkmodeIcon } from "../../svg/icons/icon-darkmode.svg";
import { ReactComponent as AccountIcon } from "../../svg/icons/icon-account.svg";
import { ReactComponent as ImprintIcon } from "../../svg/icons/icon-imprint.svg";
import { ReactComponent as LoginIcon } from "../../svg/icons/icon-login.svg";
// ============================== import requirements
import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";

export default function Header({ isLogin, toggleLogin }) {
  const [isToggled, setIsToggled] = useState(false);
  const ref = useOnclickOutside(() => {
    setIsToggled(false);
  });

  return (
    <header
      className={`top-nav transition ${isToggled ? "top-nav--active" : " "} `}>
      <DotMatrixIcon onClick={() => setIsToggled(!isToggled)} />
      <nav ref={ref} className='top-nav__menu dispFlex col'>
        <MenuLink
          destination='Darkmode'
          clickAction={() => setIsToggled(!isToggled)}
          icon={<DarkmodeIcon />}
        />

        {isLogin && (
          <MenuLink
            destination='Account'
            clickAction={() => setIsToggled(!isToggled)}
            icon={<AccountIcon />}
          />
        )}

        <MenuLink
          destination='Imprint'
          clickAction={() => setIsToggled(!isToggled)}
          icon={<ImprintIcon />}
        />

        {isLogin ? (
          <MenuLink
            destination='Logout'
            clickAction={() => setIsToggled(!isToggled)}
            icon={<LoginIcon />}
            toggleLogin={toggleLogin}
          />
        ) : (
          <MenuLink
            destination='Login'
            clickAction={() => setIsToggled(!isToggled)}
            icon={<LoginIcon />}
          />
        )}
      </nav>
    </header>
  );
}
