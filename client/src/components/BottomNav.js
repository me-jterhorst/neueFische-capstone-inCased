import "./BottomNav.css";
import { NavLink } from "react-router-dom";
import SpeechButton from "./SpeechButton";
import { ReactComponent as HomeIcon } from "../svg/icon-home.svg";
import { ReactComponent as CreateIcon } from "../svg/icon-create.svg";
import { ReactComponent as OverviewIcon } from "../svg/icon-overview.svg";

export default function BottomNav({ hasSpeech = true }) {
  return (
    <footer className='dispFlex'>
      {hasSpeech ? <SpeechButton /> : null}

      <nav className='tabNav dispFlex'>
        <NavLink className='opaque' to='#'>
          <HomeIcon />
        </NavLink>
        <NavLink className='opaque' to='#'>
          <CreateIcon />
        </NavLink>
        <NavLink className='opaque' to='#'>
          <OverviewIcon />
        </NavLink>
      </nav>
    </footer>
  );
}
