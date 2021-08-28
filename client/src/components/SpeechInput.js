import "./SpeechInput.css";
import { ReactComponent as MicrophoneIcon } from "../svg/icon-microphone.svg";

export default function SpeechInput({
  label,
  value,
  onChange,
  isRequired = true,
  onMouseDown,
  disable,
  supportsSpeech,
}) {
  return (
    <fieldset className={`Speechinput-box `}>
      <label className="Speechinput-label" htmlFor={label}>{`${label}:`}</label>
      <span className={`Speechinput-wrapper ${isRequired ? "" : "faded"}`}>
        <input
          id={label}
          name={label}
          type="text"
          className="Speechinput"
          value={value}
          onChange={onChange}
          required={isRequired}
        />
        {supportsSpeech && (
          <span className="Speechinput-button-wrapper">
            <button
              disabled={disable}
              id={label}
              onMouseDown={onMouseDown}
              onClick={(event) => event.preventDefault()}
              className={`Speechinput-button opaque recording--active `}
            >
              <MicrophoneIcon className="icon--small btn--microphone" />
            </button>
          </span>
        )}
      </span>
    </fieldset>
  );
}
