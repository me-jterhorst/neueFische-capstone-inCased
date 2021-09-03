import "./ForwardButton.css";
import { ReactComponent as ForwardButtonIcon } from "../svg/icons/icon-chevron-right.svg";

export default function ForwardButton({ onClick }) {
  return (
    <button className='ForwardButton'>
      <ForwardButtonIcon onClick={onClick} className='lineIcon icon opaque' />
    </button>
  );
}
