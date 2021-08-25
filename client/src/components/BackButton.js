import "./BackButton.css";
import { ReactComponent as BackButtonIcon } from "../svg/icon-chevron-left.svg";

export default function BackButton({ onClick }) {
  return (
    <button className="BackButton">
      <BackButtonIcon onClick={onClick} className="lineIcon icon opaque" />
    </button>
  );
}
