import "./Create.css";
// ============================ Import Components
import CreateTask from "./CreateTask";
import CreateReminder from "./CreateReminder";
// ============================ Import Requirements
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

export default function Create({ isLogin, supportsSpeech }) {
  /** ==============================  Speech To Text */
  const SpeechRecognition = window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  const [disable, setDisable] = useState(false);

  function onSpeechInput(event) {
    event.preventDefault();
    const buttonTarget = event.target.id;
    recognition.start();

    recognition.onstart = () => {
      setDisable(true);
    };
    recognition.onresult = (event) => {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript;

      // switch (buttonTarget.toLowerCase()) {
      //   case "trigger":
      //     setTriggerInput(transcript.slice(0, -1));
      //     break;
      //   case "event":
      //     setEventTriggerInput(transcript.slice(0, -1));
      //     break;
      //   case "verb":
      //     setVerbInput(transcript.slice(0, -1));
      //     break;
      //   case "action":
      //     setActionInput(transcript.slice(0, -1));
      //     break;
      //   case "with":
      //     setWithInput(transcript.slice(0, -1));
      //     break;
      // }
    };

    recognition.onend = () => {
      setDisable(false);
    };
  }

  return (
    <Switch>
      <Route path="/create/:taskId">
        <CreateTask
          supportsSpeech={supportsSpeech}
          disabled={disable}
          onSpeechInput={onSpeechInput}
        />
      </Route>
      <Route path="/create">
        <CreateReminder
          supportsSpeech={supportsSpeech}
          disable={disable}
          onSpeechInput={onSpeechInput}
        />
      </Route>
    </Switch>
  );
}
