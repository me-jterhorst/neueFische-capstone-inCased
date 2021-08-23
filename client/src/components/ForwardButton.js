import "./ForwardButton.css";
import { ReactComponent as ForwardButtonIcon } from "../svg/icon-chevron-right.svg";

export default function ForwardButton({ onClick }) {
  return (
    <div className="ForwardButton">
      <ForwardButtonIcon onClick={onClick} className="lineIcon icon opaque" />
    </div>
  );
}
