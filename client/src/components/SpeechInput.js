import "./SpeechInput.css";
import { ReactComponent as MicrophoneIcon } from "../svg/icon-microphone.svg";

export default function SpeechInput({ identifier, label }) {
  return (
    <fieldset className="Speechinput-box">
      <label
        className="Speechinput-label"
        for={`${identifier}__${label}`}
      >{`${label}:`}</label>
      <span className="Speechinput-wrapper">
        <input
          type="text"
          className="Speechinput"
          name={`${identifier}__${label}`}
          id={`${identifier}__${label}`}
          placeholder={label}
          required
        />
        <span className="Speechinput-button-wrapper">
          <button className="Speechinput-button opaque">
            <MicrophoneIcon className="icon--small" />
          </button>
        </span>
      </span>
    </fieldset>
  );
}
