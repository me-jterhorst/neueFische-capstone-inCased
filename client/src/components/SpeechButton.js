import "./SpeechButton.css";
import { ReactComponent as MicrophoneIcon } from "../svg/icon-microphone.svg";

export default function SpeechButton() {
  return (
    <div className='speechPart'>
      <button className='speechButton transition'>
        <MicrophoneIcon />
      </button>
    </div>
  );
}
