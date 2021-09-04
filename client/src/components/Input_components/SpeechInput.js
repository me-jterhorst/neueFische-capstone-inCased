import "./SpeechInput.css";
import { ReactComponent as MicrophoneIcon } from "../../svg/icons/icon-microphone.svg";
import { useState } from "react";
export default function SpeechInput({
  label,
  value,
  onChange,
  onMouseDown,
  isRequired = true,
}) {
  /** ==============================  Speech To Text */
  let supportsSpeech, SpeechRecognition, recognition;
  const [disable, setDisable] = useState(false);

  if (!window.webkitSpeechRecognition) {
    supportsSpeech = false;
  } else {
    supportsSpeech = true;
    SpeechRecognition = window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
  }

  function onSpeechInput(event) {
    event.preventDefault();
    recognition.start();

    recognition.onstart = () => {
      setDisable(true);
    };
    recognition.onresult = (event) => {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript.slice(0, -1);
      onMouseDown(label, transcript);
    };

    recognition.onend = () => {
      setDisable(false);
    };
  }

  return (
    <fieldset className={`Speechinput-box `}>
      <label className='Speechinput-label' htmlFor={label}>{`${label}:`}</label>
      <span className={`Speechinput-wrapper ${isRequired ? "" : "faded"}`}>
        <input
          id={label}
          name={label}
          type='text'
          className='Speechinput'
          value={value}
          onChange={onChange}
          required={isRequired}
        />
        {supportsSpeech && (
          <span className='Speechinput-button-wrapper'>
            <button
              disabled={disable}
              id={label}
              onMouseDown={onSpeechInput}
              onClick={(event) => event.preventDefault()}
              className={`Speechinput-button opaque recording--active `}>
              <MicrophoneIcon className='icon--small btn--microphone' />
            </button>
          </span>
        )}
      </span>
    </fieldset>
  );
}
