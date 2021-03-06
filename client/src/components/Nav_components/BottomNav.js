import "./BottomNav.css";
// ============================== import components
import SpeechButton from "../Search_components/SpeechButton";
import { ReactComponent as HomeIcon } from "../../svg/icons/icon-home.svg";
import { ReactComponent as CreateIcon } from "../../svg/icons/icon-create.svg";
import { ReactComponent as OverviewIcon } from "../../svg/icons/icon-overview.svg";
// ============================== import requirements
import { NavLink } from "react-router-dom";

export default function BottomNav({ handleSpeech, hasSpeech, disable }) {
  return (
    <footer className='BottomNav dispFlex col'>
      {hasSpeech ? (
        <SpeechButton disable={disable} onMouseDown={handleSpeech} />
      ) : null}

      <nav className='TabNav dispFlex'>
        <NavLink className='opaque transition' exact to='/'>
          <HomeIcon />
        </NavLink>
        <NavLink className='opaque transition' to='/create'>
          <CreateIcon />
        </NavLink>
        <NavLink className='opaque transition' to='/overview'>
          <OverviewIcon />
        </NavLink>
      </nav>
    </footer>
  );
}
