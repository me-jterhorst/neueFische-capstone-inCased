import "./SpeechButton.css";
import { ReactComponent as MicrophoneIcon } from "../svg/icon-microphone.svg";

export default function SpeechButton({ disable, onMouseDown }) {
  return (
    <div className="speechPart">
      <button
        disabled={disable}
        onMouseDown={onMouseDown}
        className="speechButton transition"
      >
        <MicrophoneIcon />
      </button>
    </div>
  );
}
