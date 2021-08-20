import "./BackButton.css";
import { ReactComponent as BackButtonIcon } from "../svg/icon-chevron-left.svg";

export default function BackButton() {
  return (
    <div className="BackButton">
      <BackButtonIcon className="lineIcon icon opaque" />
    </div>
  );
}
