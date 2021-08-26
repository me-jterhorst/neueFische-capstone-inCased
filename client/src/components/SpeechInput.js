import "./SpeechInput.css";
import { ReactComponent as MicrophoneIcon } from "../svg/icon-microphone.svg";

export default function SpeechInput({
  onChange,
  onMouseDown,
  identifier,
  label,
  value = "",
  isRequired = true,
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
        <span className="Speechinput-button-wrapper">
          <button
            onMouseDown={onMouseDown}
            onClick={(event) => event.preventDefault()}
            className={`Speechinput-button opaque recording--active`}
          >
            <MicrophoneIcon className="icon--small" id={label} />
          </button>
        </span>
      </span>
    </fieldset>
  );
}
