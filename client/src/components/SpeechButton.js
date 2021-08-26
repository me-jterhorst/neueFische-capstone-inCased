import "./SpeechButton.css";
import { ReactComponent as MicrophoneIcon } from "../svg/icon-microphone.svg";

export default function SpeechButton() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.onstart = function () {
    console.log("voice recognition activated");
  };

  recognition.onresult = function (event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    console.log(transcript);
  };

  function startRecording() {
    recognition.start();
  }

  return (
    <div className="speechPart">
      <button onMouseDown={startRecording} className="speechButton transition">
        <MicrophoneIcon />
      </button>
    </div>
  );
}
