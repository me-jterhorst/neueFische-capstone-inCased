import "./SpeechButton.css";
import { ReactComponent as MicrophoneIcon } from "../svg/icon-microphone.svg";

export default function SpeechButton({ onMouseDown }) {
  return (
    <div className="speechPart">
      <button onMouseDown={onMouseDown} className="speechButton transition">
        <MicrophoneIcon />
      </button>
    </div>
  );
}
