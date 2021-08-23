import "./BackButton.css";
import { ReactComponent as BackButtonIcon } from "../svg/icon-chevron-left.svg";

export default function BackButton({ onClick }) {
  return (
    <div className="BackButton">
      <BackButtonIcon onClick={onClick} className="lineIcon icon opaque" />
    </div>
  );
}
