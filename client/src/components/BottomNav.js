import "./BottomNav.css";
import { NavLink } from "react-router-dom";
import SpeechButton from "./SpeechButton";
import { ReactComponent as HomeIcon } from "../svg/icon-home.svg";
import { ReactComponent as CreateIcon } from "../svg/icon-create.svg";
import { ReactComponent as OverviewIcon } from "../svg/icon-overview.svg";

export default function BottomNav({ handleSpeech, hasSpeech, disable }) {
  return (
    <footer className="dispFlex BottomNav">
      {hasSpeech ? (
        <SpeechButton disable={disable} onMouseDown={handleSpeech} />
      ) : null}

      <nav className="tabNav dispFlex">
        <NavLink className="opaque" exact to="/">
          <HomeIcon />
        </NavLink>
        <NavLink className="opaque" to="/create/0">
          <CreateIcon />
        </NavLink>
        <NavLink className="opaque" exact to="/overview">
          <OverviewIcon />
        </NavLink>
      </nav>
    </footer>
  );
}
