import "./ForwardButton.css";
import { ReactComponent as ForwardButtonIcon } from "../svg/icon-chevron-right.svg";

export default function ForwardButton() {
  return (
    <div className="ForwardButton">
      <ForwardButtonIcon className="lineIcon icon opaque" />
    </div>
  );
}
