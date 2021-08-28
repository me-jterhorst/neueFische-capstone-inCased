import "./SpeechInput.css";
import { ReactComponent as MicrophoneIcon } from "../svg/icon-microphone.svg";

export default function SpeechInput({
  onChange,
  onMouseDown,
  identifier,
  disable,
  label,
  value = "",
  isRequired = true,
  supportsSpeech,
}) {
  return (
    <fieldset className={`Speechinput-box `}>
      <label
        className="Speechinput-label"
        htmlFor={`${identifier}__${label}`}
      >{`${label}:`}</label>
      <span className={`Speechinput-wrapper ${isRequired ? "" : "faded"}`}>
        <input
          type="text"
          className="Speechinput"
          name={`${identifier}__${label}`}
          id={`${identifier}__${label}`}
          placeholder={label}
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
