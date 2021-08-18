import "./AddAnotherButton.css";
import { ReactComponent as AddAnotherButtonIcon } from "../svg/icon-add.svg";

export default function AddAnotherButton() {
  return (
    <header className="Card__Header">
      <div className="ForwardButton">
        <AddAnotherButtonIcon className="lineIcon button--add icon opaque" />
      </div>
    </header>
  );
}
