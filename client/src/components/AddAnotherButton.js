import "./AddAnotherButton.css";
import { ReactComponent as AddAnotherButtonIcon } from "../svg/icon-add.svg";

export default function AddAnotherButton({ onClick }) {
  return (
    <button className="ForwardButton">
      <AddAnotherButtonIcon
        onClick={onClick}
        className="lineIcon button--add icon opaque"
      />
    </button>
  );
}
