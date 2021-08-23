import "./AddAnotherButton.css";
import { ReactComponent as AddAnotherButtonIcon } from "../svg/icon-add.svg";

export default function AddAnotherButton({ onClick }) {
  return (
    <header className="Card__Header">
      <div className="ForwardButton">
        <AddAnotherButtonIcon
          onClick={onClick}
          className="lineIcon button--add icon opaque"
        />
      </div>
    </header>
  );
}
